"use client"
import "./login.css";
import register from "../../images/login/register.svg";
import log from "../../images/login/log.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { io } from "socket.io-client"
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
export default function Page() {

    const router = useRouter();
    const [newClass, setNewClass] = useState("");
    const [data, setData] = useState({ email: "", password: "", userName: "" })
    const [socket, setSocket] = useState(0);
    const handleSend = () => {

        const socket = io("http://localhost:3002")
        setSocket(socket);
        socket.emit("userid", Cookies.get("id"))
    }

    const handeChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }
    const handleOnLogin = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ method: 2, email: data.email, password: data.password }),
        });
        const response = await res.json();
        responseChekcer(response)
    }
    const handleOnSignUp = async (e) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/login`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ method: 1, email: data.email, password: data.password }),
        });
        const response = await res.json();
        responseChekcer(response)
    }

    const responseChekcer = (response) => {
        if (response.status == 200) {
            toast.success("Login Successsfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            Cookies.set("id", response.data._id);
            handleSend();
            router.push("/")
        }
        else if (response.status == 201) {
            toast.success("Account Created Successfully", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (response.status == 302) {
            toast.error("Account Already Exist", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else if (response.status == 401) {
            toast.error("Invalid Credintial", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
        else {
            toast.error("Account doest Exist", {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }

    }
    return (
        <>
            <html lang="en">
                <head>
                    <title>SignIn&SignUp</title>
                    <script
                        src="https://kit.fontawesome.com/64d58efce2.js"
                        crossOrigin="anonymous"
                    ></script>

                </head>
                <body>
                    <div className={`container ${newClass}`}>
                        <div className="forms-container">
                            <div className="signin-signup">
                                <form action="" className="sign-in-form">
                                    <h2 className="title">Sign In</h2>
                                    <div className="input-field">
                                        <i className="fas fa-envelope"></i>
                                        <input onChange={(e) => { handeChange(e) }} name="email" type="text" placeholder="Email" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <input onChange={(e) => { handeChange(e) }} name="password" type="password" placeholder="Password" />
                                    </div>
                                    <input onClick={handleOnLogin} type="submit" value="Login" className="btn solid" />

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
                                        <input onChange={(e) => { handeChange(e) }} name="userName" type="text" placeholder="Username" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-envelope"></i>
                                        <input onChange={(e) => { handeChange(e) }} name="email" type="email" placeholder="Email" />
                                    </div>
                                    <div className="input-field">
                                        <i className="fas fa-lock"></i>
                                        <input onChange={(e) => { handeChange(e) }} name="password" type="password" placeholder="Password" />
                                    </div>
                                    <input onClick={handleOnSignUp} type="submit" value="Sign Up" className="btn solid" />

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