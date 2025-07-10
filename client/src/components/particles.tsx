export default function Particles() {
  const particles = [
    { shape: "star", color: "bg-yellow-400", animation: "animate-spin-slow" },
    { shape: "circle", color: "bg-blue-400", animation: "animate-float" },
    { shape: "diamond", color: "bg-cyan-400", animation: "animate-pulse" },
    { shape: "triangle", color: "bg-green-400", animation: "animate-bounce-slow" },
    { shape: "sun", color: "bg-orange-400", animation: "animate-rotate" },
    { shape: "blob", color: "bg-pink-400", animation: "animate-float" },
    { shape: "hexagon", color: "bg-purple-400", animation: "animate-spin-slow" },
    { shape: "ring", color: "border border-indigo-400", animation: "animate-bounce" },
    { shape: "sparkle", color: "bg-white", animation: "animate-flicker" },
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className={`absolute ${particle.color} ${particle.animation} ${shapeClass(
            particle.shape
          )}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            opacity: 0.7,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

function shapeClass(shape: string) {
  switch (shape) {
    case "circle":
      return "rounded-full";
    case "star":
      return "clip-star";
    case "diamond":
      return "rotate-45";
    case "triangle":
      return "clip-triangle";
    case "sun":
      return "clip-sun";
    case "blob":
      return "clip-blob";
    case "hexagon":
      return "clip-hexagon";
    case "ring":
      return "rounded-full bg-transparent";
    case "sparkle":
      return "clip-sparkle";
    default:
      return "";
  }
}export default function Particles() {
  const particles = [
    { shape: "star", color: "bg-yellow-400", animation: "animate-spin-slow" },
    { shape: "circle", color: "bg-blue-400", animation: "animate-float" },
    { shape: "diamond", color: "bg-cyan-400", animation: "animate-pulse" },
    { shape: "triangle", color: "bg-green-400", animation: "animate-bounce-slow" },
    { shape: "sun", color: "bg-orange-400", animation: "animate-rotate" },
    { shape: "blob", color: "bg-pink-400", animation: "animate-float" },
    { shape: "hexagon", color: "bg-purple-400", animation: "animate-spin-slow" },
    { shape: "ring", color: "border border-indigo-400", animation: "animate-bounce" },
    { shape: "sparkle", color: "bg-white", animation: "animate-flicker" },
  ];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle, i) => (
        <div
          key={i}
          className={`absolute ${particle.color} ${particle.animation} ${shapeClass(
            particle.shape
          )}`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "20px",
            height: "20px",
            transform: "translate(-50%, -50%)",
            opacity: 0.7,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}

// Tailwind-like shape classes
function shapeClass(shape: string) {
  switch (shape) {
    case "circle":
      return "rounded-full";
    case "star":
      return "clip-star";
    case "diamond":
      return "rotate-45";
    case "triangle":
      return "clip-triangle";
    case "sun":
      return "clip-sun";
    case "blob":
      return "clip-blob";
    case "hexagon":
      return "clip-hexagon";
    case "ring":
      return "rounded-full bg-transparent";
    case "sparkle":
      return "clip-sparkle";
    default:
      return "";
  }
}