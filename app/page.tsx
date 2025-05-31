import Project from "@/components/project";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: "1",
    category: "Next.js",
    title: "Film Snail",
    description:
      "An online collection of movies, tv shows and the people who make them possible.",
    href: "https://filmsnail.vercel.app/",
    repo: "https://github.com/kumabayne/next-movie",
  },
];

export default function Home() {
  return (
    <main className="py-4">
      <div className="container mx-auto px-4 md:px-6">
        <div className="md:grid md:grid-cols-2 md:gap-8 xl:gap-16">
          <div>
            <div>
              <h2 className="text-primary text-sm font-extrabold tracking-widest uppercase">
                Frontend Engineer
              </h2>
              <h1 className="mt-2 font-sans text-5xl font-bold tracking-tighter">
                Cullen Bayne
              </h1>
              <p className="mt-8 text-neutral-400">
                I build responsive frontend web applications using modern
                frameworks focusing on proven UI/UX principles and
                accessibility.
              </p>
              <p className="mt-8 text-neutral-400">
                Connect with me on{" "}
                <Link
                  className="border-b border-transparent font-medium text-white transition-colors duration-200 ease-in-out hover:border-white"
                  href="https://www.linkedin.com/in/cullen-bayne-1b83b7168/"
                  target="_blank"
                >
                  LinkedIn
                </Link>
                , take a look at my{" "}
                <Link
                  className="border-b border-transparent font-medium text-white transition-colors duration-200 ease-in-out hover:border-white"
                  href="https://github.com/kumabayne"
                  target="_blank"
                >
                  github
                </Link>{" "}
                , grab my{" "}
                <a
                  className="border-b border-transparent font-medium text-white transition-colors duration-200 ease-in-out hover:border-white"
                  href="/cullenbayne_resume.pdf"
                  download
                >
                  resume
                </a>{" "}
                or check out my latest{" "}
                <a
                  className="border-b border-transparent font-medium text-white transition-colors duration-200 ease-in-out hover:border-white"
                  href="#projects"
                >
                  projects
                </a>
                .
              </p>
            </div>
            <div className="mt-8">
              <Link
                className="bg-primary hover:bg-primary-hover inline-block rounded-full px-4 py-3 text-sm font-bold transition-colors duration-300 ease-in-out"
                href="mailto:kumabayne@icloud.com"
              >
                Get in touch
              </Link>
            </div>
            <div className="mt-8">
              <Image
                className="md:mx-auto md:max-w-5/6"
                src="/desk.svg"
                alt="Developer desk"
                width="1566"
                height="704"
                priority
              />
            </div>
          </div>
          <div className="mt-8 py-8">
            <h2
              id="projects"
              className="text-xs font-extrabold tracking-widest uppercase"
            >
              Latest Projects
            </h2>
            <div className="mt-4 space-y-4">
              {projects.map((project) => (
                <Project key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
