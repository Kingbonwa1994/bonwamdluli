import { AboutMe } from "@/components/about-me"
import { TechStack } from "@/components/tech-stack"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { ClientWrapper } from "@/components/client-wrapper"

export default function Home() {
  return (
    <ClientWrapper>
      <main className="h-screen w-full overflow-y-auto snap-y snap-mandatory">
        <AboutMe />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </ClientWrapper>
  )
}

