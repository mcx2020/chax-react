import React from "react";
import ChildComponent from "./components/ChildComponent";
import {TextContext} from './stores/testContext'
import {add} from "./libs/math";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.data ={
      a:1,
      b:2
    }
  }
  render() {
    return (
      <TextContext.Provider value={{data:this.data,add}}>
        <h1>App</h1>
        <ChildComponent />
      </TextContext.Provider>
    )
  }
}

export default App