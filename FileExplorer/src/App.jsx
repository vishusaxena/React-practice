import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import json from "./data.json";

const List = ({ list, addNodeToList, deleteNode }) => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="container">
      {list.map((node) => {
        return (
          <div key={node.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setIsExpanded((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name],
                  }))
                }
              >
                {isExpanded[node.name] ? "▼ " : "▶ "}
              </span>
            )}
            {node.name}
            {node.isFolder && (
              <span>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4732/4732392.png"
                  alt="icon"
                  className="icon"
                  onClick={() => addNodeToList(node.id)}
                />
              </span>
            )}
            <span>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBpd8XVXUkthFx_k0dufS-isVRqh5VLsAf_Q&s"
                alt="icon"
                className="icon"
                onClick={() => deleteNode(node.id)}
              />
            </span>

            {isExpanded[node.name] && node.children && (
              <List
                list={node.children}
                addNodeToList={addNodeToList}
                deleteNode={deleteNode}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  const [data, setData] = useState(json);

  const addNodeToList = (parentId) => {
    const input = prompt("enter name");
    const updateTree = (list) => {
      return list.map((node) => {
        if (node.id === parentId) {
          return {
            ...node,
            children: [
              ...(node.children || []),
              {
                id: Date.now(),
                name: input,
                isFolder: true,
                children: [],
              },
            ],
          };
        }
        if (node.children) {
          return { ...node, children: updateTree(node.children) };
        }
        return node;
      });
    };
    setData((prev) => updateTree(prev));
  };

  const deleteNode = (itemId) => {
    const updateTree = (list) => {
      return list
        .filter((node) => node.id != itemId)
        .map((node) => {
          if (node.children)
            return { ...node, children: updateTree(node.children) };

          return node;
        });
    };

    setData((prev) => updateTree(prev));
  };
  return (
    <div className="app">
      <h1>FILE EXPLORER</h1>
      <List list={data} addNodeToList={addNodeToList} deleteNode={deleteNode} />
    </div>
  );
}

export default App;
