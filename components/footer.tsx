"use client"

import { motion } from "framer-motion"
import { Github, Linkedin } from "lucide-react"
import { useI18n } from "@/lib/i18n"

const socialLinks = [
  { icon: Github, href: "https://github.com/MunozIvan/", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/ivanmg-f-s-developer/", label: "LinkedIn" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useI18n()

  return (
    <footer className="py-12 px-6 md:px-12 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-medium tracking-tight">
              Ivan<span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              © {currentYear} Iván Muñoz
            </span>
          </motion.div>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-8 pt-8 border-t border-border text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-xs text-muted-foreground">
            {t.footer.builtWith}
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
