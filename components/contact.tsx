"use client"

import { motion } from "framer-motion"
import { FadeIn } from "./animations"
import { Mail, ArrowUpRight, Copy, Check, UserStar } from "lucide-react"
import { useState } from "react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const email = "ivmunoz9@gmail.com"
  const { t } = useI18n()

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <FadeIn>
            <span className="text-sm text-primary font-mono">{t.contact.section}</span>
          </FadeIn>
          
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-balance">
              {t.contact.title}
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {t.contact.description}
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/ivanmg-f-s-developer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                {t.hero.getInTouch}
                <UserStar className="w-4 h-4" />
              </motion.a>
              
              <motion.button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-4 border border-border rounded-xl font-medium text-foreground hover:bg-card transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-green-500" />
                    {t.contact.copied}
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    {t.contact.copyEmail}
                  </>
                )}
              </motion.button>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="pt-8">
              <p className="text-sm text-muted-foreground font-mono">
                {email}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
