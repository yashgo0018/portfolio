import { TbExternalLink } from "react-icons/tb";

function ProjectBox({ project }: { project: Project }) {
  return (
    <div className="border-2 rounded-xl p-6">
      <div className="">
        <img
          src={project.image.asset.url}
          className="rounded-xl grayscale hover:grayscale-0"
          alt={project.title}
        />
      </div>
      <div className="mt-5 text-2xl">{project.title}</div>
      <div className="mt-3 text-md">{project.description}</div>
      <div className="flex mt-5 gap-3">
        {project.links.map((linkObj) => (
          <a
            key={linkObj.type}
            href={linkObj.href}
            target="_blank"
            className="flex border-2 px-3 py-1 rounded-lg gap-2"
          >
            <span className="my-auto">
              <TbExternalLink />
            </span>
            {linkObj.type}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function ProjectSection({ projects }: { projects: Project[] }) {
  return (
    <div className="py-20 min-h-screen md:mx-0 mx-10" id="projects">
      <div className="text-5xl md:text-6xl lg:text-7xl">
        Discover my latest work
      </div>
      <div className="grid md:grid-cols-2 gap-4 mt-10">
        {projects.map((project, index) => (
          <ProjectBox project={project} key={index} />
        ))}
      </div>
    </div>
  );
}
