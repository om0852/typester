"use client";
import Cookie from "js-cookie";
import "../../../sass/component/navbar.scss";
import AppContext from "../Context/store";
import { useContext, useEffect } from "react";
import navbar_link from "../data/links/navbar_link";
import Link from "next/link";
export default function Navbar() {
    const context = useContext(AppContext)


    //to change mode dark mode or light mode
    const changeMode = () => {
        if (context.bgColor == "black") {
            context.setbgColor("white");
            context.setColor("black");
        }
        else {
            context.setbgColor("black");
            context.setColor("white");
        }
    }
    useEffect(() => {
        if (Cookie.get("mode") != "dark") {
            Cookie.set("mode", "white");
        }
    }, [])
    return (
        <div className="header-container">
            <ul className="rounded-none border border-gray border-opacity-40  bg-opacity-80 shadow-lg shadow-gray/[0.03]  backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-white/40 dark:bg-opacity-75" style={{ background: context.color, color: context.bgColor }}>
                {navbar_link.map((data) => {

                    return (
                        <li><Link href={data.hash}>{data.name}</Link></li>
                    )
                })}
                {Cookie.get('token') ? <li><Link href={"/login"}>Logout</Link></li>
                    : <li><Link href={"/login"}>Login</Link></li>
                }
                <li onClick={changeMode}>{context.bgColor == "black" ? <img width="50" height="50" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/1A1A1A/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png" alt="external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector" /> : <img width="50" height="50" src="https://img.icons8.com/external-glyph-silhouettes-icons-papa-vector/78/FFFFFF/external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector.png" alt="external-Light-Mode-interface-glyph-silhouettes-icons-papa-vector" />}</li>
            </ul>

        </div >

    )

}