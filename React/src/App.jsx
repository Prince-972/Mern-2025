import React from "react";
import Child from "./components/Child";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";  
import Skills from "./Pages/Skills";
import Counter from "./Pages/Counter";

const App = () => {
  var fruit = ["Apple", "Banana", "Cherry"];

  return (
    <div>
      <Child name="Prince" phno="9360194078" dept="IT" />
      <Home items={fruit} />
      <Counter />
      <Contact />
      <Skills />
    </div>
  );
};

export default App;
