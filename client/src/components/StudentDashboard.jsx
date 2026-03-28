import { useState } from "react";

const StudentDashboard = ({ onNavigate }) => {
  const [active, setActive] = useState("dashboard");
  const [hovered, setHovered] = useState(null);

  const tickets = [
    { id: "TKT-001", title: "Fan not working in room", category: "Electrical", date: "Mar 11, 2026", status: "Pending" },
    { id: "TKT-002", title: "Broken chair near desk", category: "Furniture", date: "Mar 8, 2026", status: "In Progress" },
    { id: "TKT-003", title: "Bathroom cleanliness issue", category: "Cleanliness", date: "Mar 2, 2026", status: "Resolved" },
    { id: "TKT-004", title: "Light bulb replacement needed", category: "Electrical", date: "Feb 28, 2026", status: "Resolved" },
  ];

  const statusStyle = {
    Pending:       { background: "#fff8e6", color: "#a16207", border: "1px solid #fde68a" },
    "In Progress": { background: "#eff6ff", color: "#1d4ed8", border: "1px solid #bfdbfe" },
    Resolved:      { background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" },
  };

  const navLinks = [
    { id: "dashboard", label: "Dashboard",     icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "tickets",   label: "My Tickets",    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", badge: 2 },
    { id: "complaint", label: "New Complaint", icon: "M12 4v16m8-8H4" },
    { id: "room",      label: "Room Info",     icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { id: "profile",   label: "Profile",       icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
  ];

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  return (
    <div style={{ display: "flex", height: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", background: "#f8f9fa", color: "#111", overflow: "hidden" }}>
      <aside style={{ width: 240, background: "#fff", borderRight: "1px solid #e9ecef", display: "flex", flexDirection: "column", flexShrink: 0 }}>
        <div style={{ padding: "20px 20px 16px", borderBottom: "1px solid #e9ecef", display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 34, height: 34, background: "#111", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon path="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" size={16} color="#fff" />
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: -0.2 }}>HostelMS</div>
            <div style={{ fontSize: 11, color: "#868e96" }}>Student Portal</div>
          </div>
        </div>
        <nav style={{ padding: "12px 10px", flex: 1 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#adb5bd", letterSpacing: 0.8, textTransform: "uppercase", padding: "0 10px", marginBottom: 6 }}>Menu</div>
          {navLinks.map(link => {
            const isActive = active === link.id;
            const isHov = hovered === link.id && !isActive;
            return (
              <button key={link.id}
                onClick={() => {
                  setActive(link.id);
                  if (link.id === "tickets") onNavigate("tickets");
                  if (link.id === "complaint") onNavigate("complaint");
                  if (link.id === "room") onNavigate("room");
                }}
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
          <div style={{ width: 34, height: 34, borderRadius: "50%", background: "#e9ecef", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#495057", flexShrink: 0 }}>TS</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Tathya Sharma</div>
            <div style={{ fontSize: 11, color: "#868e96" }}>SE23UCSE173</div>
          </div>
          <Icon path="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" size={15} color="#adb5bd" />
        </div>
      </aside>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between", flexShrink: 0 }}>
          <div>
            <span style={{ fontSize: 14, fontWeight: 600 }}>Dashboard</span>
            <span style={{ fontSize: 13, color: "#adb5bd", marginLeft: 8 }}>/ Overview</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 12, color: "#adb5bd", fontFamily: "monospace" }}>Fri, 13 Mar 2026</span>
            <div style={{ position: "relative" }}>
              <button style={{ width: 34, height: 34, border: "1px solid #e9ecef", borderRadius: 8, background: "#fff", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Icon path="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" size={16} color="#868e96" />
              </button>
              <span style={{ position: "absolute", top: 7, right: 7, width: 7, height: 7, background: "#ff6b6b", borderRadius: "50%", border: "1.5px solid #fff" }} />
            </div>
          </div>
        </header>
        <div style={{ flex: 1, overflowY: "auto", padding: 28 }}>
          <div style={{ marginBottom: 24 }}>
            <h1 style={{ fontSize: 20, fontWeight: 600, letterSpacing: -0.5, margin: 0 }}>Good afternoon, Tathya</h1>
            <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>Here's a summary of your hostel account.</p>
          </div>
          <div style={{ background: "#111", borderRadius: 12, padding: "22px 26px", marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: 0.9, marginBottom: 6 }}>Assigned Room</div>
              <div style={{ fontSize: 32, fontWeight: 700, color: "#fff", letterSpacing: -1.5, fontFamily: "monospace", lineHeight: 1 }}>A-101</div>
              <div style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Block A &nbsp;·&nbsp; Floor 1 &nbsp;·&nbsp; 3-Sharing</div>
            </div>
            <div style={{ display: "flex", gap: 32 }}>
              {[["Capacity","3"],["Occupied","3"],["Status","Full"]].map(([k,v]) => (
                <div key={k} style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: 0.7, marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: 18, fontWeight: 600, color: "#fff", fontFamily: "monospace" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14, marginBottom: 24 }}>
            {[
              { label: "Total Complaints", value: "5", iconBg: "#f8f9fa", iconColor: "#adb5bd", path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { label: "Pending",          value: "2", iconBg: "#fff8e6", iconColor: "#d97706", path: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" },
              { label: "Resolved",         value: "3", iconBg: "#f0fdf4", iconColor: "#16a34a", path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 350px", gap: 16 }}>
            <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
              <div style={{ padding: "14px 20px", borderBottom: "1px solid #e9ecef", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: 13.5, fontWeight: 600 }}>Recent Tickets</span>
                <button onClick={() => onNavigate("tickets")} style={{ fontSize: 12, color: "#228be6", background: "none", border: "none", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>View all →</button>
              </div>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ background: "#f8f9fa" }}>
                    {["ID","Title","Category","Date","Status"].map(h => (
                      <th key={h} style={{ padding: "9px 16px", fontSize: 11, fontWeight: 600, color: "#adb5bd", textAlign: "left", letterSpacing: 0.5, textTransform: "uppercase", borderBottom: "1px solid #e9ecef" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((t, i) => (
                    <tr key={t.id} style={{ background: i % 2 === 0 ? "#fff" : "#fafafa", borderBottom: i === tickets.length - 1 ? "none" : "1px solid #f1f3f5" }}>
                      <td style={{ padding: "11px 16px", fontSize: 12, color: "#228be6", fontFamily: "monospace", fontWeight: 500 }}>{t.id}</td>
                      <td style={{ padding: "11px 16px", fontSize: 13, color: "#212529", fontWeight: 500 }}>{t.title}</td>
                      <td style={{ padding: "11px 16px", fontSize: 12, color: "#868e96" }}>{t.category}</td>
                      <td style={{ padding: "11px 16px", fontSize: 12, color: "#868e96", fontFamily: "monospace" }}>{t.date}</td>
                      <td style={{ padding: "11px 16px" }}>
                        <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 6, ...statusStyle[t.status] }}>{t.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 12, overflow: "hidden" }}>
                <div style={{ padding: "14px 20px", borderBottom: "1px solid #e9ecef" }}>
                  <span style={{ fontSize: 13.5, fontWeight: 600 }}>Quick Actions</span>
                </div>
                <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { label: "Submit New Complaint", sub: "Report a room issue", path: "M12 4v16m8-8H4", page: "complaint" },
                    { label: "Track My Tickets",     sub: "2 active tickets",    path: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2", page: "tickets" },
                    { label: "Room Details",         sub: "Block A · Room 101",  path: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", page: "room" },
                  ].map((a, i) => (
                    <button key={i}
                      onClick={() => onNavigate(a.page)}
                      onMouseEnter={e => { e.currentTarget.style.background = "#111"; e.currentTarget.style.borderColor = "#111"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#f8f9fa"; e.currentTarget.style.borderColor = "#e9ecef"; }}
                      style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 12px", border: "1px solid #e9ecef", borderRadius: 8, background: "#f8f9fa", cursor: "pointer", textAlign: "left", width: "100%", fontFamily: "inherit", transition: "all 0.12s" }}>
                      <div style={{ width: 32, height: 32, background: "#e9ecef", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <Icon path={a.path} size={14} color="#495057" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: "#212529" }}>{a.label}</div>
                        <div style={{ fontSize: 11, color: "#868e96", marginTop: 1 }}>{a.sub}</div>
                      </div>
                      <Icon path="M9 5l7 7-7 7" size={13} color="#ced4da" />
                    </button>
                  ))}
                </div>
              </div>
              <div style={{ background: "#eff6ff", border: "1px solid #bfdbfe", borderRadius: 10, padding: "14px 16px" }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 6 }}>Notice</div>
                <div style={{ fontSize: 12.5, color: "#1e40af", lineHeight: 1.6 }}>
                  Water supply maintenance on <strong>15 Mar 2026</strong> from 9AM – 1PM.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;