import { useContext } from "react";
import AppContext from "../Context/store";
import Navbar from "./Navbar";
import Home_Page from "./Home_page";

export default function Home() {
    const context = useContext(AppContext);
    return (
        <div style={{ width: "100%", height: "100%", background: context.color }}>
            <Navbar />
            <Home_Page />
        </div>
    )

}