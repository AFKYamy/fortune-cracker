import { Link } from "react-router";

// components
import Button from "../ui/button/Button";

// assets
import pikachuGif from "/images/pikachu-shocked-face-stunned.gif";

export default function Header() {
    return (
        <div className="header container mx-xl mx-auto flex justify-between items-center py-10 max-sm:max-w-[80vw]">
            <div className="header_logo">
                <Link to="/">
                    <h2 className="font-[Poppins] font-bold text-2xl sm:text-4xl ">
                        Fortune
                        <span className="text-gold">Cracker</span>
                    </h2>
                </Link>
            </div>
            <div className="header__actions flex items-center gap-5 hidden sm:flex">
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