import React from "react";
//import "./App.css";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';
import UserService from '../../Services/userService.js';
import { Link } from "react-router-dom";
import './Registration.css';

 const service = new UserService();

const nameRegex = RegExp('^[A-Z][a-z]{2,}$');
// const emailRegex = RegExp('^$[0-9a-zA-Z]+([._+-][0-9a-zA-Z])*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}(.[a-zA-Z]{2})*$');
const passwordRegex = RegExp(/((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,})/);
const emailRegex = RegExp(/^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2,3})?$/);



export default class Registration extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			firstname: "",
			firstnameErrorFlag: false,
			firstnameMsg: '',
			lastname: "",
			lastnameErrorFlag: false,
			lastnameMsg: '',
			Email: "",
			EmailErrorFlag: false,
            EmailMsg: '',
			password: "",
			passwordErrorFlag: false,
			passwordMsg: '',
			confirmpassword: "",
			confirmpasswordErrorFlag:false,
			confirmpasswordMsg:'',
       }

	}
  changeHandler=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	validate = () => {

		let isValid = false
		if (this.state.firstname.length===0) {
			this.setState({
				firstnameErrorFlag: true,
				firstnameMsg: 'First Name is required !'
             			})
			isValid=true
		}
   if (this.state.firstname.length>0 && !nameRegex.test(this.state.firstname)) {
			this.setState({
				firstnameErrorFlag: true,
				firstnameMsg: 'FirstName is invalid !'
             		})
			isValid=true
  	}
		if (this.state.lastname.length===0) {
				this.setState({
				lastnameErrorFlag: true,
				lastnameMsg: 'Last Name is required !'
             		})
			isValid=true
		}
	if (this.state.lastname.length>0 && !nameRegex.test(this.state.lastname)) {
			this.setState({
				lastnameErrorFlag: true,
				lastnameMsg: 'lastName is invalid !'
           })
			isValid=true
		}
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

if (this.state.confirmpassword.length===0) {
		this.setState({
		confirmpasswordErrorFlag: true,
	   confirmpasswordMsg: 'ConfirmPassword is required !'
	   })
	isValid=true
}

// if (this.state.confirmpassword.length>0 && !passwordRegex.test(this.state.password)) {
// 	this.setState({
// 		confirmpasswordErrorFlag: true,
// 		confirmpasswordMsg: 'ConfirmPassword is invalid !'
// 		})
// 	isValid=true
// }

if(this.state.password != this.state.confirmpassword){
	this.setState({
				confirmpasswordErrorFlag: true,
		confirmpasswordMsg: 'Password Mismatch !'
 		})
 	isValid=true
}
		return isValid;
	}

	submit = (e) => {
		console.log("Hello");
		e.preventDefault();
		if (this.validate()){
			console.log('Registration failed');
		}
		else{
			console.log('Registration successful', this.state.firstname, this.state.username, this.state.password);
		let userData = {
			firstName: this.state.firstname,
			lastName: this.state.lastname,
			 service: "advance",
     		email: this.state.Email,
            password: this.state.password,
        
		}
		
		 service.registration(userData).then(data => {
			 console.log(data);
		 }).catch(error => {
			 console.log(error);
		 })
	}

		}
		
	render() {
	     return <div class="container" >
          <div class="left-container">
		<ul class="text-center">
					<li>F</li>
					<li>u</li>
					<li>n</li>
					<li>d</li>
					<li>o</li>
					<li>o</li>
       	</ul>
				<span class="title">Create your Fundoo Account</span>
				<div className="inputfield">
					<TextField id="outlined-basic" className='mr' size='small' error={this.state.firstnameErrorFlag} helperText={this.state.firstnameMsg} id="outline-full-width" label="First Name" name="firstname" margin="normal" variant="outlined" onChange={this.changeHandler} />
					<TextField id="outlined-basic" size='small' error={this.state.lastnameErrorFlag} helperText={this.state.lastnameMsg} label="Last Name" margin="normal" name="lastname" variant="outlined" onChange={this.changeHandler} />
				</div>
				<div className="inputfield">
				<TextField className="width" id="outlined-full-width" size='small' error={this.state.EmailErrorFlag} helperText={this.state.EmailMsg} label="Email" name="Email" margin="normal" variant="outlined" onChange={this.changeHandler} />
			    </div><br />
				<div class="line1">You can use letters,numbers & periods </div>
				<div class="line4">Use my current email address instead </div>
				<div className="inputfield" >
					<TextField className='mr' size='small' error={this.state.passwordErrorFlag} helperText={this.state.passwordMsg} id="outline-full-width" label="Password" margin="normal"name="password" variant="outlined" onChange={this.changeHandler} />
					<TextField  size='small' id="outline-full-width" error={this.state.confirmpasswordErrorFlag} helperText={this.state.confirmpasswordMsg} label="Confirm" margin="normal" variant="outlined" name="confirmpassword" right="5%" onChange={this.changeHandler} />
				</div>
				<div className="inputfield">
					<Checkbox onClick={this.toggleshow} color="primary" />
				<div>
				<FormHelperText id> Show Password </FormHelperText>
				</div>
				</div>
              <div className="registrationbutton">
				<Button component={Link} to="/Signin">Sign in instead</Button>
					<Button className="Registrationsubmit" onClick={this.submit} variant="contained" color="primary" href="#contained-buttons">
          submit</Button>
		  
				</div>
			</div>
			
			<div class="side-image">
				<img src="/assets/account.svg" alt="myPic" width="244" height="244" />
        	</div>
			</div>
	}
}






