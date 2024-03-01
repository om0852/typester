"use client"
import "./login.css";
import register from "../../images/login/register.svg";
import log from "../../images/login/log.svg";
import { useState } from "react";
export default function Page() {
    const [newClass, setNewClass] = useState("");
    return (
        <>
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>SignIn&SignUp</title>
                    <link rel="stylesheet" type="text/css" href="./style.css" />
                    <script
                        src="https://kit.fontawesome.com/64d58efce2.js"
                        crossorigin="anonymous"
                    ></script>

                </head>
                <body>
                    <div className={`container ${newClass}`}>
                        <div className="forms-container">
                            <div className="signin-signup">
                                <form action="" className="sign-in-form">
                                    <h2 className="title">Sign In</h2>
                                    <div className="input-field">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <input type="submit" value="Login" className="btn solid" />

                                    <p className="social-text">Or Sign in with social platforms</p>
                                    <div className="social-media">
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-google"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </form>


                                <form action="" className="sign-up-form">
                                    <h2 className="title">Sign Up</h2>
                                    <div className="input-field">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Username" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-envelope"></i>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <input type="password" placeholder="Password" />
                                    </div>
                                    <input type="submit" value="Sign Up" className="btn solid" />

                                    <p className="social-text">Or Sign up with social platforms</p>
                                    <div className="social-media">
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-google"></i>
                                        </a>
                                        <a href="#" className="social-icon">
                                            <i className="fab fa-linkedin-in"></i>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="panels-container">

                            <div className="panel left-panel">
                                <div className="content">
                                    <h3>New here?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                                    <button onClick={(e) => { setNewClass("sign-up-mode") }} className="btn transparent" id="sign-up-btn">Sign Up</button>
                                </div>
                                <img src={log} className="image" alt="" />
                            </div>

                            <div className="panel right-panel">
                                <div className="content">
                                    <h3>One of us?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus natus est.</p>
                                    <button onClick={(e) => { setNewClass("sign-up-mode") }} className="btn transparent" id="sign-in-btn">Sign In</button>
                                </div>
                                <img src={register} className="image" alt="" />
                            </div>
                        </div>
                    </div>

                    <script src="./app.js"></script>
                </body>
            </html>
        </>
    )
}