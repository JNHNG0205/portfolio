import Image from "next/image"

interface Skill {
  name: string
  logo: string
}

interface SkillSectionProps {
  skills: Skill[]
}

export function SkillSection({ skills }: SkillSectionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Skills</h2>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="flex items-center space-x-2 bg-secondary rounded-md px-3 py-2"
          >
            <Image 
              src={skill.logo} 
              alt={`${skill.name} logo`} 
              width={24} 
              height={24} 
              className="rounded-sm"
            />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
