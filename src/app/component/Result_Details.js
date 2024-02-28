"use client"
import { useEffect, useState } from "react";
import "../../../sass/component/result_detail.scss";
import CircularLoader from "./loaders/CircularLoader";
export default function Result_Details({ result }) {
    const [message, setMessage] = useState([]);
    useEffect(() => {
        // console.log(result)
        const { totalCorrectCharCounter, totalCorrectWordCounter, incorrectCharCounter, incorrectWordCounter, accuracy } = result;
        let total = totalCorrectCharCounter + incorrectCharCounter;
        message.length = 0
        let acc = (totalCorrectCharCounter / total) * 100;
        message.push({ num1: totalCorrectCharCounter, num2: total, percentage: acc })
        acc = (incorrectCharCounter / total) * 100;
        message.push({ num1: incorrectCharCounter, num2: total, percentage: acc })
        total = totalCorrectWordCounter + incorrectWordCounter;
        acc = (totalCorrectWordCounter / total) * 100;
        message.push({ num1: totalCorrectWordCounter, num2: total, percentage: acc })
        acc = (incorrectWordCounter / total) * 100;
        message.push({ num1: incorrectWordCounter, num2: total, percentage: acc })
        setMessage(message)
        console.log(message)
    }, [])
    return (
        <>
            <div className="result-container">
                <div className="cancel-icon">X</div>
                <div className="result-section">
                    {
                        message && message.map((data, index) => {
                            console.log(data)
                            return (
                                <CircularLoader key={index} message={data} />
                            )
                        })
                    }
                    {/* <CircularLoader message={message[1]} /> */}
                    {/* <CircularLoader message={message.data[2]} />
                    <CircularLoader /> */}
                </div>
                <div className="result-section">
                    {/* <CircularLoader /> */}
                    {/* <CircularLoader message={message[2]} />
                    <CircularLoader message={message[3]} /> */}
                    {/* <CircularLoader message={message.data[5]} /> */}
                </div>
            </div>
        </>
    )
}