import { useState } from "react";
import Dashboard from "./components/Dashboard";
import "./App.css";
import Option_bar from "./components/Option_bar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header>this is a header</header>
      <main>
        <img
          src="https://w.wallhaven.cc/full/0j/wallhaven-0jed9p.jpg"
          alt="lotr-background-image"
          className="bg-image"
        />
        <Dashboard />
      </main>
      {/*<footer>This is the footer</footer>*/}
    </div>
  );
}

export default App;
