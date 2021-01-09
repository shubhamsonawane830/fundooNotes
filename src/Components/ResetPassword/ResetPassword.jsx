import React from "react";
//import "./App.css";
import './ResetPassword.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { FormHelperText } from "@material-ui/core";
import UserService from '../../Services/userService.js'

const service = new UserService();

const passwordRegex = RegExp('^[A-Z][a-z]{2,}$');

export default class ResetPassword extends React.Component {
    constructor(props) {
		super(props);
		this.state = {
			hidden: true,
			password: "",
			passwordErrorFlag: false,
			passwordMsg: '',
			confirmpassword: "",
			confirmpasswordErrorFlag:false,
            confirmpasswordMsg:''
        }

	}
  changeHandler=(e)=>{
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	validate = () => {

		let isValid = false
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
    
    if (this.state.confirmpassword.length>0 && !passwordRegex.test(this.state.password)) {
        this.setState({
            confirmpasswordErrorFlag: true,
            confirmpasswordMsg: 'ConfirmPassword is invalid !'
            })
        isValid=true
    }
    
            return isValid;
        }
    
        submit = (e) => {
            console.log("Hello");
            e.preventDefault();
            if (this.validate()){
                console.log('reset password failed');
            }
            else{
                console.log('reset password successful', this.state.password);
            let userData = {
                newPassword: this.state.password,
            }
            const token=this.props.match.params.token;
            console.log(token);
            service.resetpassword(userData,token).then((response)=>{
                console.log(response)
            }).catch(error=>{
                console.log(error)
            })
            }
        }
        
	render() {
	
        return  <div class="container4">
            <div class="left-containr4">
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
           <div className="inputfield">
           <TextField className='mr' fullWidth size='small' error={this.state.passwordErrorFlag} helperText={this.state.passwordMsg} id="outline-full-width" label="Password" margin="normal"name="password" variant="outlined" onChange={this.changeHandler} />
          </div>
          <div><TextField  size='small' fullWidth id="outline-full-width" error={this.state.confirmpasswordErrorFlag} helperText={this.state.confirmpasswordMsg} label="Confirm" margin="normal" variant="outlined" name="confirmpassword" right="5%" onChange={this.changeHandler} />
</div>
          <div className="bottom">
            <div className="flex-gap">
              <Button color="primary">Forgot Password</Button>
            </div>
          </div>
          <div className="resetbutton">
          <Button className="resetsubmit" onClick={this.submit} variant="contained" color="primary" href="#contained-buttons">
          submit</Button>				
          </div>
         </div>
      </div>
        
  }
}
