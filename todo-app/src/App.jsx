import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo(""); // Clear input after adding
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Fixed function
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#242424] py-10">
      <h1 className="text-3xl font-bold text-white mb-6">TODO APP</h1>

      <div className="w-96 p-6 bg-white shadow-lg rounded-2xl">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
            placeholder="Enter a new todo..."
          />
          <button
            onClick={addTodo}
            disabled={!newTodo.trim()}
            className="px-4 py-2 text-white bg-amber-500 rounded-lg hover:bg-amber-600 disabled:bg-gray-300"
          >
            ADD
          </button>
        </div>

        <ul className="mt-4 space-y-2">
          {todos.map((todo, index) => (
            <li
              key={index}
              className="p-2 bg-gray-800 text-white flex justify-between items-center rounded-md border-l-4 border-amber-400 shadow-sm"
            >
              <span>{todo}</span>
              <button
                onClick={() => deleteTodo(index)}
                className="px-2 py-1 text-white bg-red-500 rounded-lg hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
