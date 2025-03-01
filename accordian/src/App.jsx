import { useState } from "react";
import "./App.css";

function App() {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <div className="App">
      <div className="accordion">
        <div className="heading">
          <div className="title">Hi, this is an accordion</div>
          <button
            className="toggle-btn"
            onClick={() => setIsOpened((prev) => !prev)}
          >
            {isOpened ? "▴" : "▾"}
          </button>
        </div>

        <div className={`body-container ${isOpened ? "open" : ""}`}>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis
            provident explicabo autem, maxime quia nulla. Veritatis aut
            repudiandae qui voluptatibus nobis ex numquam molestias neque! Lorem
            ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
