import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { SentenceBlock } from "./components";
import { chatGPTIdeas, thursAfterFood, thursFood } from "./optionsExports";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="row">
          <div className="row">
            <SentenceBlock options={thursFood} />
          </div>
          <div className="row">
            <SentenceBlock options={thursAfterFood} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            ChatGPT made these ones, so I just think they're cool to mess with
            <div className="row">
              <SentenceBlock options={chatGPTIdeas} />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
