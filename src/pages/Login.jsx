import "../styles/login.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = () => {

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if(!storedUser){
      alert("No user found. Please signup first.");
      return;
    }

    if(username === storedUser.username && password === storedUser.password){
      alert("Login successful!");
      navigate("/home");
    }else{
      alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">

        <h2>Water Tracker Login</h2>

        <input
          type="text"
          placeholder="Username"
          onChange={(e)=>setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p>
          Don't have an account? <Link to="/signup">Signup</Link>
        </p>

      </div>
    </div>
  );
}