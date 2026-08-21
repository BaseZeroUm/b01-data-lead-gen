export function LiquidBackdrop() {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div
        className="liquid-blob liquid-a"
        style={{
          top: "-15%",
          left: "-10%",
          width: "45vw",
          height: "45vw",
          background: "radial-gradient(circle, #47B6F3 0%, transparent 70%)",
          opacity: 0.22,
        }}
      />
      <div
        className="liquid-blob liquid-b"
        style={{
          bottom: "-20%",
          right: "-8%",
          width: "40vw",
          height: "40vw",
          background: "radial-gradient(circle, #8ACDBA 0%, transparent 70%)",
          opacity: 0.18,
        }}
      />
      <div
        className="liquid-blob liquid-c"
        style={{
          top: "25%",
          right: "25%",
          width: "30vw",
          height: "30vw",
          background: "radial-gradient(circle, #47B6F3 0%, transparent 70%)",
          opacity: 0.15,
        }}
      />
    </div>
  );
}
