import React from 'react'
import { Form, Button } from 'react-bootstrap'
import jwt from 'jsonwebtoken'

class Login extends React.Component<{}, {username: string, password:string}> {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            password: ''
        }

        this.handleUserChange = this.handleUserChange.bind(this)
        this.handlePassChange = this.handlePassChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleUserChange(event) {
        this.setState({ username: event.target.value })
    }

    handlePassChange(event) {
        this.setState({ password: event.target.value })
    }

    handleSubmit(event) {
        event.preventDefault()

        var token = jwt.sign({
            username: this.state.username,
            password: this.state.password
         }, 'shhhhh');

         var decoded = jwt.verify(token, 'shhhhh');

        console.debug(token);
        console.debug(decoded);
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        onChange={this.handleUserChange}
                        value={this.state.username}
                        type="text"/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        onChange={this.handlePassChange}
                        value={this.state.password}
                        type="password"/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
};

export default Login;