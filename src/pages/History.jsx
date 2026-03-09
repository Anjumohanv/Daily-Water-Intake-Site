import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

export default function History() {

  const [waterData, setWaterData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    const data = JSON.parse(localStorage.getItem("waterData")) || [];
    setWaterData(data);
  };

  const deleteEntry = (index) => {

    const updated = [...waterData];
    updated.splice(index, 1);

    localStorage.setItem("waterData", JSON.stringify(updated));

    setWaterData(updated);
  };

  // Pagination Logic
  const totalPages = Math.ceil(waterData.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = waterData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>

      <Navbar />

      <div style={{
        textAlign:"center",
        marginTop:"80px",
        color:"white"
      }}>

        <div style={{
          background:"rgba(255,255,255,0.1)",
          backdropFilter:"blur(12px)",
          padding:"30px",
          borderRadius:"25px",
          width:"700px",
          margin:"auto",
          boxShadow:"0 0 20px rgba(0,0,0,0.3)"
        }}>

          <h2>💧 Water Intake History</h2>

          {waterData.length === 0 ? (
            <p>No records found</p>
          ) : (

            <>
              <table border="1" style={{
                width:"100%",
                marginTop:"20px",
                color:"white",
                borderCollapse:"collapse"
              }}>

                <thead>
                  <tr>
                    <th style={{padding:"10px"}}>Amount (ml)</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Action</th>
                  </tr>
                </thead>

                <tbody>
                  {currentData.map((item, index) => (
                    <tr key={index}>
                      <td style={{padding:"8px"}}>{item.amount}</td>
                      <td>{item.date}</td>
                      <td>{item.time}</td>

                      <td>
                        <button
                          onClick={() => deleteEntry(startIndex + index)}
                          style={{
                            padding:"5px 10px",
                            background:"red",
                            color:"white",
                            border:"none",
                            borderRadius:"5px",
                            cursor:"pointer"
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>

              </table>

              <br/>

              {/* Pagination Buttons */}

              <button
                disabled={currentPage === 1}
                onClick={()=>setCurrentPage(currentPage - 1)}
                style={{margin:"5px"}}
              >
                Previous
              </button>

              <span style={{color:"white", margin:"10px"}}>
                Page {currentPage} of {totalPages}
              </span>

              <button
                disabled={currentPage === totalPages}
                onClick={()=>setCurrentPage(currentPage + 1)}
                style={{margin:"5px"}}
              >
                Next
              </button>

            </>
          )}

        </div>
      </div>
    </div>
  );
}