import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const [submittedValue, setSubmittedValue] = useState([]);

  const handleDisplayInput = () => {
    setSubmittedValue([...submittedValue, input]);

    setInput("");
    console.log("=>", submittedValue);
  };
  return (
    <div>
      <input
        className=" border "
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button className="border" onClick={handleDisplayInput}>
        submit
      </button>

      <ul>
        {submittedValue.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
