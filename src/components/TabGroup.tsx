import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

interface Experience {
  title: string
  organization: string
  period: string
  description: string | string[]
  companyLogo?: string
  universityLogo?: string
}

interface TabGroupProps {
  workExperiences: Experience[]
  educationExperiences: Experience[]
}

export function TabGroup({ workExperiences, educationExperiences }: TabGroupProps) {
  return (
    <Tabs defaultValue="work" className="w-full">
      <TabsList className="mb-2 grid w-full max-w-xs grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>

      <TabsContent value="work" className="mt-0">
        <ol>
          {workExperiences.map((exp, index) => (
            <ExperienceRow key={index} {...exp} />
          ))}
        </ol>
      </TabsContent>

      <TabsContent value="education" className="mt-0">
        <ol>
          {educationExperiences.map((exp, index) => (
            <ExperienceRow key={index} {...exp} />
          ))}
        </ol>
      </TabsContent>
    </Tabs>
  )
}

function ExperienceRow({
  title,
  organization,
  period,
  description,
  companyLogo,
  universityLogo,
}: Experience) {
  const logo = companyLogo ?? universityLogo
  const items = Array.isArray(description) ? description : [description]

  return (
    <li className="flex gap-4 border-t border-border py-6 first:border-t-0 sm:gap-5">
      {logo && (
        <Image
          src={logo}
          alt={`${organization} logo`}
          width={44}
          height={44}
          className="mt-1 h-11 w-11 shrink-0 rounded-md border border-border bg-background object-contain"
        />
      )}

      <div className="min-w-0 flex-1">
        <h3 className="type-title">{title}</h3>
        <p className="type-meta mt-1.5 text-muted-foreground">
          {organization}
          <span className="mx-1.5 text-teal">·</span>
          <span className="type-label">{period}</span>
        </p>

        <ul className="mt-3 space-y-2">
          {items.map((item, index) => (
            <li
              key={index}
              className="type-body relative max-w-prose pl-4 text-muted-foreground before:absolute before:left-0 before:top-[0.62em] before:h-1 before:w-1 before:rounded-full before:bg-teal"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}
