import AnimatedSection from "@/components/common/AnimatedSection";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="site-container">
        <AnimatedSection>
          <header className="skills__header">
            <span className="section-label">03 — Skills</span>
            <h2 className="section-title">Technologies I work with</h2>
            <p className="section-subtitle">
              A practical toolkit for building, shipping, and maintaining modern
              web applications.
            </p>
          </header>
        </AnimatedSection>

        <div className="skills__grid">
          {skillGroups.map((group, index) => (
            <AnimatedSection key={group.title} delay={index * 0.07}>
              <article className="skills__group">
                <h3>{group.title}</h3>

                <ul>
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}