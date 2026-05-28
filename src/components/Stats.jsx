function Stats() {
  const stats = [
    { value: "120+", label: "models" },
    { value: "24h", label: "shipping" },
    { value: "4.9", label: "rating" },
  ];

  return (
    <div className="hero-stats" aria-label="Store statistics">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  );
}

export default Stats;