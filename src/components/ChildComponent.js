import React from "react";
import {TextContext} from "../stores/testContext";


class ChildComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      c:''
    }
  }
  add(){
    let {a,b} = this.context.data
    this.setState({
      c:a+b
    })
  }
  static contextType = TextContext
  render() {
    let {a,b} = this.context.data
    return (
      <>
      <h2>{`${a} + ${b} = ${this.state.c}`}</h2>
        <button onClick={()=>{this.add()}}>两数字相加</button>
      </>
    )
  }
}
export default ChildComponent