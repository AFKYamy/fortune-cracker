import "./History.css";

import type { Fortune } from "@/types/Fortune";

type HistoryCardProps = {
    fortune: Fortune,
    setCurrentFortune: React.Dispatch<React.SetStateAction<Fortune | null>>;
    triggerOpeningAnimation: VoidFunction;
}

export default function HistoryCard({ fortune, setCurrentFortune, triggerOpeningAnimation }: HistoryCardProps) {
    return (
        <div 
            className="history__card relative flex justify-center items-center bg-blackSecondary w-full h-17 max-h-17 rounded-[20px] shadow-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-darkGold sm:w-40 sm:max-w-40"
            onClick={() => { setCurrentFortune(fortune); triggerOpeningAnimation() }}
        >
            <div className="history__card__count absolute -top-3 bg-darkGray px-3 py-[3px] rounded-xl text-base text-darkGold font-[Rajdhani] font-medium hover:text-inherit">
                <p>
                    <span className="text-sm">x</span>
                    {fortune.count}
                </p>
            </div>
            <div className="history__card__text font-[Rajdhani] font-medium text-lg text-lightGray">
                <p>
                    {fortune.quote.length > 14 ? fortune.quote.substring(0, 14) + "..." : fortune.quote}
                </p>
            </div>
        </div>
    )
}