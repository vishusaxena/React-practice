import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [cachedData, setCachedData] = useState({});

  const fetchData = async () => {
    if (cachedData[input]) return setData(cachedData[input]);
    const response = await fetch(
      "https://dummyjson.com/recipes/search?q=" + input
    );
    const json = await response.json();
    setData(json?.recipes);
    setCachedData((prev) => ({ ...prev, [input]: json?.recipes || [] }));
  };
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);
  return (
    <div className="app">
      <h1>Autocomplete Search Bar</h1>
      <input
        type="text"
        className="input-box"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setIsSelected(true)}
        onBlur={() => setIsSelected(false)}
      />
      {isSelected && (
        <div className="container">
          {data.map((r) => (
            <span className="results" key={r.id}>
              {r.name}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
