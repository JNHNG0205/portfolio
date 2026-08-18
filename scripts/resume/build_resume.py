"""Regenerate the resume PDF.

Reproduces the layout of the original ReportLab-generated resume (Letter,
Times family, ruled section headings, right-aligned dates).

    python3 -m venv .venv && .venv/bin/pip install reportlab
    .venv/bin/python scripts/resume/build_resume.py

Content lives in resume_data.py — edit that, not this file.

Writes to public/Resume_Teh_Jun_Heng.pdf.
"""
import os
import sys

from reportlab.lib.pagesizes import letter
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import resume_data as R  # noqa: E402

# --- Layout constants, measured from the original PDF ---
PAGE_W, PAGE_H = letter          # 612 x 792
LEFT = 45.6
RIGHT = 566.4
WIDTH = RIGHT - LEFT             # 520.8
BULLET_X = LEFT + 6              # glyph
TEXT_X = LEFT + 16               # bullet text, and its wrapped continuations
TEXT_W = RIGHT - TEXT_X

BOLD, ROMAN, ITALIC, SANS = "Times-Bold", "Times-Roman", "Times-Italic", "Helvetica"
BULLET = "\u2022"               # round bullet (WinAnsi 0x95)

SEC_SIZE, SEC_LEAD = 11.5, 13
ROW_SIZE, ROW_LEAD = 10.5, 12    # entry title / period
SUB_SIZE, SUB_LEAD = 10, 11.5    # org / location
BODY_SIZE, BODY_LEAD = 10.5, 12

GAP_RULE = 1.9                   # heading baseline -> rule
GAP_AFTER_RULE = 15              # rule -> first entry
GAP_ENTRY = 14                   # between entries in a section
GAP_SECTION = 18                 # last line -> next section heading
GAP_ROW = 11.5                   # title row -> org row
GAP_BODY = 12                    # -> first bullet


def wrap(text, font, size, width):
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if stringWidth(trial, font, size) <= width:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines or [""]


class Resume:
    def __init__(self, path):
        self.c = canvas.Canvas(path, pagesize=letter)
        self.c.setTitle(f"{R.NAME} — Resume")
        self.c.setAuthor(R.NAME)
        self.y = 0.0

    # --- primitives ---
    def text(self, x, y, s, font, size):
        self.c.setFont(font, size)
        self.c.drawString(x, y, s)

    def right(self, y, s, font, size):
        self.c.setFont(font, size)
        self.c.drawRightString(RIGHT, y, s)

    def centered(self, y, s, font, size):
        self.c.setFont(font, size)
        self.c.drawCentredString(PAGE_W / 2, y, s)

    # --- blocks ---
    def header(self):
        self.y = 733.2
        self.centered(self.y, R.NAME, BOLD, 22)
        self.y -= 14

        parts = [label for label, _ in R.CONTACT]
        sep = " | "
        total = sum(stringWidth(p, ROMAN, 10) for p in parts)
        total += stringWidth(sep, ROMAN, 10) * (len(parts) - 1)
        x = (PAGE_W - total) / 2
        self.c.setFont(ROMAN, 10)
        self.c.setLineWidth(0.75)
        for i, (label, url) in enumerate(R.CONTACT):
            w = stringWidth(label, ROMAN, 10)
            self.c.drawString(x, self.y, label)
            if url:
                self.c.line(x, self.y - 1.75, x + w, self.y - 1.75)
                self.c.linkURL(url, (x, self.y - 3, x + w, self.y + 9), relative=0)
            x += w
            if i < len(parts) - 1:
                self.c.drawString(x, self.y, sep)
                x += stringWidth(sep, ROMAN, 10)

    def section(self, title):
        self.y -= GAP_SECTION
        self.text(LEFT, self.y, title, BOLD, SEC_SIZE)
        self.y -= GAP_RULE
        self.c.setLineWidth(0.9)
        self.c.line(LEFT, self.y, RIGHT, self.y)
        self.y -= GAP_AFTER_RULE

    def two_col(self, left, right, font, size, lead):
        self.text(LEFT - 4.2, self.y, left, font, size)
        self.right(self.y, right, font, size)

    def bullets(self, items, size=BODY_SIZE):
        for item in items:
            self.y -= GAP_BODY
            self.text(BULLET_X, self.y, BULLET, ROMAN, 10)
            for i, line in enumerate(wrap(item, ROMAN, size, TEXT_W)):
                if i:
                    self.y -= BODY_LEAD
                self.text(TEXT_X, self.y, line, ROMAN, size)

    def entry(self, top_left, top_right, sub_left, sub_right, bullets, first):
        if not first:
            self.y -= GAP_ENTRY
        self.two_col(top_left, top_right, BOLD, ROW_SIZE, ROW_LEAD)
        self.y -= GAP_ROW
        self.two_col(sub_left, sub_right, ITALIC, SUB_SIZE, SUB_LEAD)
        self.bullets(bullets)

    def project(self, p, first):
        if not first:
            self.y -= GAP_ENTRY
        self.text(LEFT - 4.2, self.y, p["name"], BOLD, ROW_SIZE)
        x = LEFT - 4.2 + stringWidth(p["name"], BOLD, ROW_SIZE)
        self.text(x, self.y, " | ", BOLD, ROW_SIZE)
        x += stringWidth(" | ", BOLD, ROW_SIZE)
        self.text(x, self.y, p["stack"], ITALIC, ROW_SIZE)
        self.bullets(p["bullets"])

    def build(self):
        self.header()

        self.section("EDUCATION")
        for i, e in enumerate(R.EDUCATION):
            self.entry(e["org"], e["location"], e["title"], e["period"], e["bullets"], i == 0)

        self.section("EXPERIENCE")
        for i, e in enumerate(R.EXPERIENCE):
            self.entry(e["title"], e["period"], e["org"], e["location"], e["bullets"], i == 0)

        self.section("PROJECTS")
        for i, p in enumerate(R.PROJECTS):
            self.project(p, i == 0)

        self.section("LEADERSHIP & ACTIVITIES")
        for i, g in enumerate(R.LEADERSHIP):
            if i:
                self.y -= GAP_ENTRY
            self.text(LEFT - 4.2, self.y, g["org"], BOLD, ROW_SIZE)
            self.bullets(g["bullets"])

        self.section("ACHIEVEMENTS")
        first = True
        for head, tail in R.ACHIEVEMENTS:
            if not first:
                self.y -= GAP_BODY
            first = False
            self.text(BULLET_X, self.y, BULLET, ROMAN, 10)
            self.text(TEXT_X, self.y, head, BOLD, BODY_SIZE)
            self.text(TEXT_X + stringWidth(head, BOLD, BODY_SIZE), self.y, tail, ROMAN, BODY_SIZE)

        self.section("TECHNICAL SKILLS")
        first = True
        for head, tail in R.SKILLS:
            if not first:
                self.y -= BODY_LEAD
            first = False
            self.text(LEFT - 4.2, self.y, head, BOLD, BODY_SIZE)
            self.text(LEFT - 4.2 + stringWidth(head, BOLD, BODY_SIZE), self.y, tail, ROMAN, BODY_SIZE)

        self.c.showPage()
        self.c.save()
        return self.y


if __name__ == "__main__":
    root = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
    out = os.path.join(root, "public", "Resume_Teh_Jun_Heng.pdf")
    bottom = Resume(out).build()
    print(f"wrote {out}")
    print(f"last baseline y = {bottom:.1f} (page bottom margin starts at ~45; <0 means overflow)")
