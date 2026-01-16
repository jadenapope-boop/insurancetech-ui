export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Overview of your agency performance</p>
      </header>

      {/* KPI GRID */}
      <section className="kpi-grid">
        <div className="glass-card kpi-hero">
          <span className="kpi-label">Weekly AP</span>
          <span className="kpi-value">$47,158</span>
          <span className="kpi-sub">▲ +12.4%</span>
        </div>

        <div className="glass-card">
          <span className="kpi-label">Commission</span>
          <span className="kpi-value">$18,420</span>
        </div>

        <div className="glass-card">
          <span className="kpi-label">Policies</span>
          <span className="kpi-value">128</span>
        </div>

        <div className="glass-card">
          <span className="kpi-label">Team Size</span>
          <span className="kpi-value">14</span>
        </div>
      </section>

      {/* SECOND ROW */}
      <section className="panel-grid">
        <div className="glass-panel">📈 Sales Trend (chart coming)</div>
        <div className="glass-panel">🗺️ Policy Map</div>
        <div className="glass-panel">⚡ Recent Activity</div>
      </section>
    </div>
  );
}
