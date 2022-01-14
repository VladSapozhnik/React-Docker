
import React from "react";
import { createStore } from 'redux'
import {rootReducer} from "../redux/rootReducer";
import {async_increment, decrement, increment} from "../redux/actions";

function Redux () {
    const store = createStore(rootReducer, 0)

/*    window.store = store*/

    /*const [count, setCount] = useState(1);*/
    function inc() {
        store.dispatch(increment())
    }

    function decr () {
        store.dispatch(decrement())
    }

   store.subscribe(() => {
        const state = store.getState()
   })

    return (
        <div>
            <div>{store.getState()}</div>
            <div className="btn" onClick={inc}>increment</div>
            <div className="btn" onClick={decr}>decrement</div>
            <div className="btn" onClick={() => store.dispatch(async_increment())}>ASYNC</div>
            <div onClick={() => console.log(store.getState())} className="btn">result</div>
        </div>
    )
}
export default Redux
