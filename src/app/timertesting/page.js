"use client";
import { useEffect, useState } from "react";
import "../../../sass/component/home.scss";
import Cookie from "js-cookie";

export default function Page() {
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
    }, []);
    return (
        <div className="home-section" style={{ background: color }}>
            <div className="home-container">
                <div className="test-intro">Test Your Speed</div>
                <div className="test-detail-container">
                    <div className="test-detail-card"></div>
                    <div className="test-detail-card"></div>
                    <div className="test-detail-card"></div>
                    <div className="test-detail-card"></div>
                </div>
            </div>
        </div>
    )
}