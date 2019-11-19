import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//import CSS
import "./LoginPage.css";

const initialState = {
    userEmail: '',
    password: '',
    userEmailError: '',
    passwordError: ''
}

class LoginPage extends React.Component {
    
    constructor() {
        super();
        this.state = initialState;
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    validate = () => {
        const {userEmail, password} = this.state;
        let userEmailError = "";
        let passwordError = "";
        
        if(!userEmail.includes('@')) {
            userEmailError = 'Email field cannot be blank';
        }
        if(!password) {
            passwordError = 'Password cannot be blank';
        }
        if(userEmailError || passwordError) {
            this.setState({ userEmailError, passwordError });
            return false;
        }
        
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        const isValid = this.validate();
        if (isValid) {
            if(this.state.userEmail === "hruday@gmail.com" && this.state.password ===  "hruday123"){
                console.log(this.state);
                history.push('/dashboard');
                this.setState(initialState);
            } else {
                this.setState({passwordError: 'Email or Password not Matching'})
            }       
        }
    }

    render() {
        const { userEmail, password, userEmailError, passwordError } = this.state;

        return(
            <div className="loginBg">
                <Row className="loginSet">
                    <Col className="bgSet" sm={4}>
                        <h1>Login Page</h1>
                        <h2>React</h2>
                        <p>Using react and redirecting into dashboard page</p>
                    </Col>
                    <Col className="bgSetWhite" sm={8}>
                        <h1>Login to Appiness Dashboard</h1>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Control 
                                    type="email"
                                    name="userEmail"
                                    placeholder="Enter email id" 
                                    value = {userEmail}
                                    onChange = {this.handleChange}
                                />
                                <div className="errorMessage">{userEmailError}</div>
                            </Form.Group>                            
                            <Form.Group>
                                <Form.Control 
                                    type="password"
                                    name="password"
                                    placeholder="Enter password"
                                    value = {password}
                                    onChange = {this.handleChange}
                                />
                                <div className="errorMessage">{passwordError}</div>
                            </Form.Group>
                            <p>Forgot Password?</p>
                            <Row>
                                <Col sm={4}>
                                    <Button variant="primary btn-sub" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                                <Col sm ={8}>
                                    <h6>If you are new user <span style={{color: "#f45b43"}}>Sign Up here</span>.</h6>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </div>
        )
    }
}
export default LoginPage;