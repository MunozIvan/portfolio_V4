"use client"

import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { ScrollProgress } from "@/components/scroll-progress"
import { I18nProvider } from "@/lib/i18n"

export default function Home() {
  return (
    <I18nProvider>
      <main className="relative">
        <ScrollProgress />
        <Header />
        <Hero />
        <About />
        {/* <Projects /> */}
        <Experience />
        <Contact />
        <Footer />
      </main>
    </I18nProvider>
  )
}
