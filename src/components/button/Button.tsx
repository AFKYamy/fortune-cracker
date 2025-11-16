import { Link } from "react-router";

type Button = {
    text: string;
    link?: string;
    action?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Button({ text, link, action }: Button) {
    return (
        link ? (
            <Link
                className="btn font-semibold bg-gold text-neutral-950 py-[0.65rem] px-6 rounded-[25px] hover:bg-darkGold transition-all duration-200 ease-in-out"
                to={link}
                title={text + " link"}
            >
                {text}
            </Link>
        ) : (
            <button
                className="btn font-semibold bg-gold text-neutral-950 py-[0.65rem] px-6 rounded-[25px] hover:bg-darkGold transition-all duration-200 ease-in-out"
                title={text + " link"}
                onClick={action}
            >
                {text}
            </button>
        )
    )
}