import { Header } from "@/components/Header"
import { ButtonGroup } from "@/components/ButtonGroup"
import { TabGroup } from "@/components/TabGroup"
import { ProjectSection } from "@/components/ProjectSection"

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
    },
    {
      title: "MAP Mak Mak",
      description: "Created a decentralized location-based bounty system with real-time updates.",
      technologies: ["Next.js", "Solidity", "Thirdweb"],
    },
    {
      title: "SocialPro",
      description: "Designed and developed an AI powered social media posting platform for content generation and post scheduling",
      technologies: ["App Script", "Google Excel"],
    },
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
        <ProjectSection projects={projects} />
      </div>
    </main>
  )
}

