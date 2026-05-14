import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {

  return (

    <section
      id="projects"
      className="relative py-32 px-[6vw]"
    >

      <div className="max-w-[1400px] mx-auto">

        {/* section label */}

        <div className="flex items-center gap-4 mb-16">

          <span className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-mono">
            03
          </span>

          <div className="w-14 h-px bg-[#2a2a2a]" />

          <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-mono">
            Selected Projects
          </span>

        </div>

        {/* heading */}

        <div className="flex justify-between items-end mb-20 flex-wrap gap-10">

          <h2
            className="text-[#f5f0e8]"
            style={{
              fontFamily: "Cormorant Garamond",
              fontSize: "clamp(2.5rem,6vw,5rem)",
              fontWeight: 300,
              lineHeight: 1,
            }}
          >

            Crafted with{" "}

            <span className="italic text-[#c9a96e]">

              precision

            </span>

          </h2>

          <p className="max-w-xl text-gray-500 leading-8">

            A collection of AI systems, cybersecurity research,
            scalable applications, and modern digital experiences.

          </p>

        </div>

        {/* project grid */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}

              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}

              viewport={{ once: true }}

              className="group relative border border-[#1c1c1c] bg-[#101010] overflow-hidden hover:border-[#c9a96e55] transition-all duration-500"
            >

              {/* top glow */}

              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a96e] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* ghost number */}

              <div
                className="absolute top-6 right-6 opacity-[0.05]"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "6rem",
                }}
              >
                0{index + 1}
              </div>

              <div className="p-8 relative z-10">

                {/* category */}

                <p className="text-[#c9a96e] text-[10px] tracking-[0.35em] uppercase font-mono mb-6">

                  {project.category}

                </p>

                {/* title */}

                <h3
                  className="text-[#f5f0e8] group-hover:text-[#c9a96e] transition-all duration-300 mb-5"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "2rem",
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >

                  {project.title}

                </h3>

                {/* desc */}

                <p className="text-gray-500 leading-8 text-[15px] mb-8">

                  {project.description}

                </p>

                {/* tech */}

                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech) => (

                    <span
                      key={tech}
                      className="border border-[#2a2a2a] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300"
                    >

                      {tech}

                    </span>

                  ))}

                </div>

              </div>

              {/* footer */}

              <div className="border-t border-[#1c1c1c] px-8 py-5 flex justify-between items-center">

                <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">

                  Featured Project

                </span>

                <span className="text-[#c9a96e] text-sm group-hover:translate-x-1 transition-all duration-300">

                  ↗

                </span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}