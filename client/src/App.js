import { useState } from "react";
import Login from './components/Login';
import StudentDashboard from './components/StudentDashboard';
import SubmitComplaint from './components/SubmitComplaint';
import MyTickets from './components/MyTickets';
import RoomInfo from './components/RoomInfo';
import WardenDashboard from './components/WardenDashboard';
import ManageTickets from './components/ManageTickets';
import AdminDashboard from './components/AdminDashboard';
import ManageRooms from './components/ManageRooms';

function App() {
  const [role, setRole] = useState(null);
  const [page, setPage] = useState("dashboard");

  if (!role) return <Login onLogin={(r) => { setRole(r); setPage("dashboard"); }} />;
  if (page === "complaint")    return <SubmitComplaint onBack={() => setPage("dashboard")} />;
  if (page === "tickets")      return <MyTickets onBack={() => setPage("dashboard")} />;
  if (page === "room")         return <RoomInfo onBack={() => setPage("dashboard")} />;
  if (page === "managerooms")  return <ManageRooms onBack={() => setPage("dashboard")} />;
  if (page === "managetickets") return <ManageTickets onBack={() => setPage("dashboard")} />;
  if (role === "student") return <StudentDashboard onNavigate={(p) => setPage(p)} />;
  if (role === "warden")  return <WardenDashboard onNavigate={(p) => setPage(p)} />;
  if (role === "admin")   return <AdminDashboard onNavigate={(p) => setPage(p)} />;

  return <Login onLogin={(r) => setRole(r)} />;
}

export default App;