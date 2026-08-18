import Image from "next/image"
import { SectionHeading } from "./SectionHeading"

interface Skill {
  name: string
  logo?: string
}

interface SkillGroup {
  label: string
  skills: Skill[]
}

interface SkillSectionProps {
  groups: SkillGroup[]
}

export function SkillSection({ groups }: SkillSectionProps) {
  return (
    <div>
      <SectionHeading>Skills</SectionHeading>
      <div className="space-y-7">
        {groups.map((group) => (
          <div key={group.label}>
            <h3 className="type-title mb-3">{group.label}</h3>
            <ul className="flex flex-wrap gap-2.5">
              {group.skills.map((skill) => (
                <li
                  key={skill.name}
                  className="flex items-center gap-2 rounded-md border border-border bg-secondary/60 py-2 pl-2 pr-3 transition-colors hover:border-teal"
                >
                  {skill.logo ? (
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-white p-1">
                      <Image
                        src={skill.logo}
                        alt=""
                        width={16}
                        height={16}
                        className="h-full w-full object-contain"
                        unoptimized
                      />
                    </span>
                  ) : (
                    <span
                      className="ml-1 h-1.5 w-1.5 rounded-full bg-teal"
                      aria-hidden="true"
                    />
                  )}
                  <span className="type-meta">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
