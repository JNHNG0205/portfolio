import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="work">Work</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="work">
        {workExperiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </TabsContent>
      <TabsContent value="education">
        {educationExperiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </TabsContent>
    </Tabs>
  )
}

function ExperienceCard({ title, organization, period, description, companyLogo, universityLogo }: Experience) {
  return (
    <Card className="mt-4">
      <CardHeader className="flex justify-between">
        <div className="flex items-center">
          {companyLogo && (
            <Image 
              src={companyLogo} 
              alt={`${organization} Logo`} 
              width={48} 
              height={48} 
              className="mr-2 rounded-md"
            />
          )}
          <CardTitle>{title}</CardTitle>
        </div>
        {universityLogo && (
          <Image 
            src={universityLogo} 
            alt={`${organization} University Logo`} 
            width={48} 
            height={48} 
            className="ml-2 rounded-md"
          />
        )}
      </CardHeader>
      <CardContent>
        <CardDescription>
          {organization} • {period}
        </CardDescription>
        {Array.isArray(description) ? (
          <ul className="list-disc pl-4 space-y-1">
            {description.map((item, index) => (
              <li key={index} className="text-sm">{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-sm">•&nbsp;{description}</p>
        )}
      </CardContent>
    </Card>
  )
}

