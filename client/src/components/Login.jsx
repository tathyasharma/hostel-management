<button
  onClick={async () => {
    const res = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: "Test User",
        email: "abc@mahindra.edu",
        password: "1234",
        role: "warden"
      })
    });

    const data = await res.json();
    alert(data.message || JSON.stringify(data));
  }}
  style={{
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    background: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer"
  }}
>
  Create Test User
</button>