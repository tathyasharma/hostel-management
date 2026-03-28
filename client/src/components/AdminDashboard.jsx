import { useState } from "react";

const AdminDashboard = () => {
  const [active, setActive] = useState("dashboard");
  const [hovered, setHovered] = useState(null);

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  const recentTickets = [
    { id: "TKT-001", room: "A-101", student: "Tathya Sharma",  title: "Fan not working",       status: "Pending"     },
    { id: "TKT-002", room: "B-203", student: "Arjun Mehta",    title: "Broken chair",           status: "In Progress" },
    { id: "TKT-003", room: "C-305", student: "Priya Singh",    title: "Cleanliness issue",      status: "Resolved"    },
    { id: "TKT-004", room: "A-104", student: "Rohan Verma",    title: "Light bulb replacement", status: "Pending"     },
  ];

  const statusStyle = {
    Pending:       { background: "#fff8e6", color: "#a16207", border: "1px solid #fde68a" },
    "In Progress": { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
    Resolved:      { background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" },
  };

  const navLinks = [
    { id: "dashboard",  label: "Dashboard",    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "rooms",      label: "Manage Rooms", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "tickets",    label: "All Tickets",  icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", badge: 4 },
    { id: "users",      label: "Manage Users", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
    { id: "profile",    label: "Profile",      icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ];

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#f8f9fa", color: "#111", overflow: "hidden" }}>

      {/* Sidebar */}
      <aside style={{ width: 240, background: "#fff", borderRight: "1px solid #e9ecef", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #e9ecef", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#111", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>HostelMS</div>
            <div style={{ fontSize: 11, color: "#868e96" }}>Admin Portal</div>
          </div>
        </div>
        <nav style={{ padding: "12px 10px", flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#adb5bd", letterSpacing: 0.8, textTransform: "uppercase", padding: "0 10px", marginBottom: 6 }}>Menu</div>
          {navLinks.map(link => {
            const isActive = active === link.id;
            const isHov = hovered === link.id && !isActive;
            return (
              <button key={link.id} onClick={() => setActive(link.id)}
                onMouseEnter={() => setHovered(link.id)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: "flex", alignItems: "center", gap: 10, width: "100%", padding: "8px 10px", borderRadius: 7, border: "none", cursor: "pointer", background: isActive ? "#111" : isHov ? "#f1f3f5" : "transparent", color: isActive ? "#fff" : "#495057", fontSize: 13.5, fontWeight: isActive ? 500 : 400, marginBottom: 2, textAlign: "left", fontFamily: "inherit", transition: "background 0.1s" }}>
                <Icon path={link.icon} size={16} color={isActive ? "#fff" : "#868e96"} />
                <span style={{ flex: 1 }}>{link.label}</span>
                {link.badge && (
                  <span style={{ fontSize: 11, fontWeight: 600, background: isActive ? "rgba(255,255,255,0.2)" : "#ff6b6b", color: "#fff", padding: "1px 7px", borderRadius: 10 }}>
                    {link.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
        <div style={{ padding: "14px 16px", borderTop: "1px solid #e9ecef", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#111", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 600, color: "#fff", flexShrink: 0 }}>AD</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500 }}>Admin</div>
            <div style={{ fontSize: 11, color: "#868e96" }}>System Administrator</div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Admin Dashboard</span>
            <span style={{ fontSize: 13, color: "#adb5bd", marginLeft: 8 }}>/ Overview</span>
          </div>
          <span style={{ fontSize: 12, color: "#adb5bd", fontFamily: "monospace" }}>Sat, 14 Mar 2026</span>
        </header>

        <div style={{ flex: 1, overflowY: "auto", padding: 28 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.5, margin: 0 }}>System Overview</h1>
            <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>Hostel Management System · All Blocks</p>
          </div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14, marginBottom: 24 }}>
            {[
              { label: "Total Students", value: "120", iconBg: "#f8f9fa", iconColor: "#adb5bd", path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { label: "Total Rooms",    value: "048", iconBg: "#eff6ff", iconColor: "#1d4ed8", path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { label: "Open Tickets",  value: "007", iconBg: "#fff8e6", iconColor: "#d97706", path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Resolved",      value: "053", iconBg: "#f0fdf4", iconColor: "#16a34a", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            ].map(s => (
              <div key={s.label} style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 10, padding: "16px 18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12, color: "#868e96", fontWeight: 500, marginBottom: 6 }}>{s.label}</div>
                  <div style={{ fontSize: 28, fontWeight: 700, color: "#111", letterSpacing: -1, fontFamily: "monospace", lineHeight: 1 }}>{s.value}</div>
                </div>
                <div style={{ width: 40, height: 40, background: s.iconBg, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon path={s.path} size={18} color={s.iconColor} />
                </div>
              </div>
            ))}
          </div>

          {/* Recent Tickets */}
          <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ padding: "14px 20px", borderBottom: "1px solid #e9ecef", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: 13.5, fontWeight: 600 }}>Recent Tickets — All Blocks</span>
              <button style={{ fontSize: 12, color: "#228be6", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>View all →</button>
            </div>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ background: "#f8f9fa" }}>
                  {["ID", "Room", "Student", "Issue", "Status"].map(h => (
                    <th key={h} style={{ padding: "9px 16px", fontSize: 11, fontWeight: 600, color: "#adb5bd", textAlign: "left", letterSpacing: 0.5, textTransform: "uppercase", borderBottom: "1px solid #e9ecef" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {recentTickets.map((t, i) => (
                  <tr key={t.id} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i === recentTickets.length - 1 ? "none" : "1px solid #f1f3f5" }}>
                    <td style={{ padding: "11px 16px", fontSize: 12, color: "#228be6", fontFamily: "monospace", fontWeight: 500 }}>{t.id}</td>
                    <td style={{ padding: "11px 16px", fontSize: 12, fontFamily: "monospace", fontWeight: 500, color: "#111" }}>{t.room}</td>
                    <td style={{ padding: "11px 16px", fontSize: 13, color: "#212529" }}>{t.student}</td>
                    <td style={{ padding: "11px 16px", fontSize: 13, color: "#212529", fontWeight: 500 }}>{t.title}</td>
                    <td style={{ padding: "11px 16px" }}>
                      <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 6, ...statusStyle[t.status] }}>{t.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;