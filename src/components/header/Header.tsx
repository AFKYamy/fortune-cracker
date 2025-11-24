import { Link } from "react-router";

// components
import Button from "../ui/button/Button";

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
            </div>
        </div>
    )
}