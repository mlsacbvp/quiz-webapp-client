import React, { Component } from "react";
import "./Login.css";

import classNames from "classnames/bind";

export default class Login extends Component {
  state = {
    flag: false,
  };

  handleUpdate = () => {
    this.setState({ flag: !this.state.flag });
  };

  render() {
    var classes = classNames({
      container: true,
      "right-panel-active": this.state.flag === true,
    });
    return (
      <div id="container" class={`container ${classes}`}>
        <div class="form-container sign-up-container">
          <form action="#">
            <h1 className="crAcc">Create Account</h1>
            {/* <div class="social-container">
                    <a href="www.facebook.com" class="social">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div> */}
            {/* <span>or use your email for registration</span> */}
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div class="form-container sign-in-container">
          <form action="#">
            <h1>Sign in</h1>
            {/* <div class="social-container">
                    <a href="https://www.facebook.com/" class="social">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-google-plus-g"></i>
                    </a>
                    <a href="#" class="social">
                      <i class="fab fa-linkedin-in"></i>
                    </a>
                  </div> */}
            {/* <span>or use your account</span> */}
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            {/* <input
              id="password-field"
              type="password"
              class="form-control"
              name="password"
              value="secret"
            /> */}
            {/* <span
              toggle="#password-field"
              class="fa fa-fw fa-eye field-icon toggle-password"
            ></span> */}
            <a href="#">Forgot your password?</a>
            <button>Sign In</button>
          </form>
        </div>
        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button class="ghost" id="signIn" onClick={this.handleUpdate}>
                Sign In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button class="ghost" id="signUp" onClick={this.handleUpdate}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
