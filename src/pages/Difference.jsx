import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Difference() {

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [result, setResult] = useState("");

  const calculateDifference = () => {

    if(!startDate || !endDate){
      alert("Please select both dates");
      return;
    }

    const waterData = JSON.parse(localStorage.getItem("waterData")) || [];

    const start = new Date(startDate).toLocaleDateString();
    const end = new Date(endDate).toLocaleDateString();

    let startTotal = 0;
    let endTotal = 0;

    waterData.forEach(item => {

      if(item.date === start){
        startTotal += Number(item.amount);
      }

      if(item.date === end){
        endTotal += Number(item.amount);
      }

    });

    setResult(endTotal - startTotal);
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

          <h2>📊 Water Intake Difference</h2>

          <br/>

          Start Date
          <br/>
          <input
            type="date"
            onChange={(e)=>setStartDate(e.target.value)}
            style={{padding:"8px", marginTop:"5px"}}
          />

          <br/><br/>

          End Date
          <br/>
          <input
            type="date"
            onChange={(e)=>setEndDate(e.target.value)}
            style={{padding:"8px", marginTop:"5px"}}
          />

          <br/><br/>

          <button
            onClick={calculateDifference}
            style={{
              padding:"10px 20px",
              background:"#00c6ff",
              border:"none",
              borderRadius:"8px",
              color:"white",
              cursor:"pointer"
            }}
          >
            Calculate Difference
          </button>

          <br/><br/>

          {result !== "" && (
            <h3>Difference = {result} ml</h3>
          )}

        </div>
      </div>
    </div>
  );
}