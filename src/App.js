import React, { Component } from 'react';
import './App.css';
import Registration from './Components/Registration/Registration.jsx';
import Signin from  './Components/Login/Signin.jsx';
import Dashboard from  './Components/Dashboard/Dashboard.jsx';
import ForgotPassword from  './Components/ForgotPassword/ForgotPassword.jsx';
import ResetPassword from  './Components/ResetPassword/ResetPassword.jsx';
import { BrowserRouter ,Route, Switch} from 'react-router-dom';

function App() {
    return (
       <div className="App" >
       <BrowserRouter>
       <Switch>
       <Route exact path="/Registration" component={Registration}  />
       <Route exact path="/Signin" component={Signin} />
      <Route exact path="/forgotpassword" component={ForgotPassword} />
      <Route exact path="/resetpassword" component={ResetPassword} />
      <Route exact path="/Dashboard" component={Dashboard} />
       </Switch>
       </BrowserRouter>
     </div>
    );
}


export default App;

