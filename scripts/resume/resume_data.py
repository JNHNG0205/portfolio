"""Resume content. Edit this file, then run build_resume.py to regenerate the PDF."""

NAME = "Teh Jun Heng"

CONTACT = [
    ("+6016 541 0252", None),
    ("junhengteh.123@gmail.com", None),
    ("linkedin.com/in/jun-heng-teh", "https://www.linkedin.com/in/jun-heng-teh-6773202b0/"),
    ("github.com/JNHNG0205", "https://github.com/JNHNG0205"),
    ("junheng.vercel.app", "https://junheng.vercel.app"),
]

EDUCATION = [
    {
        "org": "Asia Pacific University of Technology & Innovation",
        "location": "Kuala Lumpur, Malaysia",
        "title": "Bachelor of Science (Hons) in Software Engineering",
        "period": "Mar 2025 – Present",
        "bullets": [],
    },
    {
        "org": "Asia Pacific University of Technology & Innovation",
        "location": "Kuala Lumpur, Malaysia",
        "title": "Diploma in ICT, specialism in Interactive Technology",
        "period": "Sep 2022 – Feb 2025",
        "bullets": [],
    },
]

EXPERIENCE = [
    {
        "title": "Product Engineer",
        "period": "Jan 2026 – Jul 2026",
        "org": "Bundie (DeFi Startup)",
        "location": "Malaysia",
        "bullets": [
            "Built the Bundie mobile app, bringing DeFi yield strategies to users on mobile.",
            "Developed yield automation features to streamline allocation of user funds across DeFi protocols.",
            "Revamped the web frontend, improving usability and overall user experience.",
        ],
    },
    {
        "title": "Software Engineering Intern",
        "period": "Jan 2026 – Apr 2026",
        "org": "Hata (Cryptocurrency Exchange)",
        "location": "Kuala Lumpur, Malaysia",
        "bullets": [
            "Developed RESTful APIs in Go and Gin for trading wallet operations (deposits, withdrawals, internal transfers), improving transaction processing efficiency by over 20%.",
            "Built a Kafka-based push notification system delivering real-time alerts, scaled to 200,000+ users.",
            "Developed an internal profit reconciliation system for the finance department, improving reconciliation efficiency by over 15%.",
            "Assisted in prototyping the Hata Mini App, accelerating feature validation and iteration.",
        ],
    },
]

PROJECTS = [
    {
        "name": "AgentVeins",
        "stack": "TypeScript, Node.js, Solana, x402",
        "bullets": [
            "Built a spending firewall for AI agents enforcing allowlists, budgets, pinned recipients and a kill switch pre-spend.",
            "Published @agentveins/core and @agentveins/adapter-solana to npm, with a zero-dependency policy engine.",
            "Logged every allowed and blocked payment to a signed, tamper-evident audit log with truncation detection.",
        ],
    },
    {
        "name": "Anchor",
        "stack": "Go, Gin, PostgreSQL, React, Docker",
        "bullets": [
            "Built a full-stack FX and tax tracker in Go and Gin with a React frontend, covering the layer broker apps ignore.",
            "Implemented a conversion log with per-pair blended average rates, surfacing true returns in home currency, not spot.",
            "Added dividend tracking with US withholding applied for Malaysian residents, persisted via GORM and PostgreSQL.",
        ],
    },
    {
        "name": "ENSPin",
        "stack": "TypeScript, Node.js, Ethers.js, IPFS, Docker, Next.js",
        "bullets": [
            "Monitored events on ENS resolver smart contracts using TypeScript, Node.js, and Ethers.js.",
            "Integrated IPFS, Docker, and Next.js for continuous content pinning, reducing ENS content expiration cases by 70% for prototype users.",
        ],
    },
]

LEADERSHIP = [
    {
        "org": "APU Blockchain & Cryptocurrency Club (APUBCC)",
        "bullets": [
            "President (2025 – Present) – Leading a community of 300+ active members and 20+ committees to drive blockchain education and adoption.",
            "Vice President of External Affairs (2024 – 2025) – Secured USD 5,000+ in sponsorships; obtained a USD 15,000 prize pool for the DEVMatch Hackathon 2025.",
        ],
    },
]

ACHIEVEMENTS = [
    ("IOTA Hackathon Malaysia 2025", " – 1st Place"),
    ("ETHGlobal Taipei 2025", " – Best ENS Infrastructure"),
    ("Encode University Hackathon: Future of Blockchain", " – Citrea Track, 2nd Place"),
]

SKILLS = [
    ("Languages:", " JavaScript, TypeScript, Go, Python, Java, Rust, SQL"),
    ("Frameworks:", " React.js, Next.js, React Native, Node.js, Gin"),
    ("Developer Tools:", " Git, Linux, Docker, GitHub Actions, Kubernetes, GCP, Kafka"),
    ("Databases:", " MySQL, PostgreSQL"),
    ("Spoken Languages:", " English, Mandarin, Malay"),
]
