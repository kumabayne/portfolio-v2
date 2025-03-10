import { Github, PanelsTopLeft } from "lucide-react";
import Link from "next/link";

export type ProjectType = {
  category: string;
  title: string;
  href: string;
  description: string;
  repo: string;
};

export default function Project({ project }: { project: ProjectType }) {
  return (
    <div className="bg-neutral-900 p-8">
      <h4 className="text-primary text-xs font-extrabold tracking-widest uppercase">
        {project.category}
      </h4>
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p className="text-neutral-400">{project.description}</p>
      <div className="mt-4 flex items-center gap-4">
        <Link
          className="flex items-center gap-1 transition-colors duration-200 ease-in-out hover:text-neutral-400"
          href={project.href}
          target="_blank"
        >
          <PanelsTopLeft className="h-4 w-4" />
          <span className="text-sm font-medium">View project</span>
        </Link>
        <Link
          className="flex items-center gap-1 transition-colors duration-200 ease-in-out hover:text-neutral-400"
          href={project.repo}
          target="_blank"
        >
          <Github className="h-4 w-4" />
          <span className="text-sm font-medium">Repo</span>
        </Link>
      </div>
    </div>
  );
}
