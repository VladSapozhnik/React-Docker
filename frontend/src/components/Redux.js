
import React from "react";
import { createStore } from 'redux'
import {rootReducer} from "../redux/rootReducer";
import {INCREMENT, DECREMENT} from "../redux/types";

function Redux () {
    const store = createStore(rootReducer, 0)

/*    window.store = store*/

    /*const [count, setCount] = useState(1);*/
    function increment() {
        store.dispatch({type: INCREMENT})
    }

    function decrement () {
        store.dispatch({type: DECREMENT})
    }

   store.subscribe(() => {
        const state = store.getState()
   })

    return (
        <div>
            <div>{store.getState()}</div>
            <div className="btn" onClick={increment}>increment</div>
            <div className="btn" onClick={decrement}>decrement</div>
            <div onClick={() => console.log(store.getState())} className="btn">result</div>
        </div>
    )
}
export default Redux
