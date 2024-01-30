"use client";
import "../../../sass/component/home.scss";
import { useContext } from "react";
import AppContext from "../Context/store";

export default function Home_Page() {
    const context = useContext(AppContext);

    return (
        <div className="home-container" style={{ background: context.color }}>

            <div className="card-container" style={{ background: context.color }}>

                <div className="card">

                </div>
            </div>
        </div>
    )
}