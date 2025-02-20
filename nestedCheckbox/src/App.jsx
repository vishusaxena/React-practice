import { useState } from "react";
import "./App.css";

const initialData = [
  { name: "Parent1", isParent: true, checked: false },
  { name: "Child1", isParent: false, checked: false },
  { name: "Child2", isParent: false, checked: false },
  { name: "Child3", isParent: false, checked: false },
  { name: "Child4", isParent: false, checked: false },
];

function App() {
  const [data, setData] = useState(initialData);

  const handleParentChange = () => {
    const newChecked = !data[0].checked; // Toggle parent checked state
    const updatedData = data.map((el) => ({ ...el, checked: newChecked }));
    setData(updatedData);
  };

  const handleChildChange = (index) => {
    const updatedData = [...data];
    updatedData[index].checked = !updatedData[index].checked;

    // Check if all children are checked
    const allChildrenChecked = updatedData
      .slice(1)
      .every((child) => child.checked);

    updatedData[0].checked = allChildrenChecked; // Update parent state accordingly

    setData(updatedData);
  };

  return (
    <div className="app">
      <h1>Nested Checkboxes</h1>
      <div className="container">
        {data.map((el, index) => (
          <div
            key={index}
            className="input-box"
            style={{ marginLeft: el.isParent ? "0" : "30px" }}
          >
            <input
              type="checkbox"
              checked={el.checked}
              onChange={() =>
                el.isParent ? handleParentChange() : handleChildChange(index)
              }
            />
            {el.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
