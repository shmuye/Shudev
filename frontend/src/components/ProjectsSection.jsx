import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { research, netflix, youtube, amazon, social, employee } from "../assets";

const projects = [
  {
    id: 1,
    title: "Social Media application",
    description: "A lightweight social media app featuring communities, posts, comments, likes, and github OAuth authentication",
    image: social,
    tags: ["Typescript", "React", "TailwindCSS", "Supabase"],
    demoUrl: "https://postly-flax-iota.vercel.app/",
    githubUrl: "https://github.com/shmuye/social-media-app",
  },
  {
    id: 2,
    title: "Research Collaboration Mobile Application",
    description:
      "A full-stack Research Collaboration Android application that helps researchers collaborate efficiently, " + 
      + "manage projects, and share research resources seamlessly.",
    image: research,
    tags: ["NestJs", "PostgreSQL", "Jetpack compose", "Prisma"],
    demoUrl: "#",
    githubUrl: "https://github.com/shmuye/Research-collaboration-app",
  },
  {
    id: 3,
    title: "Employee hierarchy manager",
    description:
      "A full stack Employee Hierarchy Manager for managing a company’s organizational structure by defining who reports to whom, using a tree-based hierarchy for clear visualization and efficient management",
    image: employee,
    tags: ["Next.js", "Hono.js", "PostgreSQL", "Drizzle"],
    demoUrl: "#",
    githubUrl: "https://github.com/shmuye/Employee-Hierarchy-Manager",
  },
  {
    id: 4,
    title: "Netflix Clone",
    description: "To enable users to explore a wide range of movies and TV shows with categorized listings and detailed media previews.",
    image: netflix,
    tags: ["Typescript", "React", "TailwindCSS" ],
    demoUrl: "#",
    githubUrl: "https://github.com/shmuye/Netflix-clone",
  },
  {
    id: 5,
    title: "Youtube Clone",
    description:
      "A YouTube clone application featuring video search and filtering, with detailed video pages displaying likes and view counts.",
    image: youtube,
    tags: ["React", "Material UI"],
    demoUrl: "https://utubelike.netlify.app/",
    githubUrl: "https://github.com/shmuye/youtube-clone",
  },
  {
    id: 6,
    title: "Amazon clone",
    description:
      "replicating the core functionality of an e-commerce platform, enabling users to browse products, manage a shopping cart, and complete purchases.",
    image: amazon,
    tags: ["React", "Firebase", "Javascript"],
    demoUrl: "#",
    githubUrl: "https://github.com/shmuye/amazon-clone",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          What I have<span className="text-primary"> Built </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl || '#'}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/shmuye"
          >
            View More Projects <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
