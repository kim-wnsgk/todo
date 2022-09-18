import React, { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {
    setToDo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos([toDo, ...toDos]);
    setToDo("");
  }
  console.log(toDos);
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="write.."
          value={toDo}
          onChange={onChange} />
        <button>submit</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => {
          return <li key={index}>{item}</li>
        }
        )}
      </ul>
    </div>
  );
}

export default App;
