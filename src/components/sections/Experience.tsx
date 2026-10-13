import Image from "next/image";
import { ArrowUpRight, BriefcaseBusiness } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section
      id="experience"
      className="experience section section--muted paper-grain"
    >
      <div className="site-container">
        <AnimatedSection>
          <header className="experience__header">
            <div>
              <span className="section-label">01 — Experience</span>
              <h2 className="section-title">Where I’ve been building</h2>
            </div>

            <p className="experience__intro">
              Production engineering experience across customer-facing products,
              internal dashboards, APIs, cloud services, and deployment
              workflows.
            </p>
          </header>
        </AnimatedSection>

        <div className="experience__list">
          {experiences.map((experience, index) => (
            <AnimatedSection key={experience.company} delay={index * 0.1}>
              <article className="experience-card">
                <aside className="experience-card__meta">
                  <div className="experience-card__logo" aria-hidden="true">
                    {experience.logo ? (
                      <Image
                        src={experience.logo}
                        alt=""
                        fill
                        sizes="48px"
                        className="experience-card__logo-image"
                      />
                    ) : (
                      <>
                        <BriefcaseBusiness size={22} strokeWidth={1.5} />
                        <span>{experience.initials}</span>
                      </>
                    )}
                  </div>

                  <p className="experience-card__period">
                    {experience.period}
                  </p>

                  <p className="experience-card__location">
                    {experience.location}
                  </p>
                </aside>

                <div className="experience-card__content">
                  <div className="experience-card__heading">
                    <div>
                      <h3>{experience.role}</h3>
                      <p>{experience.company}</p>
                    </div>

                    <a
                      className="experience-card__anchor"
                      href="#projects"
                      aria-label="View featured projects"
                      title="View featured projects"
                    >
                      <ArrowUpRight size={20} strokeWidth={1.7} />
                    </a>
                  </div>

                  <ul className="experience-card__highlights">
                    {experience.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}