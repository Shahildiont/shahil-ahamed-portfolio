import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="education" className="education section section--muted paper-grain">
      <div className="site-container">
        <header className="education__header">
          <span className="section-label">05 — Education</span>
          <h2 className="section-title">Academic background</h2>
          <p className="section-subtitle">
            Computer science foundations and continuous professional learning.
          </p>
        </header>

        <article className="education-card">
          <div className="education-card__meta">
            <p>2021 – 2025</p>
            <p>Cuddalore, India</p>
          </div>

          <div className="education-card__content">
            <h3>B.E. Computer Science and Engineering</h3>
            <p className="education-card__college">
              Krishnasamy College of Engineering and Technology
            </p>
            <span className="education-card__university">Anna University</span>
          </div>
        </article>

        <div className="certifications">
          <div className="certifications__heading">
            <Award size={19} strokeWidth={1.65} aria-hidden="true" />
            <h3>Certifications</h3>
          </div>

          <div className="certifications__grid">
            {certifications.map((certification) => (
              <article className="certification-card" key={certification.title}>
                <p className="certification-card__title">{certification.title}</p>
                <p className="certification-card__issuer">{certification.issuer}</p>

                {certification.link ? (
                  <a
                    className="certification-card__link"
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${certification.title} certificate`}
                  >
                    View credential
                    <ExternalLink size={14} strokeWidth={1.8} />
                  </a>
                ) : (
                  <span className="certification-card__status">
                    Credential available on request
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 