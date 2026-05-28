"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import { LanguageSelector } from "./language-selector"

const socialLinks = [
  { icon: Github, href: "https://github.com/MunozIvan/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivanmg-f-s-developer/", label: "LinkedIn" },
]

export function Header() {
  const { t } = useI18n()

  const navItems = [
    { name: t.nav.home, href: "hero" },
    { name: t.nav.about, href: "about" },
    { name: t.nav.experience, href: "experience" },
    { name: t.nav.contact, href: "contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)

    if (!section) return

    const headerOffset = 100

    const elementPosition = section.getBoundingClientRect().top
    const offsetPosition =
      window.pageYOffset + elementPosition - headerOffset

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    })
  }

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 backdrop-blur-xl bg-background/60 border-b border-border/40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <nav className="flex items-center justify-between max-w-6xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href="/"
            className="text-xl font-medium tracking-tight text-foreground"
          >
            Ivan<span className="text-primary">.</span>
          </Link>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 relative group"
              >
                {item.name}

                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="flex items-center gap-5">
          <LanguageSelector />

          <div className="hidden sm:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + 0.1 * index, duration: 0.4 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}