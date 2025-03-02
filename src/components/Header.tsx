import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from 'next/image'

interface HeaderProps {
  name: string
  country: string
  age: number
}

export function Header({ name, country, age }: HeaderProps) {
  return (
    <Card className="w-full">
      <CardHeader className="flex items-center">
        <Image 
          src="/profilepic.webp" 
          alt="Header Image" 
          width={128} 
          height={128}
          className="rounded-md order-2"
        />
      </CardHeader>
      <CardContent className="flex flex-col space-y-2 justify-center items-center">
        <p className="text-3xl">{name} </p>
        <p>Software Engineer</p>
        <p className="text-xl text-muted-foreground">
          {country} • {age} years old
        </p>
      </CardContent>
    </Card>
  )
}

