import { Button } from "@/components/ui/button"
import { Github, Link } from "lucide-react"
import Image from "next/image"

interface Project {
  title: string
  description: string
  technologies: string[]
  repoUrl: string
  liveUrl: string
  preview: string
}

interface ProjectSectionProps {
  projects: Project[]
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border rounded-lg p-4 flex flex-col space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <div className="flex space-x-2">
                <Button asChild variant="outline" size="icon">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Link className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="icon">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
            <p className="text-muted-foreground mt-2">{project.description}</p>
            <Image src={project.preview} alt="preview" width={600} height={400} className="rounded-md"/>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech) => (
                <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


