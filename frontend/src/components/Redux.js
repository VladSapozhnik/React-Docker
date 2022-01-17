
import React, {useState} from "react";
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {rootReducer} from "../redux/rootReducer";
import {async_increment, decrement, increment} from "../redux/actions";

function Redux () {


/*    window.store = store*/


    /*const [count, setCount] = useState(1);*/
    function inc() {
        store.dispatch(increment())
    }

    function decr () {
        store.dispatch(decrement())
    }

    const [value, setValue] = useState(42)
    const store = createStore(rootReducer, value, applyMiddleware(thunk, logger))

    store.subscribe(() => {
        const state = store.getState()

        setValue(state)
    })



/*    function logger (state) {
        return function (next) {
            return function (action) {
                console.log('Prev State', state.getState())
                console.log('State', state)
                console.log('Action', action)
                return next(action)
            }
        }
    }*/
    return (
        <div>
            <div>{value}</div>
            <div className="btn" onClick={inc}>increment</div>
            <div className="btn" onClick={decr}>decrement</div>
            <div className="btn" onClick={() => store.dispatch(async_increment())}>ASYNC</div>
        </div>
    )
}
export default Redux
