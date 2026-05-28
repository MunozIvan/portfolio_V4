"use client"

import { motion } from "framer-motion"
import { FadeIn, StaggerContainer, StaggerItem } from "./animations"
import { ArrowUpRight, Github } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Projects() {
  const { t } = useI18n()

  const projects = [
    {
      title: t.projects.items.craftUI.title,
      description: t.projects.items.craftUI.description,
      tags: ["React", "TypeScript", "Tailwind"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      title: t.projects.items.motionKit.title,
      description: t.projects.items.motionKit.description,
      tags: ["Framer Motion", "React", "Open Source"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      title: t.projects.items.zenWriter.title,
      description: t.projects.items.zenWriter.description,
      tags: ["Next.js", "MDX", "Prisma"],
      link: "#",
      github: "#",
      featured: false,
    },
    {
      title: t.projects.items.colorPalette.title,
      description: t.projects.items.colorPalette.description,
      tags: ["Color Theory", "Accessibility", "Tool"],
      link: "#",
      github: "#",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="space-y-4 mb-16">
          <FadeIn>
            <span className="text-sm text-primary font-mono">{t.projects.section}</span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
              {t.projects.title}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground max-w-xl">
              {t.projects.description}
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="space-y-6" staggerDelay={0.15}>
          {projects.map((project, index) => (
            <StaggerItem key={project.title}>
              <motion.article
                className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-500"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="space-y-4 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-muted-foreground font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {project.featured && (
                        <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                          {t.projects.featured}
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      aria-label={`View ${project.title} on GitHub`}
                      className="p-3 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.link}
                      aria-label={`Visit ${project.title}`}
                      className="p-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Hover gradient effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </motion.article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
