import React, { Component } from "react";
import Joi from "joi-browser"; //npm i joi-browser

import  Google  from './Google';

class LoginForm extends Component {
  state = {
    Email: "",
    password: "",
    errors: {}
  };

  schema = {
    Email: Joi.string().required(),
    password: Joi.string().required()
  };

  
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    // start fetch 
    let user = {
        email:this.state.Email,
       password:this.state.password
   }

      fetch("https://reqres.in/api/login",{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(user)
      })  .then(res=>res.json())
          .then(res=>{
   
    if(res.error)  {  
        alert(res.error)
          this.setState({errors:res.error
           
        }); console.log(this.state.errors);}

    else if(res.token) 

      {
          alert(res.token)
            localStorage.token=res.token;
    }})
    .catch (err=>{alert (err.error);})
   //end fetch 
    
    
  };




  validate = () => {
    const errors = {};
    //Clone State
    const state = { ...this.state };
    delete state.errors; // not to do this to errors obj in the state itself
    const res = Joi.validate(state, this.schema, { abortEarly: false }); //false to return all errors not only the first 
    if (res.error === null) {
      this.setState({ errors: {} });
      return null;
    }

    for (const error of res.error.details) {
      errors[error.path] = error.message;
    }


    this.setState({ errors });
    return errors;
  };

  handleChange = e => {
    let state = { ...this.state };
    state[e.currentTarget.name] = e.currentTarget.value; //using name attribute to know which of them will be change 
    this.setState(state);
  };

  render() {
    return (
      <React.Fragment>
          <div className="container" style={{textAlign: "center",color:"red" ,backgroundColor:"black",fontSize:"20px",width:"40%",padding:"15px",marginTop:"30px",marginBottom:"152px"}}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              className="form-control login_input"
              name="Email"
              value={this.state.Email}
              onChange={this.handleChange}
              autoFocus
              id="Email"
              type="text"
             
            />
            {this.state.errors.Email && (
              <div className="alert alert-danger">
                {this.state.errors.Email}
              </div>
            )}
          </div>
          <div className="form-group ">
            <label htmlFor="password">Password</label>
        
            <input
              className="form-control login_input "
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="text"
             
            /> </div>
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
         
          <button type="submit" className="login_btn">
          Login
            <i className="fas fa-sign-in-alt login-icon" style={{fontSize: "18px",paddingLeft:"3px"}}></i>
          </button>
          <p style={{paddingTop:"30px"}}>Don't have an account?
             Signup <a  className="signuplink" href="#">here</a></p>
            <Google/>


    
        </form>
        </div>


       

      </React.Fragment>
    );
  }
}

export default LoginForm;