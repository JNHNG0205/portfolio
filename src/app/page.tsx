'use client';

import { Header } from "@/components/Header"
import { ButtonGroup } from "@/components/ButtonGroup"
import { TabGroup } from "@/components/TabGroup"
import { ProjectSection } from "@/components/ProjectSection"
import { SkillSection } from "@/components/SkillSection"
import { Navbar } from "@/components/Navbar"
import { Chatbot } from "@/components/Chatbot"
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
    resumeUrl: "/Resume_Teh Jun Heng.pdf",
    githubUrl: "https://github.com/JNHNG0205",
    email: "junhengteh.123@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/jun-heng-teh-6773202b0/",
  }

  const workExperiences = [
    {
      title: "Software Developent Intern & Teaching Assistant",
      organization: "Sigma School",
      period: "Oct 2024 - Jan 2025",
      description: [
        "Spearheaded frontend development for Jobier, an AI-driven job application automation platform, enhancing job-seeker efficiency with intelligent auto-fill and submission tools.",
        "Built a fully responsive user interface using React, Tailwind CSS, and TypeScript, resulting in a 30% improvement in user engagement and mobile usability.",
        "Facilitated live and online coding support for over 50+ students in the Full Stack Developer Bootcamp, addressing real-time debugging, project guidance, and code reviews.",
        "Authored comprehensive technical documentation for internal workflows, improving onboarding time for new team members by 40%."
      ],
      companyLogo:"/sigmaschool.webp"
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
      title: "ENSPin",
      description: "Developed a backend service with dashboard that automatically pins IPFS files linked to ENS names, ensuring they stay online and accessible.",
      technologies: ["React", "TypeScript", "Docker","IPFS"],
      repoUrl: "https://github.com/ens-pin",
      liveUrl: "",
      preview: "/enspin.webp"
    },
    {
      title: "Data.Auc",
      description: "Developed a decentralized data marketplace with bidding system",
      technologies: ["Next.js", "Solidity", "Zero-Knowledge Proof","IPFS"],
      repoUrl: "https://github.com/JNHNG0205/encode-hackathon",
      liveUrl: "https://encode-hackathon-ten.vercel.app/",
      preview: "/dataauc.webp"
    },
    {
      title: "AIquidity",
      description: "Designed and developed an AI agent which can manage portfolio and execute smart contract transactions across liquidity pools ",
      technologies: ["Next.js", "Solidity", "AgentKit"],
      repoUrl: "https://github.com/noobstar3310/ethglobal-agentic",
      liveUrl: "https://ethglobal-agentic.vercel.app/",
      preview: "/aiquidity.webp"
    },
  ]

  const skills = [
    { name: "JavaScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
    { name: "Node.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" },
    { name : "Java", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original-wordmark.svg" },
    { name: "Golang", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
    { name: "Python", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "Solidity", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" },
    { name: "Rust", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" },
    { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "MySQL", logo: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg" }
  ]

  return (
    <>
      <Navbar />
      <main className="container mx-auto max-w-screen-md px-4 py-8">
        <div id="about" className="flex justify-between items-center mb-8">
          <Header {...personalInfo} />
        </div>
        <div className="flex justify-center items-center">
          <ButtonGroup {...links} />
        </div>
        <div id="experience" className="mt-8">
          <TabGroup workExperiences={workExperiences} educationExperiences={educationExperiences} />
        </div>
        <div id="skills" className="mt-8">
          <SkillSection skills={skills} />
        </div>
        <div id="projects" className="mt-8">
          <ProjectSection projects={projects} />
        </div>
      </main>
      <Chatbot personalInfo={personalInfo} />
    </>
  )
}

