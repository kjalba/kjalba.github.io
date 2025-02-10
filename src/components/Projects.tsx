import ProjectCard from "./ProjectCard";
import chessImg from "../assets/images/chess.png";
import helixImg from "../assets/images/helix.png";

export default function Projects() {
  return (
    <section id="featured-work" className="container m:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] w-full mb-24 px-4 mx-auto max-w-screen-lg">
      <h2 className="text-[22pt] font-bold leading-tight mb-6">My Projects.</h2>
      <div className="flex flex-wrap -mx-4">
        <ProjectCard
          image={helixImg}
          title="Helix Project"
          description="A deep learning project with advanced modeling."
        />
        <ProjectCard
          image={chessImg}
          title="Chess Engine"
          description="A chess AI built from scratch with FIDE rules."
        />
        {/* Add more <ProjectCard /> components as needed */}
      </div>
    </section>
  );
}
