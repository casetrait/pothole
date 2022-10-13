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
      <main className="logsign-main">
        <div className="logsign">
          <div className="log-img">
            <Logo/>
            <img src='/images/login.png' width='200px' alt ='Login'/>
          </div>
          {this.state.showLogin ? (<h1>LOGIN
            <LoginForm setUserInState={this.props.setUserInState} /></h1>
          ) : (<h1>SIGN UP
            <SignUpForm setUserInState={this.props.setUserInState} /></h1>
          )}
          <h3 
            onClick={() => this.setState((state) => ({ showLogin: !state.showLogin }))}>
            <button>{this.state.showLogin ? " OR SIGN UP " : " OR LOG IN"}</button>
          </h3>
        </div>
        </div>
      </main>
    )
  }
}