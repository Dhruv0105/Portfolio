import { motion } from "framer-motion";

export default function Hero() {

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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-[780px]"
        >

          {/* available */}

          <div className="flex items-center gap-3 mb-10">

            <div className="relative w-[10px] h-[10px]">

              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />

              <div className="absolute inset-[2px] rounded-full bg-green-400" />

            </div>

            <p className="text-[11px] uppercase tracking-[0.45em] text-gray-500 font-mono">

              Available for opportunities

            </p>

          </div>

          {/* role */}

          <p className="text-[#c9a96e] uppercase tracking-[0.45em] text-[11px] mb-8 font-mono">

            Full-Stack Developer & AI/ML Engineer

          </p>

          {/* heading */}

          <h1
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

          </h1>

          {/* description */}

          <p className="mt-12 max-w-[700px] text-[20px] leading-[2.2rem] text-gray-400">

            CS Engineering student at Chandigarh University,
            specializing in AI & ML.

            I build scalable web applications and intelligent systems —
            from cybersecurity platforms to modern AI solutions.

          </p>

          {/* buttons */}

          <div className="flex flex-col sm:flex-row gap-5 mt-14">

            <button className="bg-[#c9a96e] text-black px-10 py-5 uppercase tracking-[0.3em] text-[11px] font-mono border border-[#c9a96e] hover:bg-transparent hover:text-[#c9a96e] transition-all duration-300">

              View My Work →

            </button>

            <button className="border border-[#2a2a2a] px-10 py-5 uppercase tracking-[0.3em] text-[11px] font-mono hover:border-[#c9a96e] hover:text-[#c9a96e] transition-all duration-300">

              Get In Touch

            </button>

          </div>

          {/* stats */}

          <div className="flex flex-col sm:flex-row gap-10 sm:gap-28 mt-24">

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

          </div>

        </motion.div>

      </div>

    </section>

  );
}