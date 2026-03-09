import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (

    <nav className="navbar">

      <h2 className="logo">Water Tracker</h2>

      <div className="nav-links">

        <Link to="/home">Home</Link>
        <Link to="/add-water">Add Water</Link>
        <Link to="/history">History</Link>
        <Link to="/difference">Difference</Link>

        <button onClick={handleLogout}>Logout</button>

      </div>

    </nav>

  );
}