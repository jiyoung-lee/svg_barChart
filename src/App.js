import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleBar from "./components/barChart";

const max = 300;

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    genList();
  }, []);

  const genList = () => {
    const list = [];
    for (let i = 0; i < 5; i++) {
      list[i] = Math.random() * 101;
    }
    setList(list);
  };
  return (
    <div className="container">
      <div style={{ display: "flex" }}>
        {list.map(e => {
          const y = max - (max * e) / 100;
          return (
            <SingleBar
              key={e}
              width="60px"
              height="300px"
              color="#ea1"
              percentage={`${Number(e).toFixed(2)} %`}
              data={`M 0 ${max} L 0  ${y} L 50 ${y} L 50 ${max} Z`}
            />
          );
        })}
      </div>
      <button onClick={genList}>Generate</button>
    </div>
  );
}

export default App;
