import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>

      <Navbar />

      <div style={{
        textAlign:"center",
        marginTop:"150px",
        color:"white",
        padding:"20px"
      }}>

        <h1>Daily Water Intake Tracker 💧</h1>

        <p style={{fontSize:"18px"}}>
          Stay hydrated, stay healthy. Track your daily water intake and care for your body.Drink water, feel fresh, live better ❤️
        </p>

    

      </div>

    </div>
  );
}