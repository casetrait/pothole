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
      <main className="logsign">
        
        <div >
          <div>
          <Logo />
          {this.state.showLogin ? (<h3>LOGIN
            <LoginForm setUserInState={this.props.setUserInState} /></h3>
          ) : (<h3>SIGN UP
            <SignUpForm setUserInState={this.props.setUserInState} /></h3>
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