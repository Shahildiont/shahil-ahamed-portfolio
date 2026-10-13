import { Blocks, Code2, Database, ShieldCheck } from "lucide-react";
import AnimatedSection from "@/components/common/AnimatedSection";

const metrics = [
  {
    value: "4",
    label: "Featured projects",
    icon: Blocks,
  },
  {
    value: "12",
    label: "Product-facing modules",
    icon: Code2,
  },
  {
    value: "461",
    label: "API endpoints in platform scope",
    icon: Database,
  },
  {
    value: "143",
    label: "Database models worked with",
    icon: ShieldCheck,
  },
] as const;

export default function About() {
  return (
    <section id="about" className="about section section--muted paper-grain">
      <div className="site-container">
        <AnimatedSection>
          <header className="about__header">
            <div>
              <span className="section-label">04 — About</span>
              <h2 className="section-title">How I approach development</h2>
            </div>

            <p className="about__intro">
              I enjoy turning ideas into reliable, user-friendly software—from
              a first interface and API to deployment, debugging, and iteration.
            </p>
          </header>
        </AnimatedSection>

        <div className="about__content">
          <AnimatedSection delay={0.08}>
            <div className="about__copy">
              <p>
                I am a full stack developer with experience building
                applications across e-commerce, SaaS, education, and finance.
                My work covers responsive frontend interfaces, backend APIs,
                database-driven workflows, authentication, authorization, and
                cloud deployment.
              </p>

              <p>
                I focus on software that is practical, secure, maintainable, and
                ready to grow. I enjoy solving production problems involving API
                communication, CORS, file storage, environment configuration,
                and deployment behavior—not only building the visual interface.
              </p>

              <a className="about__contact-link" href="#contact">
                Let’s build something useful
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.16}>
            <div
              className="about__metrics"
              aria-label="Engineering experience snapshot"
            >
              {metrics.map((metric) => {
                const Icon = metric.icon;

                return (
                  <article className="metric-card" key={metric.label}>
                    <Icon
                      className="metric-card__icon"
                      size={19}
                      strokeWidth={1.55}
                      aria-hidden="true"
                    />

                    <p className="metric-card__value">{metric.value}</p>
                    <p className="metric-card__label">{metric.label}</p>
                  </article>
                );
              })}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.1}>
          <p className="about__note">
            Platform-scale figures refer to the XcellSchool application
            environment and workflows I worked on; they do not claim sole
            ownership of the entire system.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}