import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">About Me</h1>

        <div className="space-y-6">
          <p className="text-gray-300">
            I'm Edward Gaibor, a Computer Science student at the University of Massachusetts Boston (2022-2026) and a
            part-time Software Engineer at John Hancock - Manulife's GenAI team.
          </p>

          <h2 className="text-xl font-bold mt-8">Education</h2>
          <p className="text-gray-300">
            BS in Computer Science at University of Massachusetts Boston (September 2022 - May 2026)
          </p>
          <ul className="list-disc pl-5 text-gray-300 space-y-1">
            <li>
              Dean scholar, The Paul English CS Scholar, Research Fellow funding, The Marie and Thomas Donohue Scholar,
              and Oracle CSM Research Fellow.
            </li>
            <li>
              Vice-President @ CS Club: Organized first-ever Hackathon, Google DevFest (120 attendees) and guest speaker
              presentations.
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-8">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium">Languages</h3>
              <p className="text-gray-400">Native Spanish and Fluent English</p>
            </div>
            <div>
              <h3 className="font-medium">Programming Languages</h3>
              <p className="text-gray-400">Python, Java, C, HTML, CSS, Javascript, Assembly Language, R</p>
            </div>
            <div>
              <h3 className="font-medium">Relevant Coursework</h3>
              <p className="text-gray-400">
                Advanced Data Structures and Algorithms, Data Science, Computer Architecture, Calculus II
              </p>
            </div>
            <div>
              <h3 className="font-medium">Technologies</h3>
              <p className="text-gray-400">
                Sci-kit-learn, Flask, GitHub, Jupyter Notebook, Tkinter, VirtualBox, Open CV, DiscordDev, Tensorflow,
                Docker, Singularity, Slurm, Three.js, Next.js, Drizzle, ShadCN, VegaLite.js
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-8">Publications</h2>
          <div className="space-y-4">
            <div>
              <p className="text-gray-300">
                Kim, S., Gaibor, E., & Haehn, D. (2024). Web-based Melanoma Detection. ArXiv.org.
              </p>
              <a
                href="https://arxiv.org/abs/2403.14898"
                className="text-gray-400 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://arxiv.org/abs/2403.14898
              </a>
            </div>
            <div>
              <p className="text-gray-300">
                Gaibor, E., Varade, S., Deshmukh, R., Meyer, T., Geshvadi, M., Kim, S., Narayanappa, Vidhya Sree, &
                Haehn, D. (2024). Boostlet.js: Image processing plugins for the web via JavaScript injection. ArXiv.org.
              </p>
              <a
                href="https://arxiv.org/abs/2405.07868"
                className="text-gray-400 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://arxiv.org/abs/2405.07868
              </a>
            </div>
          </div>

          <h2 className="text-xl font-bold mt-8">Contact</h2>
          <div className="space-y-2">
            <p className="text-gray-300">
              <span className="font-medium">Email:</span>{" "}
              <a href="mailto:edward@edwardgaibor.me" className="text-gray-400 hover:text-white">
                edward@edwardgaibor.me
              </a>
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Phone:</span>{" "}
              <a href="tel:+18573952414" className="text-gray-400 hover:text-white">
                +1 (857) 395-2414
              </a>
            </p>
            <p className="text-gray-300">
              <span className="font-medium">Location:</span> Cambridge, Massachusetts, US
            </p>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://github.com/gaiborjosue"
                className="text-gray-400 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/edwardgaibor"
                className="text-gray-400 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="https://edwardgaibor.me"
                className="text-gray-400 hover:text-white underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
