import {
  ArrowUpRight,
  CodeXml,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";

type ProjectCardProps = {
  project: {
    slug: string;
    title: string;
    category: string;
    period: string;
    description: string;
    technologies: readonly string[];
    highlights: readonly string[];
    sourceUrl: string;
    liveUrl: string;
    devUrl: string;
    featured: boolean;
  };
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const hasLinks = Boolean(
    project.sourceUrl || project.liveUrl || project.devUrl,
  );

  return (
    <article
      className={`project-card ${
        project.featured ? "project-card--featured" : ""
      }`}
    >
      <div className="project-card__accent" aria-hidden="true" />

      <div className="project-card__top">
        <div>
          <p className="project-card__number">
            {String(index + 1).padStart(2, "0")}
          </p>

          <h3>{project.title}</h3>
          <p className="project-card__category">{project.category}</p>
        </div>

        <div className="project-card__meta">
          <span className="project-card__period">{project.period}</span>

          <a
            className="project-card__corner-link"
            href={`#project-${project.slug}`}
            aria-label={`Read more about ${project.title}`}
            title={`Read more about ${project.title}`}
          >
            <ArrowUpRight size={19} strokeWidth={1.7} />
          </a>
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul
        className="project-card__highlights"
        aria-label={`${project.title} highlights`}
      >
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <div className="project-card__bottom">
        <div className="project-card__technologies">
          {project.technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {hasLinks ? (
          <div className="project-card__links">
            {project.sourceUrl && (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} source code`}
              >
                <Github size={16} strokeWidth={1.8} />
                Source
              </a>
            )}

            {project.liveUrl && (
              <a
                className="project-card__live-link"
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} live site`}
              >
                <ExternalLink size={15} strokeWidth={1.8} />
                Live site
              </a>
            )}

            {project.devUrl && (
              <a
                className="project-card__dev-link"
                href={project.devUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Visit ${project.title} development environment`}
              >
                <CodeXml size={16} strokeWidth={1.8} />
                Dev
              </a>
            )}
          </div>
        ) : (
          <span className="project-card__private">
            <Sparkles size={14} strokeWidth={1.8} />
            Production work
          </span>
        )}
      </div>
    </article>
  );
}