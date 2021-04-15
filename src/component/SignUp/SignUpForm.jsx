
import React, { Component } from "react";
import Form from 'react-bootstrap/Form';
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Joi from "joi-browser"; //npm i joi-browser
import '../General/Assets/CSS/SignUp.css';


class SignupForm extends Component {
  state = {
    Email: "",
    password: "",
    confirmPassword:"",
    username:"",
    birthdate:"",
    gender:"",
    errors: {}
  };

  schema = {
    Email: Joi.string().required(),
    password: Joi.string().required(),
    confirmPassword:Joi.string().required(),
    username:Joi.string().required(),
    birthdate:Joi.required(),
    gender:Joi.required()
  };

  
  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();

    if (errors) return;
    // start fetch 
    let user = {
        email:this.state.Email,
       password:this.state.password,
       userName:this.state.username,
       birthDate:this.state.birthdate,
       Gender:this.state.gender


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
   /* if(e.target.name === "confirmPassword") {

      if (this.state.password!==this.state.confirmPassword){
        e.target.value=""
        this.setState({confirmPassword:e.target.value})
      }

    }*/
  };

  render() {
    return (
      <React.Fragment>
          <div className="container" style={{textAlign: "center",color:"#e50914",fontSize:"25px",backgroundColor:"black",height:"auto",width:"40%",padding:"15px",marginTop:"30px",borderRadius:"20px"}}>
        
      
        <Form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name </label>
            <input
              className="form-control signup_input"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
             
            />

            {this.state.errors.username && (
              <div className="alert alert-danger">
                {this.state.errors.username}
              </div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="Email">Email</label>
            <input
              className="form-control signup_input"
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

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              className="form-control signup_input"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              type="text"
             
            />
            {this.state.errors.password && (
              <div className="alert alert-danger">
                {this.state.errors.password}
              </div>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input 
              className="form-control signup_input"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              id="confirmPassword"
              type="password"
             
            />
            {this.state.errors.confirmPassword && (
              <div className="alert alert-danger">
                {this.state.errors.confirmPassword}
              </div>
            )}
          </div>

          <div className="form-group">
          <input
              
                type="date"
                className="form-control signup_input"
                name="birthdate"
                id="birthdate"
                value={this.state.birthdate}
                //onChange={event => this.setState({birthdate: event.target.value})}
                onChange={this.handleChange}
            />
            {this.state.errors.birthdate && (
              <div className="alert alert-danger">
                {this.state.errors.birthdate}
              </div>
              )}
          </div>

          <fieldset>
    <Form.Group as={Row}>
      <Form.Label as="legend" column sm={2}>
        Gender
      </Form.Label>
      <Col sm={10}>
        <Form.Check className="genderForm "
          type="radio"
          label="male"
          name="gender"
          id="male"
          value="male"
        />
        <Form.Check  className="genderForm "
          type="radio"
          label="female"
          name="gender"
          id="female"
          value="female"
        />
        
      </Col>
    </Form.Group>
  </fieldset>

          <button type="submit" className="signup_btn">
          Sign up
            <i className="fas fa-sign-in-alt" style={{fontSize: "20px"}}></i>
          </button>
          <p> have an account?
              <a href="#"  className="signinlink">  Sign in</a></p>
        </Form>
        
        </div>

      </React.Fragment>
    );
  }
}

export default SignupForm;