import { useState, useEffect } from "react";
import AppContext from "../Context/store";
import Navbar from "./Navbar";

import Home_Page from "./Home_page";
import Cookie from "js-cookie"
import userdetails from "../userdetails/userDetails";
import { io } from "socket.io-client";
export default function Home() {

    const [bgColor, setbgColor] = useState("black");
    const [color, setColor] = useState("white");
    const [socket, setSocket] = useState(0);
    const handleSend = () => {

        // const socket = io("http://localhost:3001")
        // setSocket(socket);
        // socket.emit("userid", Cookie.get("id"))
    }

    useEffect(() => {
        // handleSend();

        // const data = await userdetails()
        // alert(data._id)
        if (Cookie.get("bgColor") == "black") {
            setColor("white");
            setbgColor("black");
        }
        else {
            setColor("black");
            setbgColor("white");

        }
    }, [])
    return (
        <div style={{ width: "100%", height: "100%", background: color }}>
            <Navbar />
            <Home_Page />
        </div>
    )

}