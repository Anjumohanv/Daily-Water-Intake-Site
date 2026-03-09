import "../styles/login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleSignup = () => {

    if(password !== confirm){
      alert("Passwords do not match");
      return;
    }

    const user = {
      username: username,
      password: password
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup successful!");

    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Signup</h2>

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

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e)=>setConfirm(e.target.value)}
        />

        <button onClick={handleSignup}>Signup</button>

      </div>
    </div>
  );
}