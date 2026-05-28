"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Experience() {
  const { t } = useI18n()

  const experiences = [
    {
      period: t.experience.items.senior.period,
      role: t.experience.items.senior.role,
      company: t.experience.items.senior.company,
      companyUrl: "#",
      description: t.experience.items.senior.description,
      skills: t.experience.items.senior.skills,
    },
    {
      period: t.experience.items.freelance.period,
      role: t.experience.items.freelance.role,
      company: t.experience.items.freelance.company,
      companyUrl: "#",
      description: t.experience.items.freelance.description,
      skills: t.experience.items.freelance.skills,
    },
  ]

  return (
    <section id="experience" className="py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <FadeIn>
            <span className="text-sm text-primary font-mono">{t.experience.section}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              {t.experience.title}
            </h2>
          </FadeIn>
        </div>

        <StaggerContainer className="space-y-0" staggerDelay={0.15}>
          {experiences.map((exp, index) => (
            <StaggerItem key={index}>
              <motion.article
                className="group relative grid md:grid-cols-[200px_1fr] gap-4 md:gap-8 py-8 border-t border-border first:border-t-0"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="text-sm text-muted-foreground font-mono">
                  {exp.period}
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      className="inline-flex items-center gap-1 text-primary hover:underline underline-offset-4"
                    >
                      {exp.company}
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="text-muted-foreground leading-relaxed max-w-2xl whitespace-pre-line">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill.toString()}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute left-0 top-8 w-0.5 h-0 bg-primary"
                  initial={{ height: 0 }}
                  whileHover={{ height: "50%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn delay={0.4} className="mt-12">
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium"
            whileHover={{ x: 4 }}
          >
            {t.experience.viewResume}
            <ArrowUpRight className="w-4 h-4" />
          </motion.a>
        </FadeIn>
      </div>
    </section>
  )
}
