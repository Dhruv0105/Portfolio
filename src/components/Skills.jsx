import { motion } from "framer-motion";

const skillGroups = [

  {
    icon: "{ }",
    title: "Languages",

    skills: [
      "c",
      "c++",
      "java",
      "javascript",
      "python",
      "r",
      "bash / shell scripting",
      "sql",

    ],
  },

  {
    icon: "◧",
    title: "Frontend & Backend",

    skills: [
      "React.js",
      "Next.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express",
      "JWT Auth",
      "Firebase",
    ],
  },

  {
    icon: "⚡",
    title: "APIs & Tools & Platforms",

    skills: [
      "REST APIs",
      "Git",
      "GitHub",
      "Linux",
      "Docker",
      "AWS",
      "Postman",
      "Vercel",
      "Render",
      "CI/CD",
      "MS Office",
      "Nginx",
    ],
  },

  {
    icon: "◉",
    title: "Databases",

    skills: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },

  {
    icon: "◈",
    title: "AI / ML",

    skills: [
      "TensorFlow",
      "Scikit-learn",
      "OpenCV",
      "Cnn",
      "nlp",
      "Computer Vision",
      "Pandas",
      "NumPy",
      "Seaborn",
      "keras",
      "Yolo",
    ],
  },

  {
    icon: "⚙",
    title: "Cybersecurity",

    skills: [
      "SIEM",
      "Splunk",
      "Wazuh",
      "Wireshark",
      "Zeek",
      "Threat Hunting",
      "MITRE ATT&CK",
      "Sysmon",
    ],
  },

];

const movingSkills = [

  "React.js",
  "Next.js",
  "Tailwind CSS",
  "MongoDB",
  "Express.js",
  "Node.js",
  "Python",
  "TensorFlow",
  "Scikit-learn",
  "Splunk",
  "Wazuh",
  "Wireshark",
  "SOC",
  "Threat Hunting",
  "JWT Auth",
  "REST APIs",
  "MySQL",
  "Git",
  "GitHub",
  "Linux",
  "Render",
  "Vercel",
  "Seaborn",
  "keras",
  "Yolo",
  "Cnn",
  "nlp",
  "CI/CD",
  "MS Office",
  "Nginx",

];

export default function Skills() {

  return (

    <section
      id="skills"
      className="relative py-32 overflow-hidden"
    >

      <div className="px-[6vw]">

        {/* header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* label */}

          <div className="flex items-center gap-4 mb-16">

            <span className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-mono">

              04

            </span>

            <div className="w-14 h-px bg-[#2a2a2a]" />

            <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-mono">

              Skills

            </span>

          </div>

          {/* heading */}

          <div className="flex justify-between flex-wrap gap-10 mb-20">

            <h2
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >

              Tools of the{" "}

              <span className="italic text-[#c9a95e]">

                trade

              </span>

            </h2>

            <p className="max-w-md text-gray-500 leading-8">

              A versatile stack spanning full-stack engineering,
              AI systems,
              cybersecurity operations,
              and detection engineering.

            </p>

          </div>

        </motion.div>

        {/* cards */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {skillGroups.map((group, index) => (

            <motion.div

              key={group.title}

              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -4, 
                boxShadow: "0 10px 30px -15px rgba(201, 169, 110, 0.15)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              viewport={{ once: true, amount: 0.2 }}

              className="border border-[#1c1c1c] bg-[#101010] p-8 hover:border-[#c9a96e44] transition-all duration-500"
            >

              <div className="flex items-center gap-4 mb-10">

                <span className="text-[#c9a96e]">

                  {group.icon}

                </span>

                <p className="uppercase tracking-[0.35em] text-[10px] text-gray-500 font-mono">

                  {group.title}

                </p>

              </div>

              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill) => (

                  <span
                    key={skill}
                    className="border border-[#2a2a2a] px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-gray-400 font-mono hover:border-[#c9a96e55] hover:text-[#c9a96e] transition-all duration-300"
                  >

                    {skill}

                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

      {/* moving marquee */}

      <div className="mt-24 overflow-hidden">

        <motion.div

          animate={{
            x: ["0%", "-50%"],
          }}

          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}

          className="flex gap-4 w-max"
        >

          {[...movingSkills, ...movingSkills].map((skill, index) => (

            <div
              key={index}
              className="border border-[#1f1f1f] bg-[#111] px-6 py-4 text-[11px] uppercase tracking-[0.25em] text-gray-500 font-mono whitespace-nowrap"
            >

              • {skill}

            </div>

          ))}

        </motion.div>

      </div>

      {/* reverse marquee */}

      <div className="mt-6 overflow-hidden">

        <motion.div

          animate={{
            x: ["-50%", "0%"],
          }}

          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}

          className="flex gap-4 w-max"
        >

          {[...movingSkills, ...movingSkills].reverse().map((skill, index) => (

            <div
              key={index}
              className="border border-[#1f1f1f] bg-[#111] px-6 py-4 text-[11px] uppercase tracking-[0.25em] text-gray-500 font-mono whitespace-nowrap"
            >

              • {skill}

            </div>

          ))}

        </motion.div>

      </div>

    </section>

  );
}