import { useState } from "react";

const SubmitComplaint = ({ onBack }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Electrical");
  const [priority, setPriority] = useState("Medium");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const Icon = ({ path, size = 18, color = "currentColor" }) => (
    <svg width={size} height={size} fill="none" stroke={color} strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );

  if (submitted) return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ width: 56, height: 56, background: "#f0fdf4", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
          <Icon path="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" size={28} color="#16a34a" />
        </div>
        <div style={{ fontSize: 18, fontWeight: 600, color: "#111", marginBottom: 8 }}>Complaint Submitted!</div>
        <div style={{ fontSize: 13.5, color: "#868e96", marginBottom: 24 }}>Your ticket has been created successfully.</div>
        <button onClick={() => { setSubmitted(false); setTitle(""); setDescription(""); }}
          style={{ padding: "10px 24px", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 13.5, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}>
          Submit Another
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", background: "#f8f9fa", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>

      {/* Topbar */}
      <header style={{ height: 58, background: "#fff", borderBottom: "1px solid #e9ecef", padding: "0 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 6, color: "#868e96", fontSize: 13, fontFamily: "inherit" }}>
            <Icon path="M15 19l-7-7 7-7" size={16} color="#868e96" /> Back
          </button>
          <span style={{ color: "#e9ecef" }}>|</span>
          <span style={{ fontSize: 14, fontWeight: 600, color: "#111" }}>Submit Complaint</span>
        </div>
        <div style={{ fontSize: 13, color: "#868e96" }}>Tathya Sharma · A-101</div>
      </header>

      {/* Content */}
      <div style={{ maxWidth: 620, margin: "32px auto", padding: "0 20px" }}>
        <div style={{ marginBottom: 24 }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: "#111", margin: 0, letterSpacing: -0.5 }}>New Complaint</h1>
          <p style={{ fontSize: 13.5, color: "#868e96", marginTop: 4, marginBottom: 0 }}>Fill in the details below to submit a maintenance request.</p>
        </div>

        <div style={{ background: "#fff", border: "1px solid #e9ecef", borderRadius: 14, padding: 28, display: "flex", flexDirection: "column", gap: 20 }}>

          {/* Title */}
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#495057", display: "block", marginBottom: 6 }}>Complaint Title *</label>
            <input type="text" placeholder="e.g. Fan not working in room"
              value={title} onChange={e => setTitle(e.target.value)}
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 13.5, color: "#111", outline: "none", fontFamily: "inherit", boxSizing: "border-box" }} />
          </div>

          {/* Category + Priority */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#495057", display: "block", marginBottom: 6 }}>Category *</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 13.5, color: "#111", outline: "none", fontFamily: "inherit", background: "#fff", boxSizing: "border-box" }}>
                <option>Electrical</option>
                <option>Furniture</option>
                <option>Cleanliness</option>
              </select>
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: "#495057", display: "block", marginBottom: 6 }}>Priority *</label>
              <select value={priority} onChange={e => setPriority(e.target.value)}
                style={{ width: "100%", padding: "10px 14px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 13.5, color: "#111", outline: "none", fontFamily: "inherit", background: "#fff", boxSizing: "border-box" }}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: "#495057", display: "block", marginBottom: 6 }}>Description *</label>
            <textarea placeholder="Describe the issue in detail..."
              value={description} onChange={e => setDescription(e.target.value)}
              rows={5}
              style={{ width: "100%", padding: "10px 14px", border: "1px solid #e9ecef", borderRadius: 8, fontSize: 13.5, color: "#111", outline: "none", fontFamily: "inherit", resize: "vertical", boxSizing: "border-box" }} />
          </div>

          {/* Room Info */}
          <div style={{ background: "#f8f9fa", border: "1px solid #e9ecef", borderRadius: 8, padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <Icon path="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" size={16} color="#868e96" />
            <div style={{ fontSize: 12.5, color: "#495057" }}>Complaint will be submitted for <strong>Room A-101, Block A</strong></div>
          </div>

          {/* Submit */}
          <button
            onClick={() => { if (title && description) setSubmitted(true); }}
            style={{ padding: "12px 0", background: "#111", color: "#fff", border: "none", borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: "pointer", fontFamily: "inherit" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            Submit Complaint
          </button>

        </div>
      </div>
    </div>
  );
};

export default SubmitComplaint;