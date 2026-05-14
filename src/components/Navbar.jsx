import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

export default function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );
  
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 20;
    if (isScrolled !== scrolled) {
      setIsScrolled(scrolled);
    }
  });

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);


  return (

    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "h-[60px] bg-black/80 backdrop-blur-md border-b border-[#1a1a1a]" 
          : "h-[70px] bg-black/40 backdrop-blur-md border-b border-[#1a1a1a]"
      }`}
    >

      {/* Progress Bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-[#c9a96e] z-50 origin-left"
        style={{ width: "100%", scaleX: scrollYProgress }}
      />

      <div className="h-full w-full px-[3vw] flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="w-9 h-9 rounded-full border border-[#c9a96e] overflow-hidden">

            <img
              src="/profile.png"
              alt="Dhruv Singh"
              className="w-full h-full object-cover"
            />

          </div>

          <p className="text-[#c9a96e] uppercase tracking-[0.35em] text-[11px] font-mono">

            Dhruv Singh

          </p>

        </div>

        <div className="flex items-center gap-4 md:gap-14">

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            href="https://github.com/Dhruv0105"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#c9a96e] h-[42px] px-4 md:px-8 text-[#c9a96e] uppercase tracking-[0.3em] text-[10px] font-mono hover:bg-[#c9a96e] hover:text-black transition-all duration-300 flex items-center justify-center"
          >

            Github ↗

          </motion.a>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="border border-[#c9a96e] h-[42px] px-4 text-[#c9a96e] uppercase tracking-[0.2em] text-[10px] font-mono hover:bg-[#c9a96e] hover:text-black transition-all duration-300 flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? "DARK" : "LIGHT"}
          </motion.button>

        </div>

      </div>

    </nav>

  );
}