import React from "react";
import ReactDOM from "react-dom/client";

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.MenuClicked=this.MenuClicked.bind(this);
    this.ShadeClicked=this.ShadeClicked.bind(this)
  }

  MenuClicked(props){
    this.setState({isClicked:true})
  }

  ShadeClicked(props){
  this.setState({isClicked:false})
  }




  render() {

    if(this.state.isClicked===true){
      return (
        <div className="row" onClick={this.ShadeClicked}>
          <div className="menu-width">
            <h1>Menu</h1>
            <h2>About</h2>
            <h2>Get Started</h2>
            <h2>Sign In</h2>
          </div>
          <div className="right">
            <div className="shade">

            </div>

          </div>

        </div>
      )
    }else{
        return(
    <div onClick={this.MenuClicked}>
      <div className="div"></div>
      <div className="div"></div>
      <div className="div"></div>
    </div>
    )
    }
  }


}

export {AppDrawer}
