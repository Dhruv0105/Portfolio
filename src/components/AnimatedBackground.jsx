export default function AnimatedBackground() {
  return (
    <>
      <div className="fixed inset-0 opacity-[0.03] z-0">

        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#c9a96e 1px, transparent 1px),
              linear-gradient(90deg, #c9a96e 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

      </div>

      <div className="absolute top-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-[#c9a96e10] blur-3xl" />
    </>
  );
}