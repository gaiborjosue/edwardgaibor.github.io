"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Star, Crown } from "lucide-react"

// Project type definition
type Project = {
  title: string
  description: string
  tech: string
  github?: string
  live?: string
  paper?: string
  report?: string
  certificate?: string
  favorite?: boolean
  demo?: string
  frontend?: string
  award?: boolean
}

// Projects organized by category
const projects: Record<string, Project[]> = {
  "Web & Full-Stack": [
    {
      title: "Elara AI",
      description:
        "Next.js frontend for an AI chat recommending herbal remedies and recipes. Includes user registration with email verification. 3rd place in Google Cloud × MongoDB hackathon (7k participants).",
      tech: "Next.js, TypeScript, MongoDB, Google Cloud Run",
      github: "https://github.com/gaiborjosue/elaraFrontend",
      live: "https://elarafrontend-114195159699.us-east1.run.app/",
      award: true,
    },
    {
      title: "QR Pigeon",
      description:
        "No-signup image-sharing tool: scan a QR code on your phone, upload, then refresh the desktop page to grab the image.",
      tech: "Flask, Python, HTML/CSS/JS (HEIC→PNG conversion, QR generation)",
      github: "https://github.com/leiDnedyA/qr-image-drop",
      live: "https://www.qrpigeon.pics",
      favorite: true,
    },
    {
      title: "Hack UMB",
      description: "Full-stack hackathon-management site for the UMass Boston CS Club.",
      tech: "TypeScript (front + back), Hono, Drizzle ORM, Three.js, Bun, Kinde auth, Tailwind + shadcn-ui",
      github: "https://github.com/gaiborjosue/HackUMB-Website",
      live: "https://hackumb.tech",
    },
    {
      title: "Personal Portfolio for Yadira",
      description: "Client portfolio showcasing research, projects & publications.",
      tech: "Next.js, Tailwind CSS, TypeScript",
      github: "https://github.com/gaiborjosue/portfolio-yadira",
      live: "https://yadirag.vercel.app",
    },
    {
      title: "PDF GPT",
      description:
        "Streamlit app that indexes one or more PDFs, then answers questions (plus five auto-generated starters) via GPT & LangChain.",
      tech: "Streamlit, LangChain, OpenAI API, vector store",
      github: "https://github.com/gaiborjosue/PDF-GPT",
      demo: "https://apdfgpt.streamlit.app",
    },
    {
      title: "Responsive Podcast Site",
      description: "Single-page podcast landing with custom scroll & typing animations.",
      tech: "HTML, CSS, JavaScript (ScrollReveal)",
      github: "https://github.com/gaiborjosue/ytuquepiensas.github.io",
      live: "https://gaiborjosue.github.io/ytuquepiensas.github.io/index.html#home",
    },
  ],
  "Data Science & ML": [
    {
      title: "Melanoma Predictor",
      description: "Browser-based CNN for skin-cancer detection (upload or camera).",
      tech: "TensorFlow.js, JS/HTML/CSS",
      github: "https://github.com/mpsych/melanoma",
      live: "https://mpsych.github.io/melanoma/",
      favorite: true,
    },
    {
      title: "DNS Traffic Control",
      description: "Classifies DNS queries as benign / malicious using stateless + stateful features.",
      tech: "Python, Linux",
      github: "https://github.com/gaiborjosue/DNS-Traffic-Control",
    },
    {
      title: "9 scikit-learn Mini-Projects",
      description: "Handwriting, Titanic, baseball pitch classification, sentiment analysis, income prediction, etc.",
      tech: "Python, scikit-learn",
      github: "https://github.com/gaiborjosue/Machine_Learning_Models",
      certificate: "https://www.codecademy.com/profiles/Edward_Gaibor/certificates/5cab64c55f1de8039db366ef",
    },
    {
      title: "6 TensorFlow Projects",
      description:
        "Air-quality prediction, pneumonia X-ray classifier, galaxy morphologies, life expectancy & medical-cost regression, survival analysis.",
      tech: "Python, TensorFlow",
      github: "https://github.com/gaiborjosue/DeepLearning-Projects",
      certificate: "https://www.codecademy.com/profiles/Edward_Gaibor/certificates/5f85c4b9c431a80013a60e0",
    },
    {
      title: "Exoplanet Predictor",
      description:
        "Decision-tree model (≈ 98 % accuracy) + interactive 3D frontend to predict planet count in a star system.",
      tech: "Python, scikit-learn, React-Three-Fiber",
      github: "https://github.com/gaiborjosue/Exoplanet_Prediction_ML",
      frontend: "https://github.com/leiDnedyA/interactive-exoplanet-predictor",
    },
    {
      title: "Drug Medication Recommender",
      description: "Lists 10 common drugs for a user-given medical condition (informational).",
      tech: "Python notebooks",
      github: "https://github.com/gaiborjosue/drug_medication",
    },
    {
      title: "Quito Air-Pollution Analysis",
      description: "Compares hourly PM2.5, O3, SO2, CO before vs. during COVID-19 lockdown.",
      tech: "Python, Pandas, Matplotlib, Seaborn",
      github: "https://github.com/gaiborjosue/Contaminacion_Quito_Python",
    },
  ],
  "IoT & Hardware": [
    {
      title: "Hydroponic IoT Greenhouse",
      description: "Arduino-driven hydroponics that cut water use > 90 %; 2nd place @ Ecuador Junior Water Prize.",
      tech: "Arduino C++, MATLAB / ThingSpeak cloud triggers",
      github: "https://github.com/gaiborjosue/Hidroponic_IOT_Greenhouse",
      paper: "https://1drv.ms/b/s!ArFmrAajjkk_h89NMAPhRxwEbxVBTg?e=xBKrHg",
    },
    {
      title: "Temp ↔ Humidity Model",
      description: "Fits a predictive model for humidity from temperature inside the greenhouse (real data).",
      tech: "Python, Arduino",
      github: "https://github.com/gaiborjosue/Modelizacion_Temperatura_Humedad",
      report:
        "https://github.com/gaiborjosue/Modelizacion_Temperatura_Humedad/blob/master/EI_EM_MAY22_G5_MAT_hrr533.pdf",
    },
    {
      title: "Local Weather Predictor",
      description: "ML model served locally (Tkinter GUI) to forecast temp / humidity from a personal weather station.",
      tech: "Python, scikit-learn, Arduino sensors",
      github: "https://github.com/gaiborjosue/Temp-Hum-Predictor",
    },
    {
      title: "Peltier Cell Temp-vs-Current Model",
      description: "Experiments + regression show a negative-quadratic relation between current and temperature.",
      tech: "Python plotting & analysis",
      report: "https://1drv.ms/b/s!ArFmrAajjkk_h89QH9dc6-sNKLa1TW?e=q4DgMu",
    },
  ],
  Misc: [
    {
      title: "Feedback Discord Bot",
      description: "Automates grade/feedback delivery to students in Discord servers.",
      tech: "Python, Discord API",
      github: "https://github.com/gaiborjosue/FeedbackDiscordBot",
    },
    {
      title: "Andromeda AI",
      description: 'Early CLI "assistant" with face-recognition-based personalization.',
      tech: "Python, OpenCV",
      github: "https://github.com/gaiborjosue/Andromeda-AI",
    },
    {
      title: "Boostlet.js",
      description:
        "Image processing plugins for the web via JavaScript injection. Enhanced integration with frameworks like Xtk.js, Papaya.js, and Niivue.js.",
      tech: "JavaScript, Web APIs",
      github: "https://github.com/FNNDSC/boostlet",
      favorite: true,
    },
  ],
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Get all categories
  const categories = Object.keys(projects)

  // Get favorite projects across all categories
  const favoriteProjects = Object.values(projects)
    .flat()
    .filter((project) => project.favorite)

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Projects</h1>

        {/* Favorite Projects Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="h-5 w-5 mr-2 text-yellow-400" /> Favorite Projects
          </h2>
          <div className="space-y-8">
            {favoriteProjects.map((project, index) => (
              <div
                key={`favorite-${index}`}
                className="group border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-medium flex items-center">
                      {project.title}
                      <Star className="h-4 w-4 ml-2 text-yellow-400" />
                      {project.award && <Crown className="h-4 w-4 ml-2 text-yellow-400" aria-label="Awarded project" />}
                    </h3>
                    <p className="text-gray-400 mt-1">{project.description}</p>
                    <p className="text-gray-500 text-sm mt-2">
                      <span className="font-medium">Tech:</span> {project.tech}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <Github className="h-4 w-4" /> GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Live Demo
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" /> Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-gray-800 text-white"
                  : "bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects by Category */}
        <div className="space-y-12">
          {(activeCategory ? [activeCategory] : categories).map((category) => (
            <section key={category} className="space-y-6">
              <h2 className="text-xl font-bold border-b border-gray-800 pb-2">{category}</h2>
              <div className="space-y-6">
                {projects[category].map((project, index) => (
                  <div
                    key={`${category}-${index}`}
                    className="group border border-gray-800 rounded-lg p-5 hover:border-gray-700 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-medium flex items-center">
                          {project.title}
                          {project.favorite && <Star className="h-4 w-4 ml-2 text-yellow-400" />}
                          {project.award && <Crown className="h-4 w-4 ml-2 text-yellow-400" aria-label="Awarded project" />}
                        </h3>
                        <p className="text-gray-400 mt-1">{project.description}</p>
                        <p className="text-gray-500 text-sm mt-2">
                          <span className="font-medium">Tech:</span> {project.tech}
                        </p>
                        <div className="flex flex-wrap gap-3 mt-3">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <Github className="h-4 w-4" /> GitHub
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Live Demo
                            </a>
                          )}
                          {project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Demo
                            </a>
                          )}
                          {project.paper && (
                            <a
                              href={project.paper}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Paper
                            </a>
                          )}
                          {project.report && (
                            <a
                              href={project.report}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Report
                            </a>
                          )}
                          {project.certificate && (
                            <a
                              href={project.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Certificate
                            </a>
                          )}
                          {project.frontend && (
                            <a
                              href={project.frontend}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-sm text-gray-400 hover:text-white transition-colors"
                            >
                              <ExternalLink className="h-4 w-4" /> Frontend
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}
