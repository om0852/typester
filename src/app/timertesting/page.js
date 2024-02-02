"use client";
import { useEffect, useState } from "react";
import "../../../sass/component/home.scss";
import Cookie from "js-cookie";

// ... (import statements)

export default function Page() {
    const [incorrect, setincorrect] = useState(0);
    const [paragraph, setParagraph] = useState("");
    const [translateValue, setTranslateValue] = useState(0);
    const [textArray, setTextArray] = useState(["Certainly! Could you please provide more details about the topic or context of the demo text you'd like me to write? This information will help me tailor the text to your specific needs."]);
    let i = 0;

    function checkData(e) {
        let arr1 = document.getElementsByTagName("span");

        if (e.key === "CapsLock" || e.key === "Shift" || e.key === "Tab" || e.key === "Escape" || e.key === "F1" || e.key === "Delete" || e.key === "Insert" || e.key === "Enter" || e.key === "PageUp" || e.key === "PageDown" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Alt" || e.key === "Control" || e.key === "F2" || e.key === "F3" || e.key === "F4" || e.key === "F5" || e.key === "F6" || e.key === "F7" || e.key === "F8" || e.key === "F9" || e.key === "F10" || e.key === "F11" || e.key === "F12" || e.metaKey) {

        } else if (e.key === "Backspace") {
            console.log(e.key)
            if (i > 0) {
                i--;
            }
            arr1[i].style.background = "antiquewhite";
        } else {
            console.log(i, arr1.length)
            if (i < arr1.length) {

                console.log(arr1[i].innerText, e.key)
                if (arr1[i].innerText === e.key) {

                } else {
                    arr1[i].style.background = "red";
                }
                i++;
            }
        }
        setTranslateValue(i);


    }
    function load() {
        window.addEventListener('keydown', checkData)
    }

    useEffect(() => {
        load()
        let para = document.getElementById("display")

        // Create an array of spans dynamically
        const spansArray = textArray[0].split('').map((char, index) => (
            <span key={index}>{char}</span>
        ));

        // Update the state with the spansArray
        setParagraph(spansArray);
    }, [textArray]); // Added textArray as a dependency for useEffect

    return (
        <div className="home-section">
            <div className="home-container">
                {/* ... (other components) */}
                <div className="show-text">
                    <div className="enter-text">
                        <div style={{ position: "relative", left: -translateValue * 13 }} id="display" className="display-text">
                            {paragraph}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
