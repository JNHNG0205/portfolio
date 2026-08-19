'use client';

import { Header } from "@/components/Header"
import { ButtonGroup } from "@/components/ButtonGroup"
import { TabGroup } from "@/components/TabGroup"
import { ProjectSection } from "@/components/ProjectSection"
import { SkillSection } from "@/components/SkillSection"
import { SectionHeading } from "@/components/SectionHeading"
import { Navbar } from "@/components/Navbar"
// import { Chatbot } from "@/components/Chatbot" // hidden until OPENAI_API_KEY is configured
import { useState, useEffect } from 'react'

export default function Home() {

  const TEH_BIRTH_YEAR = 2004

  // Use static data for initial server render
  const [personalInfo, setPersonalInfo] = useState({
    name: "Teh Jun Heng",
    country: "Malaysia",
    age: new Date().getFullYear() - TEH_BIRTH_YEAR
  });
  
  // Update age on client-side to avoid hydration mismatch
  useEffect(() => {
    setPersonalInfo(prev => ({
      ...prev,
      age: new Date().getFullYear() - TEH_BIRTH_YEAR
    }));
  }, []);

  const links = {
    email: "heng.teh0205@gmail.com",
    resumeUrl: "/Resume_Teh_Jun_Heng.pdf",
    githubUrl: "https://github.com/JNHNG0205",
    whatsappUrl: "https://wa.me/60165410252",
    linkedinUrl: "https://www.linkedin.com/in/jun-heng-teh-6773202b0/",
  }

  const workExperiences = [
    {
      title: "Product Engineer",
      organization: "Bundie (DeFi Startup)",
      period: "Jan 2026 - Jul 2026",
      description: [
        "Built the Bundie mobile app, bringing DeFi yield strategies to users on mobile.",
        "Developed yield automation features to streamline allocation of user funds across DeFi protocols.",
        "Revamped the web frontend, improving usability and overall user experience.",
      ],
    },
    {
      title: "Software Engineering Intern",
      organization: "Hata (Cryptocurrency Exchange)",
      period: "Jan 2026 - Apr 2026",
      description: [
        "Developed RESTful APIs in Go and Gin for trading wallet operations (deposits, withdrawals, internal transfers), improving transaction processing efficiency by over 20%.",
        "Built a Kafka-based push notification system delivering real-time alerts, scaled to 200,000+ users.",
        "Developed an internal profit reconciliation system for the finance department, improving reconciliation efficiency by over 15%.",
        "Assisted in prototyping the Hata Mini App, accelerating feature validation and iteration.",
      ],
    },
    {
      title: "Software Engineering Intern",
      organization: "Sigma School",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Built and maintained frontend features for the learning management system.",
        "Ran the data migration for the learning system, moving existing course and student records onto the new schema.",
        "Wrote technical and product documentation for the platform.",
      ],
    },
  ]

  const educationExperiences = [
    {
      title: "Bachelor of Science (Hons) in Software Engineering",
      organization: "Asia Pacific University of Technology & Innovation",
      period: "March 2025 - Present",
      description: [
        "Focusing on advanced software engineering principles, system architecture, and emerging technologies",
        "Studying core subjects including Software Design Patterns, Cloud Computing, and AI/ML integration",
        "Participating in industry projects and hackathons to gain practical experience"
      ],
      companyLogo: "/apu.webp"
    },
    {
      title: "Diploma in Information & Communication Technology specialism in Interactive Technology",
      organization: "Asia Pacific University of Technology & Innovation",
      period: "Sep 2022 - Feb 2025",
      description: [
        "Achieved a CGPA of 3.77, demonstrating strong academic performance",
        "Specialized in web development, mobile app development, and user interface design",
        "Completed capstone project developing a full-stack web application using modern technologies",
        "Active member of the university's tech club, participating in coding competitions and workshops"
      ],
      companyLogo: "/apu.webp"
    },
   
  ]

  const projects = [
    {
      title: "AgentVeins",
      description:
        "A spending firewall for AI agents. Every payment an agent attempts passes through a policy guard before money moves — vendor allowlists, per-transaction and daily budgets, pinned recipients and a kill switch — and every attempt, allowed or blocked, lands in a tamper-evident audit log.",
      proof: "Live · agentveins.com",
      technologies: ["TypeScript", "Solana", "x402", "Node.js"],
      repoUrl: "https://github.com/AgentVeins/agentveins",
      liveUrl: "https://agentveins.com",
      packageUrl: "https://www.npmjs.com/package/@agentveins/core",
    },
    {
      title: "Anchor",
      description:
        "A personal finance tool for Malaysian investors buying US assets, covering the layer broker apps ignore: FX and tax. Live mid-market rates, a conversion log that computes a blended average, true returns translated at your real rate rather than spot, and dividend tracking with US withholding applied.",
      proof: "In active development",
      technologies: ["Go", "Gin", "PostgreSQL", "React"],
      repoUrl: "https://github.com/JNHNG0205/FX-tracker",
      liveUrl: "",
    },
    {
      title: "ENSPin",
      description:
        "Keeps IPFS content behind ENS names online by watching for ContentHashChanged events and re-pinning the referenced files automatically. I built the web frontend and the control dashboard used to manage and monitor pinned content.",
      proof: "Best ENS Infrastructure, ETHGlobal Taipei 2025",
      technologies: ["React", "TypeScript", "IPFS", "Docker"],
      repoUrl: "https://github.com/ens-pin",
      liveUrl: "",
    },
  ]

  const devicon = (path: string) =>
    `https://raw.githubusercontent.com/devicons/devicon/master/icons/${path}`

  const skillGroups = [
    {
      label: "Languages",
      skills: [
        { name: "JavaScript", logo: devicon("javascript/javascript-original.svg") },
        { name: "TypeScript", logo: devicon("typescript/typescript-original.svg") },
        { name: "Go", logo: devicon("go/go-original.svg") },
        { name: "Python", logo: devicon("python/python-original.svg") },
        { name: "Java", logo: devicon("java/java-original.svg") },
        { name: "Rust", logo: devicon("rust/rust-original.svg") },
        { name: "SQL" },
      ],
    },
    {
      label: "Frameworks",
      skills: [
        { name: "React", logo: devicon("react/react-original.svg") },
        { name: "Next.js", logo: devicon("nextjs/nextjs-original.svg") },
        { name: "React Native", logo: devicon("react/react-original.svg") },
        { name: "Node.js", logo: devicon("nodejs/nodejs-original.svg") },
        { name: "Gin", logo: devicon("go/go-original.svg") },
      ],
    },
    {
      label: "Developer Tools",
      skills: [
        { name: "Git", logo: devicon("git/git-original.svg") },
        { name: "Linux", logo: devicon("linux/linux-original.svg") },
        { name: "Docker", logo: devicon("docker/docker-original.svg") },
        { name: "GitHub Actions", logo: devicon("githubactions/githubactions-original.svg") },
        { name: "Kubernetes", logo: devicon("kubernetes/kubernetes-original.svg") },
        { name: "GCP", logo: devicon("googlecloud/googlecloud-original.svg") },
        { name: "Kafka", logo: devicon("apachekafka/apachekafka-original.svg") },
      ],
    },
    {
      label: "Databases",
      skills: [
        { name: "MySQL", logo: devicon("mysql/mysql-original.svg") },
        { name: "PostgreSQL", logo: devicon("postgresql/postgresql-original.svg") },
      ],
    },
  ]

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-content px-5 pb-28">
        <section id="about" className="scroll-mt-24">
          <Header {...personalInfo} />
          <div className="mt-8">
            <ButtonGroup {...links} />
          </div>
        </section>

        <section id="experience" className="mt-20 scroll-mt-24 sm:mt-24">
          <SectionHeading>Experience</SectionHeading>
          <TabGroup
            workExperiences={workExperiences}
            educationExperiences={educationExperiences}
          />
        </section>

        <section id="skills" className="mt-20 scroll-mt-24 sm:mt-24">
          <SkillSection groups={skillGroups} />
        </section>

        <section id="projects" className="mt-20 scroll-mt-24 sm:mt-24">
          <ProjectSection projects={projects} />
        </section>
      </main>
      {/* <Chatbot personalInfo={personalInfo} /> hidden until OPENAI_API_KEY is configured */}
    </>
  )
}

