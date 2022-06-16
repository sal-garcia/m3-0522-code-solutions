import React from "react";
import ReactDOM from "react-dom/client";


class StopWatch extends React.Component {
  constructor() {
    super();
    this.state = {isClick: false, time:0};
    this.playIsClicked=this.playIsClicked.bind(this);
    this.pauseIsClicked = this.pauseIsClicked.bind(this);
    this.clear = this.clear.bind(this);
  }

  playIsClicked(props){
    this.setState({isClick: true});

    this.interval=setInterval(() =>{
    this.setState({time: this.state.time+1});
  },1000);
  }

  pauseIsClicked(props){
    this.setState({isClick:false})
    clearInterval(this.interval)
  }

  clear(props){
    this.setState({time:0})

  }



  render() {

    let play;
    let icon;
    let reset;

    if(this.state.isClick===true){
      play = 'fa fa-pause'
      icon = this.pauseIsClicked
      reset = () => { };
    }else{
      play = 'fa fa-play'
      icon = this.playIsClicked
      reset =this.clear
    }

    return (
      <div>
        <div className="circle" onClick={reset} >
          <h1 className="numberStyle">{this.state.time}</h1>
        </div>

        <div className="iconDiv">
          <i className= {`icon ${play}`} onClick={icon}></i>
        </div>
      </div>



    );
  }
}

  export { StopWatch };
