import React from "react";
import ReactDOM from "react-dom/client";

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state={isClicked: false}
    this.handleClick=this.handleClick.bind(this)
  }


  handleClick() {
    this.setState({isClicked: !this.state.isClicked})//oposite value of the state
  }



  render() {

  let toggle;
  let circle;
  let text;
if(this.state.isClicked===true){
  toggle = 'toggledOn'
  circle = 'circleOn'
  text='ON'

}else{
  toggle = 'toggledOff'
  circle='CircleOff'
  text='OFF'
}

    return(
      <div className="container">
        <div className={`toggle-switch ${toggle}`} onClick={this.handleClick}>
          <div className={`circle ${circle}`}></div>
        </div>
        <span>{text}</span>
      </div>
    );
  }
}


export {ToggleSwitch};
