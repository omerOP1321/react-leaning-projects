import { useState } from "react";
import "./App.css";
import Header from "./components/Header";

function App() {
  const name = "omer";

  return (
    <div className="App">
      <h1>Hello from react</h1>
      <h2>Hello {name}</h2>
      <Header />
    </div>
  );
}

export default App;
