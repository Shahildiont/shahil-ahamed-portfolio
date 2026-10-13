import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { personal } from "@/data/personal";

export default function Contact() {
  return (
    <section id="contact" className="contact section diagonal-pattern">
      <div className="site-container">
        <div className="contact__top">
          <div>
            <span className="section-label">06 — Contact</span>

            <h2 className="contact__title">Let’s work together</h2>

            <p className="contact__description">
              I’m open to full-stack development opportunities, interesting
              product ideas, and conversations about building better web
              applications.
            </p>
          </div>

          <div className="contact__primary-links">
            <a
              className="contact__email-link"
              href={personal.social.email}
              aria-label={`Email ${personal.name}`}
            >
              <Mail size={19} strokeWidth={1.65} />
              <span>{personal.email}</span>
              <ArrowUpRight size={20} strokeWidth={1.75} />
            </a>

            <a
              className="contact__phone-link"
              href={personal.phoneLink}
              aria-label={`Call ${personal.name} at ${personal.phone}`}
            >
              <Phone size={18} strokeWidth={1.65} />
              <span>{personal.phone}</span>
            </a>
          </div>
        </div>

        <div className="contact__divider" />

        <div className="contact__bottom">
          <nav className="contact__links" aria-label="Social links">
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href={personal.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>

            <a href={personal.resumeUrl} target="_blank" rel="noreferrer">
              Resume
            </a>

            <a href={personal.social.email}>Email</a>

            <a href={personal.phoneLink}>Phone</a>
          </nav>

          <p className="contact__copyright">
            © {new Date().getFullYear()} {personal.name}
          </p>
        </div>
      </div>
    </section>
  );
}