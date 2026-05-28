"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type Language = "en" | "es";

type Translations = {
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    viewProjects: string;
    getInTouch: string;
    scroll: string;
    codeSnippet: string;
  };
  about: {
    section: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    skills: {
      languages: { title: string; description: string };
      databases: { title: string; description: string };
      tools: { title: string; description: string };
      frameworks: { title: string; description: string };
      devops: { title: string; description: string };
    };
  };
  projects: {
    section: string;
    title: string;
    description: string;
    featured: string;
    items: {
      craftUI: { title: string; description: string };
      motionKit: { title: string; description: string };
      zenWriter: { title: string; description: string };
      colorPalette: { title: string; description: string };
    };
  };
  experience: {
    section: string;
    title: string;
    viewResume: string;
    items: {
      senior: {
        role: string;
        company: string;
        period: string;
        description: string;
        skills: Array<String>;
      };
      freelance: {
        role: string;
        company: string;
        period: string;
        description: string;
        skills: Array<String>;
      };
    };
  };
  contact: {
    section: string;
    title: string;
    description: string;
    sendEmail: string;
    copyEmail: string;
    copied: string;
  };
  footer: {
    builtWith: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      badge: "Available for work",
      title: "Building efficient software.",
      description:
        "I'm a Backend Engineer passionate about creating real-world solutions by manipulating bits 🧑‍💻.",
      viewProjects: "View Projects",
      getInTouch: "Get in touch",
      scroll: "Scroll",
      codeSnippet: "'Open to work 😊'",
    },
    about: {
      section: "01. About Me",
      title: "Over 4 years learning about programming.",
      p1: "I've been studying programming since 2022 and working as a Backend Engineer for the past 2 years.",
      p2: "I love building and managing APIs and automating processes through reusable scripts.",
      p3: "I enjoy constantly learning and improving, which is why I am currently pursuing a Bachelor's Degree in Cybersecurity at the University of Palermo to expand my knowledge and strengthen my technical skills.",
      skills: {
        languages: {
          title: "Languages",
          description: "JavaScript, TypeScript, HTML",
        },
        databases: {
          title: "Databases",
          description: "MySQL, PostgreSQL, Redis",
        },
        tools: {
          title: "Tools",
          description:
            "Git, Postman, Figma, VS Code, WebSocket, NPM, Axios, AI Agents",
        },
        frameworks: {
          title: "Frameworks",
          description: "Node.js, Express, React",
        },
        devops: {
          title: "DevOps & Cloud",
          description: "Vercel, WN Power, GitHub, PM2",
        },
      },
    },
    projects: {
      section: "02. Projects",
      title: "Selected Work",
      description:
        "A collection of projects I’ve built, ranging from open-source tools to client work.",
      featured: "Featured",
      items: {
        craftUI: {
          title: "Craft UI",
          description:
            "A component library for building beautiful and accessible React applications with a focus on developer experience.",
        },
        motionKit: {
          title: "Motion Kit",
          description:
            "Animation primitives and hooks for creating smooth and performant animations in React applications.",
        },
        zenWriter: {
          title: "Zen Writer",
          description:
            "A distraction-free writing app with markdown support and beautiful typography.",
        },
        colorPalette: {
          title: "Color Palette",
          description:
            "Generate and export beautiful color palettes for your design system with WCAG compliance checking.",
        },
      },
    },
    experience: {
      section: "03. Experience",
      title: "Where I've Worked",
      viewResume: "View Full Resume",
      items: {
        senior: {
          role: "Backend Engineer",
          company: "Farmafe",
          period: "2023 - Present",
          description:
            "• Developed multiple APIs to automate prescription validation through WhatsApp.\n• Built a financial management platform for pharmacy chains, increasing subscribed clients by 30%.\n• Managed and optimized two SQL databases to improve system performance and stability.\n• Developed custom scripts that streamlined internal processes and improved operational efficiency.\n• Coordinated and led the frontend team by clearly communicating the planned backend architecture and upcoming features to facilitate development and integration tasks.",
          skills: ["Node.js", "TypeScript", "Express", "MySQL"],
        },
        freelance: {
          role: "DevTools Developer",
          company: "Freelance",
          period: "2024 - Present",
          description:
            "• Designed programs to automate data extraction and processing from multiple websites.\n• Generated XLS reports to enable more efficient data analysis.\n• Developed Telegram bots that automatically notified specific changes in real time.\n• Optimized repetitive tasks and improved workflow efficiency through custom automation solutions.",
          skills: ["Node.js", "TypeScript", "Express", "MySQL"],
        },
      },
    },
    contact: {
      section: "04. Contact",
      title: "Let's Work Together",
      description:
        "I’m currently open to new opportunities and interesting projects. Whether you have a question or just want to say hi, I’ll do my best to respond.",
      sendEmail: "Send Email",
      copyEmail: "Copy Email",
      copied: "Copied!",
    },
    footer: { builtWith: "Iván Muñoz - Backend Engineer ♥️" },
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      experience: "Experiencia",
      contact: "Contacto",
    },
    hero: {
      badge: "Disponible para trabajar",
      title: "Creando software eficiente.",
      description:
        "Soy un Backend Engineer fanático de crear soluciones del mundo real a través de modificar bits 🧑‍💻.",
      viewProjects: "Ver Proyectos",
      getInTouch: "Contactar",
      scroll: "Scroll",
      codeSnippet: "'Open to work 😊'",
    },
    about: {
      section: "01. Sobre mí",
      title: "Más de 4 años aprendiendo sobre programación.",
      p1: "Desde 2022 que estudio programación y hace 2 años que trabajo como Backend Engineer.",
      p2: "Me encanta crear y gestionar APIS y automatizar procesos mediante scripts reutilizables.",
      p3: "Disfruto aprender y seguir progresando constantemente, por lo que actualmente estoy cursando una Licenciatura en Ciberseguridad en la Universidad de Palermo para ampliar mis conocimientos y fortalecer mis habilidades técnicas.",
      skills: {
        languages: {
          title: "languages",
          description: "JavaScript, TypeScript, HTML",
        },
        databases: {
          title: "Databases",
          description: "MySQL, PostgreSQL, Redis",
        },
        tools: {
          title: "Tools",
          description:
            "Git, Postman, Figma, VS Code, WebSocket, NPM, Axios, AI Agents",
        },
        frameworks: {
          title: "Frameworks",
          description: "Node.JS, Express, React",
        },
        devops: {
          title: "Devops & Cloud",
          description: "Vercel, WN Power, Github, PM2",
        },
      },
    },
    projects: {
      section: "02. Proyectos",
      title: "Trabajo seleccionado",
      description:
        "Una colección de proyectos que he construido, desde herramientas open-source hasta trabajo para clientes.",
      featured: "Destacado",
      items: {
        craftUI: {
          title: "Craft UI",
          description:
            "Una biblioteca de componentes para construir aplicaciones React hermosas y accesibles con enfoque en la experiencia del desarrollador.",
        },
        motionKit: {
          title: "Motion Kit",
          description:
            "Primitivas de animación y hooks para crear animaciones fluidas y performantes en aplicaciones React.",
        },
        zenWriter: {
          title: "Zen Writer",
          description:
            "Una aplicación de escritura sin distracciones con soporte markdown y tipografía hermosa.",
        },
        colorPalette: {
          title: "Color Palette",
          description:
            "Genera y exporta hermosas paletas de colores para tu sistema de diseño con verificación de cumplimiento WCAG.",
        },
      },
    },
    experience: {
      section: "02. Experiencia",
      title: "Donde he trabajado",
      viewResume: "Ver currículum completo",
      items: {
        senior: {
          role: "Backend Engineer",
          company: "Farmafe",
          period: "2023 - Presente",
          description:
            "• Desarrollé múltiples APIs para automatizar la validación de recetas vía WhatsApp.\n• Creé una plataforma de gestión financiera para cadenas farmacéuticas, logrando aumentar los clientes suscritos en un 30%.\n• Administré y optimicé dos bases de datos SQL para mejorar el rendimiento y la estabilidad del sistema.\n• Desarrollé scripts personalizados que agilizaron procesos internos y aumentaron la eficiencia operativa.\n• Coordiné y lideré al equipo de frontend, comunicando claramente la arquitectura backend planificada y las próximas funcionalidades para facilitar el desarrollo e integración de nuevas tareas.",
          skills: ["Node.Js", "TypeScript", "Express", "MySQL"],
        },
        freelance: {
          role: "DevTools Developer",
          company: "Freelance",
          period: "2024 - Presente",
          description:
            "• Diseñé programas para automatizar la extracción y el procesamiento de datos desde diversos sitios web.\n• Generé reportes en formato XLS para facilitar un análisis más eficiente de la información.\n• Desarrollé bots de Telegram que notificaban automáticamente cambios específicos en tiempo real.\n• Optimicé tareas repetitivas y mejoré el flujo de trabajo mediante soluciones de automatización personalizadas.",
          skills: ["Node.Js", "TypeScript", "Express", "MySQL"],
        },
      },
    },
    contact: {
      section: "03. Contacto",
      title: "Trabajemos juntos",
      description:
        "Actualmente estoy abierto a nuevas oportunidades y proyectos interesantes. Ya sea que tengas una consulta o solo quieras saludar, haré mi mejor esfuerzo para responder.",
      sendEmail: "Enviar Email",
      copyEmail: "Copiar Email",
      copied: "¡Copiado!",
    },
    footer: {
      builtWith: "Iván Muñoz - Backend Engineer ♥️",
    },
  },
};

type I18nContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "en" || saved === "es")) {
      setLanguage(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("es")) {
        setLanguage("es");
      }
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  return (
    <I18nContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
