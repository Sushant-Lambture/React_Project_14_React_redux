// Local redux and can flow from child to parent
// npm i redux ang npm i react-redux

import { React, useState } from "react";
import { createStore } from "redux";


function User({ props }) {
    
    //step -4 
    const [value, setValue] = useState("")
    
    // step - 3
    const reducer = (state = value, action) => {
        if (action.type == "login") {
            return state = "Login Success"
        }
        else {
            return state = "Login Fail"
        }
    }

    // step -2
    const store = createStore(reducer);

    //printing
    store.subscribe(() => {
        // alert(store.getState());
        setValue(store.getState())
    })

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold text-red-500">{props.greet}CNC WEB WORLD</h1>
            
            {/* /step - 5 */}
            <h2 className="text-center text-2xl font-semibold text-blue-500">{value}</h2>
            
            {/* step -1 */}
            <button className="bg-blue-600 rounded px-2 py-2 ms-8 font-bold text-white"
                onClick={() => store.dispatch({
                    type: "login"    //action    
                })}>Login</button>
        </div>
    )
}

export default User;