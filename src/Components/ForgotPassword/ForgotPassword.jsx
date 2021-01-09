import React from "react";
//import "./App.css";
import './ForgotPassword.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormHelperText } from "@material-ui/core";
import { Link } from "react-router-dom";


const emailRegex = RegExp('^$[0-9a-zA-Z]+([._+-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2})*$');

export default class ForgotPassword extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			Email: "",
			EmailErrorFlag: false,
             EmailMsg: '',
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
        
		}
	}
    }

	render() {
	
        return  <div class="container3">
               <ul class="text-center">
                <li>F</li>
		          	<li>u</li>
		          	<li>n</li>
		          	<li>d</li>
	             	<li>o</li>
		          	<li>o</li>
                 </ul>
         <div className="title">
           <span>Find Your Email</span></div>
            <div> <span>Enter your recovery email</span>
           </div>
					<TextField  id="outlined-full-width" fullWidth size='small' error={this.state.EmailErrorFlag} helperText={this.state.EmailMsg}   label="Email" name="Email" margin="normal" variant="outlined" onChange={this.changeHandler} />
          <div className="bottom">
            <div className="flex-gap">
              <Button color="primary">Forgot Password</Button>
            </div>
          </div>
          <div className="forgotbutton">
          <Button className="forgotSubmit" onClick={this.submit} component= {Link} to="/resetpassword" variant="contained" color="primary" href="#contained-buttons">
          submit</Button>
			</div>	
         </div>       
  }
}


