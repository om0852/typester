"use client";
import { useEffect, useState } from "react";
import "../../../sass/component/home.scss";
import Cookie from "js-cookie";
import Result_Details from "../component/Result_Details";


export default function Page() {
    const [incorrectWordCounter, setIncorrectWordCounter] = useState(0);
    const [resultflag, setFlag] = useState(false);
    let userMomentCounter = 0
    const [secondCounter, setSecondCounter] = useState(0);
    const [resultDetails, setResultDetails] = useState(0);
    const [incorrectCharCounter, setIncorrectCharCounter] = useState(0);
    const [totalCorrectWordCounter, setTotalCorrectWordCount] = useState(0);
    const [totalCorrectCharCounter, setTotalCorrectCharCount] = useState(0);
    const [paragraph, setParagraph] = useState("");
    const [accuracy, setAccuracy] = useState(100); // Accuracy state
    const [translateValue, setTranslateValue] = useState(0);
    const [textArray, setTextArray] = useState(["Certainly! Could you please provide more details about the topic or context of the demo text you'd like me to write? This information will help me tailor the text to your specific needs."]);
    let i = 0, j = 0, flag = true;
    let totalChars = 0; // Total characters typed
    let correctChars = 0; // Correct characters typed

    const TimerCounter = () => {
        setSecondCounter(prev => prev + 1)
        j++
        // console.log(j)
        if (j == 10) {
            // if (j == parseInt(Cookie.get("timer"))) {
            calculateWord();
            calculateChar();
            calculateAccuracy();

            setResultDetails()
            setFlag(true);
        }
        else {
            setTimeout(TimerCounter, 1000)
        }
    }

    function checkData(e) {
        let arr1 = document.getElementsByTagName("span");

        if (e.key === "CapsLock" || e.key === "Shift" || e.key === "Tab" || e.key === "Escape" || e.key === "F1" || e.key === "Delete" || e.key === "Insert" || e.key === "Enter" || e.key === "PageUp" || e.key === "PageDown" || e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Alt" || e.key === "Control" || e.key === "F2" || e.key === "F3" || e.key === "F4" || e.key === "F5" || e.key === "F6" || e.key === "F7" || e.key === "F8" || e.key === "F9" || e.key === "F10" || e.key === "F11" || e.key === "F12" || e.metaKey) {

        } else if (e.key === "Backspace") {
            console.log(e.key)
            if (i > 0) {
                i--;
                userMomentCounter--;
                totalChars--;

            }
            arr1[i].style.color = "white";

            // Decrease total chars on backspace
        } else {
            if (j === 0) {
                TimerCounter()
            }
            // console.log(i, arr1.length)
            if (i < arr1.length) {

                console.log(arr1[i].innerText, e.key)
                if (arr1[i].innerText === e.key) {
                    arr1[i].style.color = "green";
                    correctChars++; // Increment correct chars
                } else {
                    arr1[i].style.color = "red";
                }

                i++;
                totalChars++;
                userMomentCounter++;
            }

        }
        setTranslateValue(i);


    }
    const calculateChar = () => {
        let arr1 = document.getElementsByTagName("span");
        let f = true;
        let m = 0;
        for (let k = 0; k < userMomentCounter; k++) {

            if (arr1[k].style.color === "red" && arr1[k].innerText !== " ") {
                flag = false;
                setIncorrectCharCounter(prev => prev + 1);
            }
            else {
                setTotalCorrectCharCount(prev => prev + 1)
            }
        }
        console.log("total correct char" + totalCorrectCharCounter)

    }
    const calculateWord = () => {
        let arr1 = document.getElementsByTagName("span");
        let f = true;
        let m = 0;
        for (let k = 0; k < userMomentCounter; k++) {

            if (arr1[k].style.color === "red" && arr1[k].innerText !== " ") {
                flag = false;
            }
            if (arr1[k].innerText === " ") {
                if (flag === false) {
                    flag = true;
                    setIncorrectWordCounter(prev => prev + 1);
                    console.log(incorrectWordCounter)
                }
                else {
                    setTotalCorrectWordCount(prev => prev + 1)
                }
            }
        }
        console.log("total correct word" + totalCorrectWordCounter)
    }

    // Calculate accuracy based on correctChars and totalChars
    const calculateAccuracy = () => {
        if (totalChars > 0) {
            const acc = (correctChars / totalChars) * 100;
            setAccuracy(acc.toFixed(2)); // Set accuracy state
        }
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
            {resultflag && <Result_Details result={{
                totalCorrectCharCounter, totalCorrectWordCounter, incorrectCharCounter, incorrectWordCounter, accuracy
            }} />}
            <div className="home-container">
                <div className="test-intro">Test Your Speed</div>
                <div className="test-detail-container">
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{secondCounter}</div>Second{`(${Cookie.get("timer")})`}
                    </div>
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{incorrectWordCounter}</div>Words
                    </div>
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{incorrectCharCounter}</div>Character
                    </div>
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{accuracy}%</div>Accuracy
                    </div>
                </div>
                <div className="show-text">
                    <div className="enter-text">
                        <div style={{ position: "relative", left: -translateValue * 13 }} id="display" className="display-text">
                            {paragraph}
                        </div>

                    </div>
                </div>
            </div>
            {totalCorrectCharCounter}word{totalCorrectWordCounter}
        </div>
    )
}
