import React from "react"
import ReactDOM  from "react-dom"

class CustomButton extends React.Component{
  constructor(){
    super();
    this.state = {isClicked: false};//initialzes state
    this.handleClick = this.handleClick.bind(this);
    console.log(this,'this')
    // binds the event handler to the constructor method
  }

  handleClick(){
    this.setState({isClicked:true})

  }

  render() {
    if (this.state.isClicked) return <button onClick={this.handleClick} >thanks</button>;
    return <button onClick={this.handleClick} >click me</button>
  }

}

ReactDOM.render(
  <CustomButton/>,
  document.querySelector('#root')
);
