interface SectionHeadingProps {
  children: React.ReactNode
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2 className="type-headline inline-block">{children}</h2>
      <div className="mt-3 h-0.5 w-10 rounded-full bg-teal" aria-hidden="true" />
    </div>
  )
}
