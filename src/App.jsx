import React from "react";
import User from "./components/User";
import Colorchange from "./components/Colorchange";

function App() {

  const day = {
    greet : "Welcome"
  }

  return(
    <>
      <h1 className="text-center text-3xl font-bold text-indigo-500">welcome to react redux</h1>
      <User props={day}/>
      <Colorchange/>
    </>
  )
}

export default App;