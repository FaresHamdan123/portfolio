// Global background effects: animated grid, soft amber/olive glows, film grain.
// Pure decoration. Always positioned absolutely behind everything.

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base vignette */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, rgba(232,184,106,0.05) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 80% 100%, rgba(91,107,58,0.06) 0%, transparent 70%), linear-gradient(180deg, #07070a 0%, #050507 100%)",
        }}
      />

      {/* Grid layer */}
      <div
        aria-hidden
        className="absolute inset-0 bg-grid mask-radial-soft opacity-70"
      />

      {/* Amber halo top-right */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 h-[40rem] w-[40rem] rounded-full animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(232,184,106,0.18) 0%, rgba(232,184,106,0) 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Olive halo bottom-left */}
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(91,107,58,0.18) 0%, rgba(91,107,58,0) 60%)",
          filter: "blur(50px)",
        }}
      />

      {/* Film grain overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        }}
      />
    </div>
  );
}
