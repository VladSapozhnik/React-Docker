import React, {useEffect, useState} from "react";

import "./App.scss";
import Count from "./components/Count";
import Popup from "./components/Popup";
import Form from "./components/Form";
import AxiosDate from "./components/AxiosDate";
import Redux from "./components/Redux";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion/Accordion";
import Slider from "./components/Slider";
import Map from "./components/Map";
import ReduxPractice from "./components/Redux-practice/ReduxPractice";

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
              <ReduxPractice/>
              <Tabs/>
              <Accordion/>
              <Slider/>
              <Redux/>
              <AxiosDate/>
              <Form/>
              <Popup/>
              <Count onCreated={count} increment={increment} decrement={decrement} />
              <br/>
              <Map/>
              {type}
              <div onClick={() => setType('users')}>users</div>
              <div onClick={() => setType('tabs')}>tabs</div>
              <div onClick={() => setType('posts')}>posts</div>
          </div>
      </div>
  )
}

export default App
