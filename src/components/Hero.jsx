import { motion } from "framer-motion";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  return (

    <section className="min-h-screen flex items-center pt-24 px-[6vw] relative overflow-hidden">

      {/* background grid */}

      <div className="absolute inset-0 opacity-[0.03]">

        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(var(--accent) 1px, transparent 1px),
              linear-gradient(90deg, var(--accent) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      {/* orb */}

      <div className="absolute right-[-200px] top-[-150px] w-[700px] h-[700px] rounded-full bg-[#c9a96e08] blur-3xl" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[780px]"
        >

          {/* available */}

          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-10">

            <div className="relative w-[10px] h-[10px]">

              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />

              <div className="absolute inset-[2px] rounded-full bg-green-400" />

            </div>

            <p className="text-[11px] uppercase tracking-[0.45em] text-gray-500 font-mono">

              Available for opportunities

            </p>

          </motion.div>

          {/* role */}

          <motion.p variants={itemVariants} className="text-[#c9a96e] uppercase tracking-[0.45em] text-[11px] mb-8 font-mono">

            Full-Stack Developer & AI/ML Engineer

          </motion.p>

          {/* heading */}

          <motion.h1
            variants={itemVariants}
            className="leading-[0.9] text-[#f5f0e8]"
            style={{
              fontFamily: "Cormorant Garamond",
              fontWeight: 300,
              fontSize: "clamp(2.5rem,8vw,8.5rem)",
            }}
          >

            Building{" "}

            <span className="italic text-[#c9a96e]">

              experiences

            </span>

            <br />

            that matter.

          </motion.h1>

          {/* description */}

          <motion.p variants={itemVariants} className="mt-12 max-w-[700px] text-[20px] leading-[2.2rem] text-gray-400">

            CS Engineering student at Chandigarh University,
            specializing in AI & ML.

            I build scalable web applications and intelligent systems —
            from cybersecurity platforms to modern AI solutions.

          </motion.p>

          {/* buttons */}

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 mt-14">

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#c9a96e] text-black px-10 py-5 uppercase tracking-[0.3em] text-[11px] font-mono border border-[#c9a96e] hover:bg-transparent hover:text-[#c9a96e] transition-all duration-300"
            >

              View My Work →

            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-[#2a2a2a] px-10 py-5 uppercase tracking-[0.3em] text-[11px] font-mono hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300"
            >

              Get In Touch

            </motion.button>

          </motion.div>

          {/* stats */}

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-10 sm:gap-28 mt-24">

            {[
              ["9+", "Accepted Projects"],
              ["85%", "ML Accuracy"],
              ["99.9%", "Uptime"],
            ].map(([num, label]) => (

              <div key={label}>

                <h2
                  className="text-[#c9a96e] leading-none"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "4rem",
                    fontWeight: 300,
                  }}
                >
                  {num}
                </h2>

                <p className="mt-3 text-[10px] uppercase tracking-[0.35em] text-gray-600 font-mono">

                  {label}

                </p>

              </div>

            ))}

          </motion.div>

        </motion.div>

      </div>

    </section>

  );
}