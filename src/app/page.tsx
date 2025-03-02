import { Header } from "@/components/Header"
import { ButtonGroup } from "@/components/ButtonGroup"
import { TabGroup } from "@/components/TabGroup"
import { ProjectSection } from "@/components/ProjectSection"
import { SkillSection } from "@/components/SkillSection"

export default function Home() {

  const TEH_BIRTH_YEAR = 2004

  const personalInfo = {
    name: "Teh Jun Heng",
    country: "Malaysia",
    age: new Date().getFullYear() - TEH_BIRTH_YEAR,
  }

  const links = {
    resumeUrl: "/resume.pdf",
    githubUrl: "https://github.com/JNHNG0205",
    email: "junhengteh.123@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/teh-jun-heng-6773202b0/",
  }

  const workExperiences = [
    {
      title: "Software Developent Intern & Teaching Assistant",
      organization: "Sigma School",
      period: "Oct 2024 - Jan 2025",
      description: "Worked as a frontend developer for Jobier, an AI powered job application website.",
      companyLogo:"/sigmaschool.webp"
    },
  ]

  const educationExperiences = [
    {
      title: "Bachelor of Science (Hons) in Software Engineering",
      organization: "Asia Pacific University of Technology & Innovation",
      period: " March 2025 - Present",
      description: "Focused on basic web technologies and software engineering.",
      companyLogo: "/apu.webp"
    },
    {
      title: "Diploma in Information & Communication Technology specialism in Interactive Technology",
      organization: "Asia Pacific University of Technology & Innovation",
      period: " Sep 2022 - Feb 2025",
      description: "Focused on basic web technologies and software engineering.",
      companyLogo: "/apu.webp"
    },
   
  ]

  const projects = [
    {
      title: "Data.Auc",
      description: "Developed a decentralized data marketplace with bidding system",
      technologies: ["Next.js", "Solidity", "Zero-Knowledge Proof","IPFS"],
      repoUrl: "https://github.com/JNHNG0205/encode-hackathon",
      liveUrl: "https://encode-hackathon-ten.vercel.app/",
      preview: "/dataauc.webp"
    },
    {
      title: "MAP Mak Mak",
      description: "Created a decentralized location-based bounty system with real-time updates.",
      technologies: ["Next.js", "Solidity", "Thirdweb"],
      repoUrl: "https://github.com/0xBenjamintan/ethbangkok_m1c4",
      liveUrl: "https://mapmakmak.vercel.app/",
      preview: "/mapmakmak.webp"
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
    { name: "TypeScript", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg"  },
    { name: "React", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"},
    { name: "Next.js", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
    { name: "Solidity", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/solidity/solidity-original.svg" },
    { name: "HTML", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
    { name: "CSS", logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
    { name: "Tailwind CSS", logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" }
  ]

  return (
    <main className="container mx-auto max-w-screen-md px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <Header {...personalInfo} />
      </div>
      <div className="flex justify-center items-center">
        <ButtonGroup {...links} />
      </div>
      <TabGroup workExperiences={workExperiences} educationExperiences={educationExperiences} />
      <div className="mt-8">
        <SkillSection skills={skills} />
      </div>
      <div className="mt-8">
        <ProjectSection projects={projects} />
      </div>
    </main>
  )
}

