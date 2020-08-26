import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // // reset login status
        // this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password);
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return (
                <form className="signupBlock" onSubmit={this.onSubmit}>
                    <h2>Login</h2>
                    <hr/>
                    <br/>
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
                    <br/>
                    <Link className="loginButton" type="submit" to="/home">
                        Login
                    </Link>
                    <br/>
                    <Link to="/register" className="reg">Register</Link>
                </form>
        );
    }
}

function mapState(state) {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

// const actionCreators = {
//     login: userActions.login,
//     logout: userActions.logout
// };

//const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
//export { connectedLoginPage as LoginPage };
export {LoginPage}
