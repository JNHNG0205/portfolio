import Link from "next/link";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b py-3 mb-8">
      <div className="container mx-auto max-w-screen-md px-4 flex justify-center items-center">
        <ul className="flex space-x-6">
          <li>
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
          </li>
          <li>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
