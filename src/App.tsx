import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { PasswordProtected, SentenceBlock } from "./components";
import { chatGPTstory, thursAfterFood, thursFood } from "./optionsExports";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordProtected />
      </header>
    </div>
  );
}

export default App;
