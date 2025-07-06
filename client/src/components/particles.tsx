export default function Particles() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {Array.from({ length: 9 }, (_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
}
