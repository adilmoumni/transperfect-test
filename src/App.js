import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Timer from "./timer";
import ItemList from "./itemList";
import NumberGame from "./numberGame";

function App() {
  
  const list = [{ name: "adil" }, { name: "reda" }, { name: "karam" }];

  return (
    <div className="App">
      <header className="App-header">
        <NumberGame/>
        {/* <ItemList
          items={list}
          onFilter={(value) => {
            setSearchTerm(value);
          }}
        /> */}
      </header>
    </div>
  );
}

export default App;
