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
    let btnClass;
    if (this.state.clicks < 3){

        btnClass="button"
    }
    else if (this.state.clicks < 6){

     btnClass="darkPurple button"
    }
    else if (this.state.clicks < 9){

        btnClass="purple button"
    }
    else if (this.state.clicks < 12){

        btnClass="red button"
    }
    else if (this.state.clicks < 15){
        btnClass="orange button"
    }
    else if (this.state.clicks < 18){

        btnClass="yellow button"
    }
    else{

     btnClass="white button"
    }
    return <button className={`${btnClass}`} onClick={this.btnClicks}>Hot Button</button>
  }
}
export { HotButton };
