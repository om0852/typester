"use client";
import "../../../sass/component/home.scss";
import { useState,useEffect } from "react";
import AppContext from "../Context/store";
import Cookie from "js-cookie"
import Link from "next/link";
export default function Home_Page() {
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
    },[])

    return (
        <div className="home-container" style={{ background: color }}>

            <div className="card-container" style={{ background: color }}>

                <div className="card">
                    <h2 className="title">TYPING SPEED TEST</h2>
                    <p>Test Your Typing Skill</p>
                    <select>
                        <option>1min</option>
                        <option>2min</option>
                        <option>5min</option>
                        <option>10min</option>
                        <option>20min</option>
                    </select>

                    <Link className="start_btn" href={"/timertesting"}>Start</Link>
                    <Link className="start_btn voilet" href={"/history"}>History</Link>
                </div>
            </div>
        </div>
    )
}