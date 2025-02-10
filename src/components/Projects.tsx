import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import chessImg from "../assets/images/chess.png";
import helixImg from "../assets/images/helix.png";

interface Project {
  image: string;
  title: string;
  description: string;
  details: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      image: helixImg,
      title: "Helix Project",
      description: "A deep learning project with advanced modeling.",
      details: "Helix is a deep learning initiative that focuses on neural networks for AI-driven analysis...",
    },
    {
      image: chessImg,
      title: "Chess Engine",
      description: "A chess AI built from scratch with FIDE rules.",
      details: "This chess engine follows all official FIDE rules, including castling, en passant, and promotion...",
    },
  ];

  return (
    <section id="featured-work" className="container m:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] w-full mb-24 px-4 mx-auto max-w-screen-lg">
      <h2 className="text-[22pt] font-bold leading-tight mb-6">My Projects.</h2>
      <div className="flex flex-wrap -mx-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          image={selectedProject.image}
          title={selectedProject.title}
          description={selectedProject.description}
          details={selectedProject.details}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
