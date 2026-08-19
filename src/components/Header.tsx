import Image from "next/image"

interface HeaderProps {
  name: string
  country: string
  age: number
}

export function Header({ name, country, age }: HeaderProps) {
  return (
    <header className="w-full">
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-10">
        <div className="flex-1">
          <h1 className="type-display whitespace-nowrap">{name}</h1>
          <p className="type-title mt-3 font-medium text-muted-foreground">
            Full-stack engineer
          </p>
          <p className="type-body mt-5 max-w-prose text-muted-foreground">
            I build across the whole stack — web, backend, web3 and AI — and
            care about shipping things that actually work, not demos.
          </p>
          <p className="type-label mt-4 text-muted-foreground">
            {country} <span className="mx-1 text-teal">/</span> {age} years old
          </p>
        </div>

        <div className="relative shrink-0">
          <Image
            src="/profilepic.webp"
            alt="Teh Jun Heng speaking on a panel at MYBW26"
            width={140}
            height={140}
            priority
            className="rounded-lg border border-border object-cover"
          />
        </div>
      </div>
    </header>
  )
}
