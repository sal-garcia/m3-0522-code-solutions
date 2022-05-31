import React from "react";

class HotButton extends React.Component {
  constructor(props){ //initiate state
    super(props)
    this.state ={clicks:0};
    this.btnClicks = this.btnClicks.bind(this);
  }

  btnClicks(){//function that goes into event listener
    this.setState({clicks: this.state.clicks+1})
  }

  render() {
    if (this.state.clicks < 3){

       return <button className="button" onClick={this.btnClicks}>Hot Button</button>
    }
    else if (this.state.clicks < 6){

    return <button className="darkPurple button" onClick={this.btnClicks}>Hot Button</button>
    }
    else if (this.state.clicks < 9){

       return <button className="purple button" onClick={this.btnClicks}>Hot Button</button>
    }
    else if (this.state.clicks < 12){

       return <button className="red button" onClick={this.btnClicks}>Hot Button</button>
    }
    else if (this.state.clicks < 15){
       return <button className="orange button" onClick={this.btnClicks}>Hot Button</button>
    }
    else if (this.state.clicks < 18){

       return <button className="yellow button" onClick={this.btnClicks}>Hot Button</button>
    }
    else{

    return <button className="white button" onClick={this.btnClicks}>Hot Button</button>
    }
  }
}
export { HotButton };
