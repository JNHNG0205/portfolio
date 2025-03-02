import { Button } from "@/components/ui/button"
import { Download, Github, Mail, Linkedin } from "lucide-react"
import { ThemeToggle } from "./ThemeToggle"

interface ButtonGroupProps {
  resumeUrl: string
  githubUrl: string
  email: string
  linkedinUrl: string
}

export function ButtonGroup({ resumeUrl, githubUrl, linkedinUrl }: ButtonGroupProps) {
  return (
    <div className="flex flex-wrap gap-4 my-6">
      <Button asChild>
        <a href={resumeUrl} download>
          <Download className="mr-2 h-4 w-4" /> Download Resume
        </a>
      </Button>
      <Button asChild variant="outline" size="icon">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-4 w-4" />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon">
        <a href= "mailto:junhengteh.123@gmail.com" aria-label="Email">
          <Mail className="h-4 w-4" />
        </a>
      </Button>
      <Button asChild variant="outline" size="icon">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-4 w-4" />
        </a>
      </Button>
      <ThemeToggle />
    </div>
  )
}

