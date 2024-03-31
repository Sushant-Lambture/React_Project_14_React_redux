import React from "react";
import { createStore } from "redux";


function User({ props }) {

    const reducer = (state="", action) => {
        if(action.type == "login"){
            return state = "Login Success"
        }
        else{
            return state = "Login Fail"
        }
    }

    const store = createStore(reducer);

    store.subscribe(() => {
        alert(store.getState());
    })

    return (
        <div>
            <h1 className="text-center text-2xl font-semibold text-red-500">{props.greet}CNC WEB WORLD</h1>

            <button className="bg-blue-600 rounded px-2 py-2 ms-8 font-bold text-white"
                onClick={() => store.dispatch({
                    type: "login"    //action    
                })}>Login</button>
        </div>
    )
}

export default User;