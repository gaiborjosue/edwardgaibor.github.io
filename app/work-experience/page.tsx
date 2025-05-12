import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function WorkExperience() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-2xl mx-auto px-4 py-16">
        {/* Back Navigation */}
        <div className="mb-8">
          <Link href="/" className="text-gray-400 hover:text-white flex items-center gap-1 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to home
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8">Work Experience</h1>

        <div className="space-y-12">
          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">Part-Time Full-Stack Engineer at John Hancock - Manulife</h2>
            <p className="text-gray-400 mb-2">September 2024 - Present</p>
            <p className="text-gray-300">
              Automated 70+ jobs for task scheduling and execution running in R 4.4 for business analytics using
              Microsoft CAWA. Currently focusing more on frontend development work within the GenAI team.
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">Software Engineer Intern at John Hancock - Manulife</h2>
            <p className="text-gray-400 mb-2">May 2024 - August 2024</p>
            <p className="text-gray-300">
              Developed GenAI app for credit research assistance using a middleware built with Flask that provides
              reverse proxy, authentication, authorization, and security features, connecting a React frontend with a
              FastAPI backend, improving response time by 92%. This has resulted in production deployment and employees
              globally using it for market exploration.
            </p>
            <p className="text-gray-300 mt-2">
              Built a CI/CD pipeline in GitHub Actions with rollback functionality to automate the build and deployment
              processes of .NET & Python executable applications from the organization's repositories to the specified
              remote servers. Resulting in over 100 teams using this pipeline to improve their day-to-day workflow.
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">CS480 Data Visualization on the Web - Grader</h2>
            <p className="text-gray-400 mb-2">January 2024 - May 2024 · Hybrid</p>
            <p className="text-gray-300">
              Assisted students with data visualization concepts and techniques using web technologies. Graded
              assignments and provided feedback to improve student understanding.
            </p>
            <p className="text-gray-300 mt-2">
              <span className="font-medium">Skills:</span> GitHub, D3.js, JavaScript
            </p>
            <p className="text-gray-300 mt-1">
              <a
                href="https://cs617.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline"
              >
                cs617.org
              </a>
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">CS666 - Biomedical Signal and Image Processing Grader</h2>
            <p className="text-gray-400 mb-2">January 2024 - May 2024 · On-site</p>
            <p className="text-gray-300">
              Evaluated student assignments related to biomedical signal and image processing techniques. Provided
              guidance and support to students working on complex biomedical data analysis.
            </p>
            <p className="text-gray-300 mt-2">
              <span className="font-medium">Skills:</span> GitHub
            </p>
            <p className="text-gray-300 mt-1">
              <a
                href="https://cs666.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline"
              >
                cs666.org
              </a>
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">CS460 – Graphics Programming Grader</h2>
            <p className="text-gray-400 mb-2">September 2023 - December 2023 · Hybrid</p>
            <p className="text-gray-300">
              Helped students and solved multiple issues related to XTK.js, Three.js, WebGL, and more. Graded and
              reviewed weekly homework assignments as well as gave presentations.
            </p>
            <p className="text-gray-300 mt-2">
              <span className="font-medium">Skills:</span> GitHub, Three.js, XTK, Python, WebGL, Graphics
            </p>
            <p className="text-gray-300 mt-1">
              <a
                href="https://cs460.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white underline"
              >
                cs460.org
              </a>
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">Research Fellow Software Engineer at UMass Boston</h2>
            <p className="text-gray-400 mb-2">July 2023 - May 2024</p>
            <p className="text-gray-300">
              Advanced the open-source Boostlet.js library by developing 2 plugins for edge-based medical image
              processing and automated testing pipeline using Puppeteer, reducing developer testing time by 50%.
              Enhanced integration with frameworks like Xtk.js, Papaya.js, and Niivue.js, and enabled client-side
              execution of machine learning models.
            </p>
            <p className="text-gray-300 mt-2">
              Presented research advancements to around 20 researchers and lab directors at the Niivue.js hackathon,
              annual BrainHack, and first-authored research paper.
            </p>
          </div>

          <div className="border-l-2 border-gray-800 pl-6 relative">
            <div className="absolute w-3 h-3 bg-gray-800 rounded-full -left-[7px] top-1.5"></div>
            <h2 className="text-xl font-bold">
              Research Software Engineer and Technical Intern at MIT "NoBrainer" Sensein Group
            </h2>
            <p className="text-gray-400 mb-2">June 2023 - December 2023</p>
            <p className="text-gray-300">
              Engineered scientific software for neuroimaging and biomedical signal analysis, incorporating neural
              network models and optimizing them for high-performance computing environments using Tensorflow,
              Singularity, and Slurm.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
