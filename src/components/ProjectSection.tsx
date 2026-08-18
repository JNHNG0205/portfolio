import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "./SectionHeading"

interface Project {
  title: string
  description: string
  /** The one line that makes it real: live, shipped, or awarded. */
  proof: string
  technologies: string[]
  repoUrl: string
  liveUrl: string
  /** Published package, when the project ships as one. */
  packageUrl?: string
}

interface ProjectSectionProps {
  projects: Project[]
}

export function ProjectSection({ projects }: ProjectSectionProps) {
  return (
    <div>
      <SectionHeading>Projects</SectionHeading>
      <ol>
        {projects.map((project) => (
          <ProjectRow key={project.title} {...project} />
        ))}
      </ol>
    </div>
  )
}

function ProjectRow({
  title,
  description,
  proof,
  technologies,
  repoUrl,
  liveUrl,
  packageUrl,
}: Project) {
  const isLive = Boolean(liveUrl)

  return (
    <li className="grid gap-y-3 border-t border-border py-9 first:border-t-0 first:pt-0 sm:grid-cols-[13rem_1fr] sm:gap-x-10">
      <div>
        <h3 className="type-title">{title}</h3>
        {/* Teal marks shipped. It is the only thing on the row that lights up. */}
        <p className="type-label mt-1.5 inline-flex items-start gap-1.5 text-muted-foreground">
          {isLive && (
            <span
              className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-teal"
              aria-hidden="true"
            />
          )}
          {proof}
        </p>
      </div>

      <div>
        <p className="type-body max-w-prose text-muted-foreground">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <li
              key={tech}
              className="type-label rounded-sm bg-secondary px-2 py-1 text-muted-foreground"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          {isLive && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the ${title} site`}
              className="type-meta inline-flex items-center gap-1 text-link underline-offset-4 hover:underline"
            >
              Visit site <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {packageUrl && (
            <a
              href={packageUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} package on npm`}
              className="type-meta inline-flex items-center gap-1 text-link underline-offset-4 hover:underline"
            >
              npm package <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} source code on GitHub`}
            className="type-meta inline-flex items-center gap-1 text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Source <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </li>
  )
}
