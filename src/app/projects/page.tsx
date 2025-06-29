import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Fantail Shopify Website",
    description: "Fully restructured and redesigned Fantail’s Shopify store. Delivered a cleaner UI, faster performance, a simplified product catalog and improved SEO performance.",
    tags: ["Shopify", "Liquid", "Tailwind CSS", "HTML/CSS", "JavaScript"],
    demoUrl: "https://www.fantail.eu/",
    githubUrl: "https://github.com/username/project",
    image: "/assets/fantail_herobanner.png",
    featured: true,
  },
  {
    id: 2,
    title: "Transcendence",
    description: "First full stack project for the mighty Pong contest! Multiplayer game with live tournaments. Developed backend logic for matchmaking, live rounds, and tournament scheduling.",
    tags: ["TypeScript", "Fastify", "Tailwind CSS", "WebSockets", "SQLite", "Docker", "JWT", "JavaScript", "HTML/CSS"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/phlpn/Transcendence",
    image: "/assets/ts_home.png",
    featured: true,
  },
  {
    id: 3,
    title: "Webserv",
    description: "A lightweight HTTP server built in C++98 with NGINX-style configuration support. It handles directives like listen, root, location, autoindex, error_page, redirect, and upload. CGI support is included for dynamic content.",
    tags: ["C++98", "HTTP", "Multiplexing", "NGINX", "Socket Programming", "TCP/IP", "CGI", "Python", "HTML/CSS", "JavaScript"],
    demoUrl: "",
    githubUrl: "https://github.com/js-bytebybyte/webserv",
    image: "/assets/webserv.png",
    featured: true,
  },
  {
    id: 4,
    title: "Inception",
    description: "A system architecture project focused on deploying a full web infrastructure using Docker. This setup includes multiple interconnected containers for services such as Nginx, WordPress & MariaDB.",
    tags: ["Docker", "Docker Compose", "Dockerfile", "NGINX", "MariaDB", "Wordpress"],
    demoUrl: "",
    githubUrl: "",
    image: "/assets/inception.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Minishell",
    description: "A simplified Unix shell written in C that replicates core shell functionalities. The project focused on low-level process control, file descriptors, and building a robust command-line interface from scratch.",
    tags: ["C", "Bash", "Pipes", "Signaling",  "Environment Variables", "Unix Shell", "File Descriptors"],
    demoUrl: "",
    githubUrl: "git@github.com:js-bytebybyte/minishell.git",
    image: "/assets/minishell.png",
    featured: false,
  },
  {
    id: 6,
    title: "Cub3d",
    description: "A minimalist 3D game built from scratch using raycasting techniques, inspired by Wolfenstein 3D. Developed entirely with C and the MiniLibX graphics library.",
    tags: ["C", "Raycasting", "Game Development", "Graphics Programming", "Wolfenstein 3D"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/js-bytebybyte/cub3d",
    image: "/assets/cub3d.png",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="space-y-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-lg text-muted-foreground">
          A collection of projects I've done at Campus 19 or for my internship
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group border rounded-lg overflow-hidden bg-card hover:shadow-lg transition-shadow">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex space-x-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
