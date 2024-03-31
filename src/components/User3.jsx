// basic code to learn how to use props - tis method have some limitation data can be flow from parent to
// child but cannot flow from child to parent

//user.jsx
import React from "react";

function User({ props }) {

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold text-red-500">{props.greet}CNC WEB WORLD</h1>
        </div>
    )
}

export default User;


//App.jsx ======>>>>>>>

// import React from "react";
// import User from "./components/User";

// function App() {

//   const day = {
//     greet : "Welcome"
//   }

//   return(
//     <>
//       <h1 className="text-center text-3xl font-bold text-indigo-500">welcome to react redux</h1>
//       <User props={day}/>
//     </>
//   )
// }

// export default App;