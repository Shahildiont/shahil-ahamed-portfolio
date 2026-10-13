"use client";

import {
  ArrowDownRight,
  Code2,
  FileText,
  Github,
  Instagram,
  Linkedin,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";
import { personal } from "@/data/personal";

export default function Hero() {
  return (
    <section id="top" className="hero paper-grain">
      <div className="site-container hero__inner">
        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="hero__eyebrow">{personal.role}</span>

          <h1 className="hero__title">
            {personal.firstName}
            <span>{personal.lastName}</span>
          </h1>

          <p className="hero__description">{personal.introduction}</p>

          <div className="hero__buttons">
            <a className="button button--primary" href="#projects">
              View my work
              <ArrowDownRight size={17} strokeWidth={1.8} />
            </a>

            <a
              className="button button--secondary"
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Resume
              <FileText size={16} strokeWidth={1.8} />
            </a>
          </div>

          <div className="hero__links">
            <a href={personal.social.email} aria-label="Send Shahil an email">
              <Mail size={18} strokeWidth={1.7} />
              <span>{personal.email}</span>
            </a>

            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Shahil's LinkedIn profile"
            >
              <Linkedin size={18} strokeWidth={1.7} />
            </a>

            <a
              href={personal.social.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Shahil's GitHub profile"
            >
              <Github size={18} strokeWidth={1.7} />
            </a>

            <a
              href={personal.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Shahil's Instagram profile"
            >
              <Instagram size={18} strokeWidth={1.7} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero__image-wrapper"
          initial={{ opacity: 0, scale: 0.94, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div
            className="hero__placeholder"
            aria-label="Shahil Ahamed profile image placeholder"
          >
            <Code2 size={52} strokeWidth={1.15} />
            <span>SA</span>
          </div>

          <p className="hero__location">{personal.location}</p>
        </motion.div>
      </div>
    </section>
  );
}