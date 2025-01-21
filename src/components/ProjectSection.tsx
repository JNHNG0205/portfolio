import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface Project {
  title: string
  description: string
  technologies: string[]
}

interface ProjectSectionProps {
  projects: Project[]
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, technologies }: Project) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
        <div className="mt-2 flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">
              {tech}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

