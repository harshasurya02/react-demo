// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import { Berbin } from "../components/berbin";
function App() {
  // const [count, setCount] = useState(0);
  const berbinHandler = () => {
    alert("Thevudiya Berbin.Hence Proved!!!");
  };

  const data = [
    "berbin oru thevudiya",
    "berbin oru kevalamana thevudiya",
    "dhilipan oru pombala",
  ];

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h1>Hello!!</h1>
          {data.map((res, index) => (
            <div key={index}>{res}</div>
          ))}
          <button onClick={berbinHandler}>Oombu da berbin</button>
        </div>
      </div>
    </>
  );
}

export default App;
