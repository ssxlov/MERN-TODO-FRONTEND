import React from 'react';
import './SignUp.css';
import axios from "axios";

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            users: []
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePasswordConfirm = this.onChangePasswordConfirm.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangePasswordConfirm(e) {
        this.setState({
            passwordConfirm: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const User = {
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
        }

        console.log(User);
        axios.post('http://localhost:4000/signup', User)
            .then(res => console.log(res));

        window.location = '/login';
        console.log('LOOG', User);
    }

    render() {
        return (
            <div className="Signup">

                <section>
                    <form className="signupBlock" onSubmit={this.onSubmit}>
                        <header className="App-header">
                            Create new acc
                        </header>
                        <p className="signupComponentText">Email</p>
                        <input
                            type="text"
                            placeholder="Enter your email here"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                        />
                        <p className="signupComponentText">Password</p>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChangePassword}
                        />
                        <p className="signupComponentText">Confirm password</p>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            name="passwordConfirm"
                            value={this.state.passwordConfirm}
                            onChange={this.onChangePasswordConfirm}
                        />
                        <br/>
                        <button className="signupButton" type="submit">Sign Up</button>
                    </form>
                </section>
            </div>
        )
    }
}


