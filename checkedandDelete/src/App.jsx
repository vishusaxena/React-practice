import { useState } from "react";
import "./App.css";

const initialData = [
  { name: "Playing chess", checked: false },
  { name: "Study hard", checked: false },
  { name: "Go to gym", checked: false },
];

function App() {
  const [data, setData] = useState(initialData);

  const handleDelete = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleCheckbox = (index) => {
    setData((prevData) =>
      prevData.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <div className="App">
      <h1>Checked and Delete</h1>
      {data.map((item, index) => (
        <div className="container" key={index}>
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => handleCheckbox(index)}
          />
          {item.name}
          {item.checked && (
            <button onClick={() => handleDelete(index)}>Delete</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
