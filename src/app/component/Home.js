import { useState, useEffect } from "react";
import AppContext from "../Context/store";
import Navbar from "./Navbar";

import Home_Page from "./Home_page";
import Cookie from "js-cookie"
export default function Home() {
    const [bgColor, setbgColor] = useState("black");
    const [color, setColor] = useState("white");

    useEffect(() => {
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