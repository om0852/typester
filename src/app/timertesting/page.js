"use client";
import { useEffect, useState } from "react";
import "../../../sass/component/home.scss";
import Cookie from "js-cookie";
import Result_Details from "../component/Result_Details";
import { io } from "socket.io-client"
export default function Page() {
    const [incorrectWordCounter, setIncorrectWordCounter] = useState(0);
    const [resultflag, setFlag] = useState(false);
    const [secondCounter, setSecondCounter] = useState(0);
    const [incorrectCharCounter, setIncorrectCharCounter] = useState(0);
    const [totalCorrectWordCounter, setTotalCorrectWordCount] = useState(0);
    const [totalCorrectCharCounter, setTotalCorrectCharCount] = useState(0);
    const [paragraph, setParagraph] = useState("");
    const [accuracy, setAccuracy] = useState(100); // Accuracy state
    const [translateValue, setTranslateValue] = useState(0);
    const [textArray, setTextArray] = useState(["Certainly! Could you please provide more details about the topic or context of the demo text you'd like me to write? This information will help me tailor the text to your specific needs."]);

    let userMomentCounter = 0;
    let totalChars = 0; // Total characters typed
    let correctChars = 0; // Correct characters typed
    let i = 0, j = 0, flag = true;
    const socket = io("http://localhost:3002")
    const handleSend = () => {
        console.log("welcome")
        socket.emit("userid", Cookie.get("id"))
        socket.emit("startMatch", Cookie.get("id"))

    }

const calledResult =(data)=>{
    socket.emit("callResult", )

}
    useEffect(() => {
        console.log("execeute")
        socket.on("matchfound", (data) => {
            alert(data.player1);
        })
    }, [socket])

    const declareResult = () => {
        socket.on("result", (data) => {
            alert(data);
        })
    }
    const TimerCounter = () => {
        setSecondCounter(prev => prev + 1);
        j++;

        if (j == Cookie.get("timer")) {
            calculateWord();
            calculateChar();
            calculateAccuracy();
            setFlag(true);
        } else {
            setTimeout(TimerCounter, 1000);
        }
    };

    function checkData(e) {
        let arr1 = document.getElementsByTagName("span");

        if (!e.key.match(/CapsLock|Shift|Tab|Escape|F\d{1,2}|Delete|Insert|Enter|Page(Up|Down)|Arrow(Right|Left|Down|Up)|Alt|Control/)) {
            if (e.key === "Backspace") {
                if (i > 0) {
                    i--;
                    userMomentCounter--;
                    totalChars--;
                }
                arr1[i].style.color = "white";
            } else {
                if (j === 0) {
                    TimerCounter();
                }
                if (i < arr1.length) {
                    if (arr1[i].innerText === e.key) {
                        arr1[i].style.color = "green";
                        correctChars++;
                    } else {
                        arr1[i].style.color = "red";
                    }
                    i++;
                    totalChars++;
                    userMomentCounter++;
                }
            }
        }
        setTranslateValue(i);
    }

    const calculateChar = () => {
        let arr1 = document.getElementsByTagName("span");

        for (let k = 0; k < userMomentCounter; k++) {
            if (arr1[k].style.color === "red" && arr1[k].innerText !== " ") {
                flag = false;
                setIncorrectCharCounter(prev => prev + 1);
            } else {
                setTotalCorrectCharCount(prev => prev + 1);
            }
        }
    };

    const calculateWord = () => {
        let arr1 = document.getElementsByTagName("span");

        for (let k = 0; k < userMomentCounter; k++) {
            if (arr1[k].style.color === "red" && arr1[k].innerText !== " ") {
                flag = false;
            }
            if (arr1[k + 1].innerText === " ") {
                if (flag === false) {
                    flag = true;
                    setIncorrectWordCounter(prev => prev + 1);
                } else {
                    setTotalCorrectWordCount(prev => prev + 1);
                }
            }
        }
    };

    const calculateAccuracy = () => {
        if (totalChars > 0) {
            const acc = (correctChars / totalChars) * 100;
            setAccuracy(acc.toFixed(2));
        }
    };

    function load() {
        window.addEventListener('keydown', checkData);
    }

    useEffect(() => {
        load();

        const spansArray = textArray[0].split('').map((char, index) => (
            <span key={index}>{char}</span>
        ));
        setParagraph(spansArray);
    }, [textArray]);

    return (
        <div className="home-section"  >
            {resultflag && <Result_Details result={{ totalCorrectCharCounter, totalCorrectWordCounter, incorrectCharCounter, incorrectWordCounter, accuracy }} setFlag={setFlag} />}
            <div className="home-container">
                <button onClick={handleSend}>ready</button>
                <div className="test-intro">Test Your Speed</div>
                <div className="test-detail-container">
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{secondCounter}</div>Second{`(${Cookie.get("timer")})`}
                    </div>
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{incorrectWordCounter}</div>Incorrect Words
                    </div>
                    <div className="test-detail-container-card">
                        <div className="test-detail-card">{incorrectCharCounter}</div>Incorrect Character
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
        </div>
    )
}
