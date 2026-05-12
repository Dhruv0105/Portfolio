export default function Footer() {

  return (

    <footer className="relative pt-24 pb-10 px-[6vw] overflow-hidden">

      <div className="max-w-[1400px] mx-auto">

        {/* top border */}

        <div className="border-t border-[#1a1a1a] pt-10">

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">

            {/* left */}

            <div className="flex items-center gap-5">

              <div className="w-14 h-14 rounded-full border border-[#c9a96e] overflow-hidden bg-[#111]">

                <img
                  src="/profile.png"
                  alt="profile"
                  className="w-full h-full object-cover"
                />

              </div>

              <div>

                <h3
                  className="text-[#c9a96e]"
                  style={{
                    fontFamily: "Cormorant Garamond",
                    fontSize: "2rem",
                    lineHeight: 1,
                  }}
                >

                  Dhruv Singh

                </h3>

                <p className="text-[10px] uppercase tracking-[0.35em] text-gray-500 font-mono mt-2">

                  Full-Stack & AI/ML Developer

                </p>

              </div>

            </div>

            {/* center links */}

            <div className="flex flex-wrap justify-center gap-10">

              {[
                { name: "Github", url: "https://github.com/Dhruv0105" },
                { name: "LinkedIn", url: "https://www.linkedin.com/in/dhruv-singh-46b7a9334/" },
                { name: "Email", url: "mailto:hello.dhruv05@gmail.com" },
                { name: "Phone", url: "tel:+918540922027" },
              ].map((item) => (

                <a
                  key={item.name}
                  href={item.url}
                  target={item.name === "Github" || item.name === "LinkedIn" ? "_blank" : undefined}
                  rel={item.name === "Github" || item.name === "LinkedIn" ? "noopener noreferrer" : undefined}
                  className="text-[10px] uppercase tracking-[0.35em] text-gray-500 hover:text-[#c9a96e] transition-all duration-300 font-mono"
                >

                  {item.name}

                </a>

              ))}

            </div>

            {/* right */}

            <p className="text-[10px] uppercase tracking-[0.35em] text-gray-700 font-mono">

              © 2026 · Chandigarh, India

            </p>

          </div>

          {/* bottom */}

          <div className="border-t border-[#1a1a1a] mt-10 pt-10 flex justify-center">

            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-800 font-mono text-center">

              Designed & Built with React · Node.js · MongoDB 

            </p>

          </div>

        </div>

      </div>

    </footer>

  );
}