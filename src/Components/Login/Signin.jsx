import React from "react";
//import "./App.css";
import './Signin.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import UserService from '../../Services/userService.js';


const emailRegex = RegExp('^$[0-9a-zA-Z]+([._+-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2})*$');
const passwordRegex = RegExp('^[A-Z][a-z]{2,}$');

const service = new UserService();

export default class Registration extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			Email: "",
			EmailErrorFlag: false,
      EmailMsg: '',
      password: "",
			passwordErrorFlag: false,
			passwordMsg: ''

       }

  }
  
  changeHandler=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	validate = () => {
		let isValid = false
		if (this.state.Email.length===0) {
      this.setState({
      EmailErrorFlag: true,
      EmailMsg: 'Email is required !'
           
    })
    isValid=true
  }
  if (this.state.Email.length>0 && !emailRegex.test(this.state.Email)) {
    this.setState({
      EmailErrorFlag: true,
      EmailMsg: 'Email is invalid !'
      })
    isValid=true
}

if (this.state.password.length===0) {
  this.setState({
    passwordErrorFlag: true,
    passwordMsg: 'Password is required !',
  })
  isValid=true
}


if (this.state.password.length>0 && !passwordRegex.test(this.state.password)) {
  this.setState({
    passwordErrorFlag: true,
    passwordMsg: 'Password is invalid !'
    })
  isValid=true
}
return isValid;
  }

  submit = (e) => {
		console.log("Hello");
		e.preventDefault();
		if (this.validate()){
			console.log('login failed');
		}
		else{
			console.log('login successful');
		let userData = {
         email: this.state.username,
         service: "advance",
         password: this.state.password
        
    }
    service.registration(userData).then(data => {
      console.log(data);
    }).catch(error => {
      console.log(error);
    })
 }

  }

	render() {
	         return  <div class="container2">
               <ul class="text-center">
                <li>F</li>
				       	<li>u</li>
				      	<li>n</li>
				      	<li>d</li>
				      	<li>o</li>
				      	<li>o</li>
            </ul>
           <span className="title">Sign in</span>
					<TextField fullWidth id="outlined-full-width" size='small' error={this.state.EmailErrorFlag} helperText={this.state.EmailMsg} label="Email" name="Email" margin="normal" variant="outlined" onChange={this.changeHandler} />
					<TextField fullWidth id="outlined-full-width" size='small' error={this.state.passwordErrorFlag} helperText={this.state.passwordMsg} label="Password" name="password" margin="normal" variant="outlined" onChange={this.changeHandler} />
          <div className="bottom">
            <div className="flex-gap">
              <Button color="primary">Forgot Password</Button>
            </div>
          </div>
          <div className="loginbutton">
					<Button>Create account</Button>
          <Button className="Submit" onClick={this.submit} variant="contained" color="primary" href="#contained-buttons">
          submit</Button>
				 </div>
        </div>
  }
}
