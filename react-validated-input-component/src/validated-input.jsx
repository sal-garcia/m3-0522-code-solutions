import React from "react";
import ReactDOM from "react-dom/client";

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {password: ''}
    this.handleInput=this.handleInput.bind(this)
  }

  handleInput(props){
    this.setState({password: props.target.value})
  }


  render() {
    let symbol;
    let symbolClass;
    let errorMsg;

    if(this.state.password=== ''){
      errorMsg= 'a password is required'
      symbol = '✖'
      symbolClass = 'x-Mark'
    }else if(this.state.password.length < 8){
      errorMsg= 'your password is too short'
      symbol = '✖'
      symbolClass='x-Mark'
    }else{
      errorMsg=''
      symbol = '✔'
      symbolClass = 'check-mark'
    }


    return(

      <form className="row-class">
        <div className="col-class">
          <label htmlFor="password" >Password</label>
          <input type="password" id="password" name="password" onChange={this.handleInput}/>
          <span>{errorMsg}</span>
        </div>
        <div className="col-class-width"><p className={symbolClass}>{symbol}</p></div>
      </form>


    )

  }
}

export {ValidatedInput};
