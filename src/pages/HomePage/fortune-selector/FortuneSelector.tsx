import type React from "react";

// components
import FortuneSelectorCard from "./FortuneSelectorCard"

type FortuneSelectorProps = {
    setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
    selectedMode: string;
}

export default function FortuneSelector({ setSelectedMode, selectedMode }: FortuneSelectorProps) {
    return (
        <div className="fortune__selector container max-sm:max-w-[80vw] mx-auto flex flex-col gap-4 md:gap-7 md:flex-row md:mx-xl">
            <FortuneSelectorCard 
                name="Fortunes" 
                authors="No authors" 
                mode="fortunes" 
                setSelectedMode={setSelectedMode} 
                selectedMode={selectedMode} 
            />
            <FortuneSelectorCard 
                name="Inspirational quotes" 
                authors="Authors" 
                mode="inspirational" 
                setSelectedMode={setSelectedMode} 
                selectedMode={selectedMode} 
            />
        </div>
    )
}