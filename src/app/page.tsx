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
    githubUrl: "https://github.com/johndoe",
    email: "junhengteh.123@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/johndoe",
  }

  const workExperiences = [
    {
      title: "Software Developent Intern & Teaching Assistant",
      organization: "Sigma School",
      period: "Oct 2024 - Jan 2025",
      description: "Worked as a frontend devolper for Jobier, an AI powered job application website.",
      companyLogo:"/sigmaschool.webp"
    },
  ]

  const educationExperiences = [
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
      description: "Developed a full-stack e-commerce platform with React and Node.js.",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      title: "MAP Mak Mak",
      description: "Created a task management application with real-time updates.",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
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

