"use client"
import { useEffect, useState } from "react";
import "../../../sass/component/result_detail.scss";
import CircularLoader from "./loaders/CircularLoader";

export default function Result_Details({ result, setFlag }) {
    const [message, setMessage] = useState([]);

    useEffect(() => {
        const { totalCorrectCharCounter, totalCorrectWordCounter, incorrectCharCounter, incorrectWordCounter } = result;
        let totalChars = totalCorrectCharCounter + incorrectCharCounter;
        let totalWords = totalCorrectWordCounter + incorrectWordCounter;

        const newMessage = [
            { num1: totalCorrectCharCounter, num2: totalChars, percentage: calculatePercentage(totalCorrectCharCounter, totalChars), message: "correct" },
            { num1: incorrectCharCounter, num2: totalChars, percentage: calculatePercentage(incorrectCharCounter, totalChars), message: "incorrect" },
            { num1: totalCorrectWordCounter, num2: totalWords, percentage: calculatePercentage(totalCorrectWordCounter, totalWords), message: "correct" },
            { num1: incorrectWordCounter, num2: totalWords, percentage: calculatePercentage(incorrectWordCounter, totalWords), message: "incorrect" }
        ];

        setMessage(newMessage);
    }, [result]);

    // Function to calculate percentage
    const calculatePercentage = (numerator, denominator) => {
        if (denominator === 0) return 0;
        return (numerator / denominator) * 100;
    };

    return (
        <div className="result-container">
            <div className="cancel-icon" onClick={() => { setFlag(false) }}>X</div>
            <div className="result-section">
                {message.map((data, index) => (
                    <CircularLoader key={index} message={data} />
                ))}
            </div>
        </div>
    );
}
