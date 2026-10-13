import AnimatedSection from "@/components/common/AnimatedSection";
import ProjectCard from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects section diagonal-pattern">
      <div className="site-container">
        <AnimatedSection>
          <header className="projects__header">
            <div>
              <span className="section-label">02 — Projects</span>
              <h2 className="section-title">Things I’ve built</h2>
              <p className="section-subtitle">
                Full-stack products, production systems, and real-world workflows.
              </p>
            </div>
          </header>
        </AnimatedSection>

        <div className="projects__list">
          {projects.map((project, index) => (
            <AnimatedSection key={project.slug} delay={index * 0.06}>
              <div id={`project-${project.slug}`}>
                <ProjectCard project={project} index={index} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}