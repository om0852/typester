"use client"
import { useEffect, useState } from "react";

export default function CircularLoader({ message }) {
    const [percentage, setpercentage] = useState(450);
    function changeData() {
        setInterval(() => {
            // 
            // setpercentage(prev => prev - 20);
        }, 1000);

    }
    useEffect(() => {
        return () => {
            changeData();
        }
    }, [])
    return (
        <>
            <div className="skill">
                <div className="outer">
                    <div className="inner">
                        <div id="number">{Math.round(message.percentage)}</div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width={"160px"} height={"160px"}>
                    <defs>
                        <linearGradient id="GradientColor">
                            <stop offset={"0%"} stopColor="#e91e63" />
                            <stop offset={"100%"} stopColor="#h91e63" />
                        </linearGradient>
                    </defs>
                    <circle strokeDashoffset={450 - message.percentage} cx={"80"} cy={"80"} r={"70"} strokeLinecap="round" />
                </svg>
                {/* <p>{message}</p> */}
            </div>

        </>
    )
}