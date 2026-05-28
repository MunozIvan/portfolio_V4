"use client"

import { motion } from "framer-motion"
import { AnimatedText, FadeIn, FloatingElement } from "./animations"
import { UserStar, Sparkles, ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"
import Image from "next/image"

const profileImages = [
  "/profile.jpg",
  "/profile_2.jpg",
  "/profile_3.jpg",
  "/profile_4.jpg",
]

export function Hero() {
  const { t } = useI18n()

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <div className="relative">
                <img
                  src="/lil_pixel.gif"
                  alt="Pixel Character"
                  className="w-32 h-32 object-contain pixelated"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/50 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">
                  {t.hero.badge}
                </span>
              </div>
            </FadeIn>

            <div className="space-y-4">
              <AnimatedText
                text={t.hero.title}
                className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight"
                delay={0.3}
              />

              <FadeIn delay={0.6}>
                <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                  {t.hero.description}
                </p>
              </FadeIn>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <FadeIn delay={0.8}>
                <div className="flex flex-wrap items-center gap-4">
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
                </div>
              </FadeIn>
              <FadeIn delay={0.4}>
                <motion.a
                  href={t.hero.resumeURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline underline-offset-4 font-medium"
                  whileHover={{ x: 4 }}
                >
                  {t.experience.viewResume}
                  <ArrowUpRight className="w-4 h-4" />
                </motion.a>
              </FadeIn>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <FadeIn delay={0.4} direction="left">
            <div className="relative">
              <FloatingElement>
                <div className="relative w-full aspect-square max-w-md mx-auto">

                  {/* Background gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-transparent"
                    animate={{
                      rotate: [0, 3, 0, -3, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main card */}
                  <div className="absolute inset-4 rounded-2xl bg-card border border-border overflow-hidden flex flex-col gap-1">

                    {/* Radial glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,oklch(0.75_0.15_180/0.1),transparent_50%)]" />

                    {/* Images grid */}
                    <div className="flex-1 flex items-center justify-center p-6 pb-0 relative z-10">
                      <div className="grid grid-cols-2 gap-4">

                        {profileImages.map((src, index) => (
                          <motion.div
                            key={src}
                            className="relative"
                            style={{
                              willChange: "transform",
                              backfaceVisibility: "hidden",
                            }}
                            animate={{
                              opacity: [0.85, 1, 0.85],
                              y: [0, -8, 0],
                              rotate: [-1, 1, -1],
                            }}
                            transition={{
                              duration: 4 + index,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: index * 0.3,
                            }}
                            whileHover={{
                              scale: 1.05,
                            }}
                          >
                            {/* Glow */}
                            <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-40" />

                            {/* Image container */}
                            <div className="relative w-[150px] h-[150px] overflow-hidden rounded-3xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                              <Image
                                src={src}
                                alt={`Profile ${index + 1}`}
                                fill
                                priority={index === 0}
                                sizes="150px"
                                className="object-cover"
                              />
                            </div>
                          </motion.div>
                        ))}

                      </div>
                    </div>

                    {/* Code snippet */}
                    <div className="relative z-10 mx-6 mb-6 p-4 rounded-lg bg-secondary/50 backdrop-blur-sm font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-red-500/70" />
                        <div className="w-2 h-2 rounded-full bg-yellow-500/70" />
                        <div className="w-2 h-2 rounded-full bg-green-500/70" />
                      </div>

                      <code>
                        <span className="text-primary">const</span> status ={" "}
                        <span className="text-primary">
                          {t.hero.codeSnippet}
                        </span>
                        ;
                      </code>
                    </div>

                  </div>
                </div>
              </FloatingElement>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}