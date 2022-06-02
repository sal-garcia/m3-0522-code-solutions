import React from "react";
import ReactDOM from "react-dom/client";




class RegistrationForm extends React.Component {
  constructor(props){
    super(props);
    this.state={userName:'', userPassword:''};
    this.handleUsernameChange=this.handleUsernameChange.bind(this);
    this.handlePasswordChange=this.handlePasswordChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleUsernameChange(event){
    this.setState({userName: event.target.value})
    console.log(event.target.value)
  }

  handlePasswordChange(event){
    this.setState({userPassword:event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }


  render() {

    return(

    <form onSubmit={this.handleSubmit}>
       <label htmlFor="userName">User Name</label>
       <input type="text" id="userName" name="userName" value={this.state.userName} onChange={this.handleUsernameChange}/>

       <label htmlFor="userPassword"> Password</label>
       <input type="password" id="userPassword" name="userPassword" value={this.state.userPassword} onChange={this.handlePasswordChange} />

       <button type="submit">
        Sign Up
       </button>
    </form>
    );
  }
}


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
const element = <RegistrationForm/>
  root.render(element)
