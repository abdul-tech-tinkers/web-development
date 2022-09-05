//import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import { Dars } from "./Dars.js";

function App() {
  const txtTitle = useRef();
  const hexColor = useRef();
  console.log({ txtTitle });
  console.log({ hexColor });
  const submit = (e) => {
    e.preventDefault();
    const title = txtTitle.current.value;
    const color = hexColor.current.value;
    console.log(title);
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={submit}>
          <input type="text" ref={txtTitle} placeholder="color title" />
          <input type="color" ref={hexColor} />
          <button> ADD </button>
        </form>
      </header>
    </div>
  );
}

export default App;
