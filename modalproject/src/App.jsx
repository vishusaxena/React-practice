import { useState } from "react";

import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(true);
  const handleModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="App">
      <button onClick={handleModal} className="btn" disabled={isOpen}>
        open
      </button>

      {isOpen && (
        <div className="container">
          <h1>Hello! This is a Modal</h1>
          <label>
            <input type="checkbox" onChange={() => setIsChecked(false)} /> agree
            to close
          </label>
          <button
            onClick={() => setIsOpen(false)}
            className="btn"
            disabled={isChecked}
          >
            close
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
