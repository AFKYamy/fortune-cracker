import { Link } from "react-router";

import Button from "../button/Button";

import pikachuGif from "/images/pikachu-shocked-face-stunned.gif";

export default function Header() {
    return (
        <div className="header container mx-xl mx-auto flex justify-between items-center py-5">
            <div className="header_logo">
                <Link to="/">
                    <h2 className="font-[Poppins] font-bold text-4xl">
                        Fortune
                        <span className="text-gold">Cracker</span>
                    </h2>
                </Link>
            </div>
            <div 
                className="header__actions flex items-center gap-5"
            >
                <Button text={"Open"} link={"/"} />
                <div className="header__user">
                    <img 
                        src={pikachuGif} 
                        alt="user profile picture"
                        className="w-10 h-10 rounded-full"
                    />
                </div>
            </div>
        </div>
    )
}