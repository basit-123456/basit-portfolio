import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (    
    
    <div className="main-login">
        <div className="log-in">
            <div className="header">
                <h3>Login to Admin</h3>
                <p>Welcome back! Please login to your account</p>
            </div>

            <div className="social-login">
                <div className="social-btn facebook">
                    <i className="fab fa-facebook-f"></i>
                </div>
                <div className="social-btn google">
                    <i className="fab fa-google"></i>
                </div>
                <div className="social-btn twitter">
                    <i className="fab fa-twitter"></i>
                </div>
            </div>

            <div className="divider">
                <span>or login with email</span>
            </div>

            <div className="login-form">
                <form action="">
                    <div className="form-group">
                        <label for="email">Email</label>
                        <div className="input-group">
                            <i className="fas fa-envelope"></i>
                            <input type="email" id="email" placeholder="Enter your email" required />
                        </div>
                    </div>

                    <div className="form-group">
                        <label for="password">Password</label>
                        <div className="input-group">
                            <i className="fas fa-lock"></i>
                            <input type="password" id="password" placeholder="Enter your password" required />
                        </div>
                    </div>

                    <div className="remember-forgot">
                        <div className="remember">
                            <input type="checkbox" id="remember" />
                            <label for="remember">Remember me</label>
                        </div>
                        <div className="forgot">
                            <Link to="/SignUp">Forgot password?</Link>
                        </div>
                    </div>

                    <button type="submit" className="login-btn">
                       <a href="/Layout">Login </a>
                       
                        </button>

                    <div className="signup-link">
                        <p>Don't have an account? <Link to="/SignUp">Sign up</Link></p>
                    </div>
                </form>
            </div>
        </div>
    </div>

   
  );
}

export default Login;
