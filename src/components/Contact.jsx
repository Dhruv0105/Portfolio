import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [buttonText, setButtonText] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const form = e.target;

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setButtonText("Sent Successfully!");
      form.reset();

      setTimeout(() => {
        setButtonText("Send Message");
      }, 3000);
    } catch (error) {
      console.error("Email send error:", error);

      setButtonText("Error Sending");

      setTimeout(() => {
        setButtonText("Send Message");
      }, 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-32 px-[6vw]"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[#c9a96e] text-[10px] tracking-[0.4em] uppercase font-mono">
            05
          </span>

          <div className="w-14 h-px bg-[#2a2a2a]" />

          <span className="text-gray-500 text-[10px] tracking-[0.4em] uppercase font-mono">
            Contact
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className="mb-10"
              style={{
                fontFamily: "Cormorant Garamond",
                fontSize: "clamp(2.5rem,6vw,5rem)",
                fontWeight: 300,
                lineHeight: 1,
              }}
            >
              Let's build{" "}
              <span className="italic text-[#c9a96e]">
                something exceptional
              </span>
            </h2>

            <p className="text-gray-500 leading-8 max-w-xl mb-12">
              Whether it's a collaboration, internship,
              cybersecurity research, AI/ML systems,
              full-stack engineering projects,
              or just to say "Hello" — my inbox is always open.

              <br />
              <br />

              Let's connect.
            </p>

            <div className="space-y-8">

              <div>
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono mb-3">
                  Email
                </p>

                <a
                  href="mailto:hello.dhruv05@gmail.com"
                  className="text-gray-400 hover:text-[#c9a96e] transition-all duration-300"
                >
                  hello.dhruv05@gmail.com
                </a>
              </div>

              <div>
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono mb-3">
                  Location
                </p>

                <p className="text-gray-400">
                  India
                </p>
              </div>

              <div>
                <p className="text-[#c9a96e] text-[10px] uppercase tracking-[0.35em] font-mono mb-3">
                  Availability
                </p>

                <p className="text-green-400">
                  Open to opportunities
                </p>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="w-full bg-[#101010] border border-[#1c1c1c] px-6 py-5 outline-none text-white focus:border-[#c9a96e55] transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="w-full bg-[#101010] border border-[#1c1c1c] px-6 py-5 outline-none text-white focus:border-[#c9a96e55] transition-all duration-300"
              />

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Your Message"
                className="w-full bg-[#101010] border border-[#1c1c1c] px-6 py-5 outline-none text-white resize-none focus:border-[#c9a96e55] transition-all duration-300"
              />

              <button
                type="submit"
                disabled={buttonText !== "Send Message"}
                className="w-full bg-[#c9a96e] text-black py-5 uppercase tracking-[0.3em] text-[10px] font-mono hover:bg-transparent hover:text-[#c9a96e] border border-[#c9a96e] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {buttonText}
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}