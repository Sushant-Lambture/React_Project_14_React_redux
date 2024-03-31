// local
import React, { useState } from "react";
import { createStore } from "redux";

function Colorchange() {

    //step 4
    const [style,setStyle] = useState({color:""})


    // step 3
    const reducer = (state={} ,action) => {
        if(action.type == "red"){
            return state = {
                color : "red"
            }
        }
        else if(action.type == "green"){
            return state = {
                color : "green"
            }
        }
        else if(action.type == "blue"){
            return state = {
                color : "blue"
            }
        }
        else if(action.type == "yellow"){
            return state = {
                color : "yellow"
            }
        }
        else if(action.type == "pink"){
            return state = {
                color : "pink"
            }
        }
    }

    // step 2
    const store = createStore(reducer);

    //step 5
    store.subscribe(() => {
        const res = store.getState();
        setStyle(res)
    })

    return(
        <div>
            <h1 className="text-center text-3xl font-bold" style={style}>Color Change</h1>
            {/* <select onChange={(e)=>{console.log(e.target.value)}}> */}
            
            {/* step 1 */}
            <select onChange={(e)=>{store.dispatch({
                type : e.target.value
            })}}>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="yellow">Yellow</option>
                <option value="pink">Pink</option>
            </select>
        </div>
    )
}

export default Colorchange;