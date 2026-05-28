"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { Code2, Container, Wrench, Globe, Database } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  const skills = [
    { key: 'languages', icon: Code2, title: t.about.skills.languages.title, description: t.about.skills.languages.description },
    { key: 'frameworks', icon: Container, title: t.about.skills.frameworks.title, description: t.about.skills.frameworks.description },
    { key: 'databases', icon: Database, title: t.about.skills.databases.title, description: t.about.skills.databases.description },
    { key: 'devops', icon: Globe, title: t.about.skills.devops.title, description: t.about.skills.devops.description },
    { key: 'tools', icon: Wrench, title: t.about.skills.tools.title, description: t.about.skills.tools.description },
  ]

  return (
    <section id="about" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 lg:sticky lg:top-32">
            <FadeIn>
              <span className="text-sm text-primary font-mono">{t.about.section}</span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-balance">
                {t.about.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </FadeIn>
          </div>

          <StaggerContainer className="grid sm:grid-cols-2 gap-4" staggerDelay={0.1}>
            {skills.map((skill) => (
              <StaggerItem key={skill.key}>
                <motion.div
                  className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors duration-500"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4"
                    whileHover={{ rotate: 10 }}
                  >
                    <skill.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <h3 className="font-medium text-foreground mb-2">{skill.title}</h3>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
