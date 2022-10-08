import { Component } from "react"
import "./AuthPage.css"
import Logo from "../../components/Logo/Logo"
import LoginForm from "../../components/LoginForm/LoginForm"
import SignUpForm from "../../components/SignUpForm/SignUpForm"

export default class AuthPage extends Component {
  state = {
    showLogin: false,
  };

  render() {
    return (
      <main className="">
        <div>
          <Logo />
          <h3
            onClick={() => this.setState((state) => ({ showLogin: !state.showLogin }))}>
            {this.state.showLogin ? "LOG IN" : "SIGN UP"}
          </h3>
        </div>
        {this.state.showLogin ? (
          <LoginForm setUserInState={this.props.setUserInState} />
        ) : (
          <SignUpForm setUserInState={this.props.setUserInState} />
        )}
      </main>
    )
  }
}