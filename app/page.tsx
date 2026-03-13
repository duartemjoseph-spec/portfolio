"use client";

import { useState } from "react";
import AnimatedContent from "@/components/AnimatedContent";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Galaxy from "@/components/Galaxy";
import GlareHover from "@/components/GlareHover";
import RotatingText from "@/components/RotatingText";

export default function Home() {
  const [activeTab, setActiveTab] = useState("about");

  const projects = [
    {
      title: "Venn Schedule App",
      description:
        "A scheduling app focused on showing room availability and helping users compare schedules.",
      tech: ["Next.js", "React", "CSS"],
      github: "https://github.com/duartemjoseph-spec",
      live: "https://your-live-link.com",
    },
    {
      title: "All For One Frontend",
      description:
        "A frontend project that connects to API endpoints and displays interactive responses for users.",
      tech: ["JavaScript", "Next.js", "API"],
      github: "https://github.com/duartemjoseph-spec",
      live: "https://your-live-link.com",
    },
    {
      title: "Hackathon Project",
      description:
        "A collaborative team project where I helped design and build the frontend experience.",
      tech: ["React", "Figma", "Tailwind"],
      github: "https://github.com/duartemjoseph-spec",
      live: "https://your-live-link.com",
    },
  ];

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "GitHub",
    "Figma",
    "Tailwind CSS",
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden text-zinc-900 dark:text-zinc-100">
      <div className="pointer-events-none absolute inset-0 -z-20">
        <Galaxy className="h-full w-full" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-white/88 dark:bg-black/68" />

      <header className="sticky top-0 z-50 border-b border-black/10 bg-white/55 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/45">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-bold tracking-tight">Joseph</h1>

          <div className="hidden md:flex">
            <div className="relative flex items-center rounded-full border border-white/20 bg-white/35 p-1 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
              <div
                className={`absolute top-1 h-[calc(100%-8px)] rounded-full bg-white/80 shadow-sm transition-all duration-300 dark:bg-white/20 ${
                  activeTab === "about"
                    ? "left-1 w-[76px]"
                    : activeTab === "projects"
                      ? "left-[85px] w-[88px]"
                      : activeTab === "skills"
                        ? "left-[177px] w-[72px]"
                        : "left-[253px] w-[84px]"
                }`}
              />

              <a
                href="#about"
                onClick={() => setActiveTab("about")}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
              >
                About
              </a>

              <a
                href="#projects"
                onClick={() => setActiveTab("projects")}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
              >
                Projects
              </a>

              <a
                href="#skills"
                onClick={() => setActiveTab("skills")}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
              >
                Skills
              </a>

              <a
                href="#contact"
                onClick={() => setActiveTab("contact")}
                className="relative z-10 rounded-full px-4 py-2 text-sm font-medium transition duration-300 hover:text-fuchsia-600 dark:hover:text-fuchsia-300"
              >
                Contact
              </a>
            </div>
          </div>

          <AnimatedThemeToggler />
        </nav>
      </header>

      <section className="mx-auto flex min-h-[78vh] max-w-6xl items-center px-6 pt-20 pb-12">
        <AnimatedContent>
          <div className="max-w-4xl rounded-[2rem] border border-white/15 bg-white/8 p-8 backdrop-blur-[6px] dark:bg-black/10 md:p-10">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-zinc-600 dark:text-zinc-300">
              Front-End Developer
            </p>

            <h2 className="text-6xl font-bold leading-tight tracking-tight md:text-8xl">
              Hi, I&apos;m Joseph.
            </h2>

            <div className="mt-4 h-1 w-48 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 md:w-72 lg:w-[26rem]" />

            <div className="mt-6 max-w-3xl space-y-4">
              <p className="text-lg leading-8 text-zinc-700 dark:text-zinc-200">
                I design and build modern web experiences that feel clean,
                interactive, and memorable.
              </p>

              <div className="flex flex-wrap items-center gap-3 text-lg font-medium text-zinc-700 dark:text-zinc-200">
                <span>I create</span>

                <div className="rounded-full border border-white/20 bg-white/55 px-5 py-2.5 backdrop-blur-md dark:border-white/10 dark:bg-white/10">
                  <RotatingText
                    texts={[
                      "frontend apps",
                      "smooth interfaces",
                      "modern UI",
                      "responsive websites",
                    ]}
                    mainClassName="text-fuchsia-600 dark:text-fuchsia-300"
                    staggerFrom="last"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-120%", opacity: 0 }}
                    staggerDuration={0.03}
                    splitLevelClassName="overflow-hidden"
                    transition={{
                      type: "spring",
                      damping: 30,
                      stiffness: 400,
                    }}
                    rotationInterval={2200}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://github.com/duartemjoseph-spec"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-zinc-950 px-7 py-3.5 text-sm font-medium text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg dark:bg-white dark:text-black"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/joseph-duarte-40303a125/"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/55 px-7 py-3.5 text-sm font-medium backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/20 bg-white/55 px-7 py-3.5 text-sm font-medium backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lg dark:border-white/10 dark:bg-white/10"
              >
                Resume
              </a>
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-12">
        <AnimatedContent>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-fuchsia-600 dark:text-fuchsia-300">
            Who I Am
          </p>

          <div className="rounded-3xl border border-white/20 bg-white/55 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.08]">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              About Me
            </h3>

            <p className="mt-4 max-w-3xl text-base leading-8 text-zinc-700 dark:text-zinc-300">
              I am a developer focused on building modern, user-friendly web
              applications. I enjoy frontend development, UI design, and
              learning how to create experiences that look good and work well
              across devices. I&apos;m currently building projects with Next.js
              and React while continuing to improve my design and development
              workflow.
            </p>
          </div>
        </AnimatedContent>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-20">
        <p className="mb-3 text-sm uppercase tracking-[0.25em] text-fuchsia-600 dark:text-fuchsia-300">
          Selected Work
        </p>

        <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
          Projects
        </h3>

        <AnimatedContent>
          <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <GlareHover
                key={project.title}
                glareColor="#ffffff"
                glareOpacity={0.18}
                glareAngle={-30}
                glareSize={250}
                transitionDuration={800}
                className="h-full rounded-3xl"
              >
                <article
                  className={`flex min-h-[320px] h-full flex-col rounded-3xl border p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.16)] ${
                    index === 0
                      ? "border-fuchsia-300/40 bg-white/60 shadow-[0_12px_50px_rgba(168,85,247,0.18)] dark:border-fuchsia-400/30 dark:bg-white/[0.10]"
                      : "border-white/20 bg-white/50 shadow-[0_10px_40px_rgba(0,0,0,0.08)] dark:border-white/10 dark:bg-white/[0.08]"
                  }`}
                >
                  <h4 className="text-xl font-semibold">{project.title}</h4>

                  <p className="mt-3 text-sm leading-7 text-zinc-700 dark:text-zinc-300">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-black/10 bg-white/40 px-3 py-1 text-xs dark:border-white/10 dark:bg-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4 text-sm font-medium md:mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-fuchsia-600 hover:underline dark:hover:text-fuchsia-300"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="transition hover:text-fuchsia-600 hover:underline dark:hover:text-fuchsia-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              </GlareHover>
            ))}
          </div>
        </AnimatedContent>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedContent>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-fuchsia-600 dark:text-fuchsia-300">
            Tools I Use
          </p>

          <div className="rounded-3xl border border-white/20 bg-white/55 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.08]">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Skills
            </h3>

            <div className="mt-6 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-black/10 bg-white/40 px-4 py-2 text-sm dark:border-white/10 dark:bg-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </AnimatedContent>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <AnimatedContent>
          <p className="mb-3 text-sm uppercase tracking-[0.25em] text-fuchsia-600 dark:text-fuchsia-300">
            Let&apos;s Connect
          </p>

          <div className="rounded-3xl border border-white/20 bg-white/55 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:border-white/10 dark:bg-white/[0.08]">
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white">
              Contact
            </h3>

            <div className="mt-6 grid gap-4 text-base text-zinc-700 dark:text-zinc-300 md:grid-cols-2">
              <p>
                <span className="font-semibold">Phone:</span> (209) 555-1234
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                yourname@email.com
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{" "}
                <a
                  href="https://www.linkedin.com/in/joseph-duarte-40303a125/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-fuchsia-600 hover:underline dark:hover:text-fuchsia-300"
                >
                  linkedin.com/in/joseph-duarte-40303a125
                </a>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{" "}
                <a
                  href="https://github.com/duartemjoseph-spec"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-fuchsia-600 hover:underline dark:hover:text-fuchsia-300"
                >
                  github.com/duartemjoseph-spec
                </a>
              </p>
              <p>
                <span className="font-semibold">Resume:</span>{" "}
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-fuchsia-600 hover:underline dark:hover:text-fuchsia-300"
                >
                  View Resume
                </a>
              </p>
            </div>
          </div>
        </AnimatedContent>
      </section>
    </main>
  );
}