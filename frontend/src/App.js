import React, {useEffect, useState} from "react";

import "./App.scss";
import Count from "./components/Count";
import Popup from "./components/Popup";
import Form from "./components/Form";
import AxiosDate from "./components/AxiosDate";
import Redux from "./components/Redux";

function App() {

  const [count, setCount] = useState(1);
  const [type, setType] = useState('users')
  useEffect(() => {
      console.log('useEffect')
  }, [type])

  function increment() {
      setCount(count + 1 )
  }

  function decrement () {
      setCount(count - 1)
  }

  return (
      <div className="wrapper">
          <div className="container">
              <Redux/>
              <AxiosDate/>
              <Form/>
              <Popup/>
              <Count onCreated={count} increment={increment} decrement={decrement} />
              <br/>
              {type}
              <div onClick={() => setType('users')}>users</div>
              <div onClick={() => setType('tabs')}>tabs</div>
              <div onClick={() => setType('posts')}>posts</div>
          </div>
      </div>
  )
}

export default App
