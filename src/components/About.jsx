import { motion } from "framer-motion";

export default function About() {

  return (

    <section
      id="about"
      className="relative py-32 px-[6vw] z-10"
    >

      <div className="max-w-[1400px] mx-auto">

        {/* section label */}

        <div className="flex items-center gap-4 mb-16">

          <span className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-mono">
            02
          </span>

          <div className="w-14 h-px bg-[#2a2a2a]" />

          <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-mono">
            About Me
          </span>

        </div>

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-50"
          >

            {/* heading */}

            <h2
              className="mb-12 text-[#f5f0e8]"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >

              Code with{" "}

              <span className="italic text-[#c9a96e]">
                intent,
              </span>

              <br />

              ship with <strong>purpose</strong>

            </h2>

            {/* intro */}

            <div className="flex flex-col sm:flex-row gap-6 mb-10">

              <div className="w-20 h-20 rounded-full overflow-hidden border border-[#c9a96e] flex-shrink-0">

                <img
                  src="/profile.png"
                  alt="Dhruv Singh"
                  className="w-full h-full object-cover"
                />

              </div>

              <p className="text-gray-400 leading-10 text-lg">

                <span className="text-white font-semibold">
                  Dhruv Singh
                </span>{" "}

                is a CS Engineering student at Chandigarh University
                specializing in AI & ML, building at the intersection
                of full-stack development, cybersecurity,
                and intelligent systems.

              </p>

            </div>

            {/* paragraphs */}

            <div className="space-y-8 text-gray-500 leading-10 text-lg">

              <p>
                His work spans JWT-secured applications,
                SIEM detection pipelines,
                reverse shell traffic analysis,
                and scalable AI-powered systems.
              </p>

              <p>
                From cybersecurity investigations to modern web platforms,
                he focuses on building systems that are scalable,
                secure,
                and impactful.
              </p>

            </div>

            {/* clickable links */}

            <div className="flex flex-wrap gap-4 mt-12 relative z-50 pointer-events-auto">

              <a
                href="https://github.com/Dhruv0105"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="border border-[#1f1f1f] px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300 inline-block cursor-pointer"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/dhruv-singh-46b7a9334"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="border border-[#1f1f1f] px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300 inline-block cursor-pointer"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:hello.dhruv05@gmail.com"
                onClick={(e) => e.stopPropagation()}
                className="border border-[#1f1f1f] px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300 inline-block cursor-pointer"
              >
                Email ↗
              </a>

              <a
                href="tel:+918540922027"
                onClick={(e) => e.stopPropagation()}
                className="border border-[#1f1f1f] px-6 py-4 text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300 inline-block cursor-pointer"
              >
                Call ↗
              </a>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {/* education */}

            <div className="border border-[#1c1c1c] bg-[#101010] p-8">

              <div className="flex justify-between items-center mb-10">

                <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono">
                  Education
                </p>

                <p className="text-gray-700 text-[10px] font-mono">
                  2024 — 2028
                </p>

              </div>

              <h3
                className="text-white mb-2"
                style={{
                  fontFamily: "Cormorant Garamond",
                  fontSize: "2rem",
                }}
              >

                B.E. Computer Science

              </h3>

              <p className="text-gray-500 mb-8">
                Chandigarh University — AI & ML Specialization
              </p>

              <div className="flex flex-wrap gap-3">

                {[
                  "DSA",
                  "Algorithms",
                  "OS",
                  "DBMS",
                  "Networks",
                ].map((item) => (

                  <span
                    key={item}
                    className="border border-[#2a2a2a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-500 font-mono"
                  >

                    {item}

                  </span>

                ))}

              </div>

            </div>

            {/* certifications */}

            <div className="border border-[#1c1c1c] bg-[#101010] p-8">

              <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono mb-10">
                Certifications
              </p>

              <div className="space-y-8">

                <div className="flex justify-between gap-6">

                  <div>

                    <h4 className="text-white">
                      AI Foundations for Business
                    </h4>

                    <p className="text-gray-600 text-sm">
                      Coursera
                    </p>

                  </div>

                  <span className="text-gray-700 text-xs">
                    2025
                  </span>

                </div>

                <div className="flex justify-between gap-6">

                  <div>

                    <h4 className="text-white">
                      Intro to Machine Learning
                    </h4>

                    <p className="text-gray-600 text-sm">
                      Coursera
                    </p>

                  </div>

                  <span className="text-gray-700 text-xs">
                    2025
                  </span>

                </div>

              </div>

            </div>

            {/* quick info */}

            <div className="border border-[#1c1c1c] bg-[#101010] p-8">

              <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono mb-10">
                Quick Info
              </p>

              <div className="space-y-4">

                {[
                  ["Location", "Chandigarh, India"],
                  ["Email", "hello.dhruv05@gmail.com"],
                  ["Focus", "AI + Cybersecurity"],
                ].map(([label, value]) => (

                  <div
                    key={label}
                    className="border border-[#1f1f1f] px-6 py-5 flex justify-between flex-wrap gap-4"
                  >

                    <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">
                      {label}
                    </span>

                    <span className="text-gray-300">
                      {value}
                    </span>

                  </div>

                ))}

                <div className="border border-[#1f1f1f] px-6 py-5 flex justify-between">

                  <span className="text-gray-600 text-[10px] uppercase tracking-[0.3em] font-mono">
                    Status
                  </span>

                  <span className="text-green-400">
                    Open to Opportunities
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>

  );
}