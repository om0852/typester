"use client";
import "../../../sass/component/home.scss";
import { useState, useEffect } from "react";
import Cookie from "js-cookie"
import Link from "next/link";
export default function Home_Page() {
    const [bgColor, setbgColor] = useState("black");
    const [color, setColor] = useState("white");
    useEffect(() => {
        Cookie.set("timer", "60")
        if (Cookie.get("bgColor") == "black") {
            setColor("white");
            setbgColor("black");
        }
        else {
            setColor("black");
            setbgColor("white");

        }
    }, [])
    const handleTime = (e) => {
        Cookie.set('timer', e.target.value * 60, { expires: 1 })
    }
    return (
        <div className="home-container" style={{ background: color }}>

            <div className="card-container" style={{ background: color }}>

                <div className="card">
                    <h2 className="title">TYPING SPEED TEST</h2>
                    <p>Test Your Typing Skill</p>
                    <select onChange={handleTime}>
                        <option value={1}>1min</option>
                        <option value={2}>2min</option>
                        <option value={5}>5min</option>
                        <option value={10}>10min</option>
                        <option value={20}>20min</option>
                    </select>

                    <Link className="start_btn" href={"/timertesting"}>Start</Link>
                    <Link className="start_btn voilet" href={"/history"}>History</Link>
                </div>
            </div>
        </div>
    )
}