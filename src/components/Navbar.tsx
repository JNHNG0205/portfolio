"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { cn } from "@/lib/utils"

const SECTIONS = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
]

export function Navbar() {
  const [active, setActive] = useState<string>("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    )

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="sticky top-0 z-30 mb-12 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5">
        <ul className="flex items-center gap-4 sm:gap-7">
          {SECTIONS.map(({ id, label }) => (
            <li key={id}>
              <Link
                href={`#${id}`}
                className={cn(
                  "type-meta transition-colors",
                  active === id
                    ? "text-teal"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  )
}
