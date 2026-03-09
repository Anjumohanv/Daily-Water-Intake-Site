import { useState } from "react";
import Navbar from "../components/Navbar";

export default function AddWater() {

  const [amount, setAmount] = useState("");

  const handleAddWater = () => {

    if(!amount){
      alert("Please enter water quantity");
      return;
    }

    const today = new Date().toLocaleDateString();

    let waterData = JSON.parse(localStorage.getItem("waterData")) || [];

    const alreadyAdded = waterData.find(item => item.date === today);

    if(alreadyAdded){
      alert("You already added water intake today!");
      return;
    }

    const newEntry = {
      amount: amount,
      date: today,
      time: new Date().toLocaleTimeString()
    };

    waterData.push(newEntry);

    localStorage.setItem("waterData", JSON.stringify(waterData));

    alert("Water intake added successfully!");

    setAmount("");
  };

  return (
    <div>

      <Navbar />

      <div style={{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"80vh",
        color:"white"
      }}>

        <div style={{
          background:"rgba(255,255,255,0.1)",
          backdropFilter:"blur(12px)",
          padding:"40px",
          borderRadius:"25px",
          textAlign:"center",
          width:"400px",
          boxShadow:"0 0 20px rgba(0,0,0,0.3)"
        }}>

          <h2>💧 Add Daily Water Intake</h2>

          <p>Enter your water quantity in milliliters (ml)</p>

          <input
            type="number"
            placeholder="Water amount (ml)"
            value={amount}
            onChange={(e)=>setAmount(e.target.value)}
            style={{
              width:"100%",
              padding:"12px",
              borderRadius:"8px",
              border:"none",
              marginTop:"15px"
            }}
          />

          <br/><br/>

          <button
            onClick={handleAddWater}
            style={{
              padding:"12px 25px",
              borderRadius:"8px",
              border:"none",
              background:"#00c6ff",
              color:"white",
              cursor:"pointer",
              fontWeight:"bold"
            }}
          >
            Add Water
          </button>

        </div>

      </div>
    </div>
  );
}