import type React from "react";

// components
import FortuneSelectorCard from "./FortuneSelectorCard"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// selectable modes
import { modes } from "../../../data/modes";

type FortuneSelectorProps = {
    setSelectedMode: React.Dispatch<React.SetStateAction<string>>;
    selectedMode: string;
}

export default function FortuneSelector({ setSelectedMode, selectedMode }: FortuneSelectorProps) {
    return (
        <div className="fortune__selector__wrapper container max-sm:max-w-[80vw] mx-auto md:mx-xl">
            <div className="fortune__selector hidden flex-col gap-4 md:flex md:gap-7 md:flex-row">
                {modes.map((mode) => {
                    return (
                        <FortuneSelectorCard 
                            name={mode.name}
                            authors={mode.authors} 
                            mode={mode.mode}
                            setSelectedMode={setSelectedMode} 
                            selectedMode={selectedMode} 
                            key={crypto.randomUUID()}
                        />
                    )
                })}
            </div>  
            <div className="md:hidden">
                <Select 
                    value={selectedMode}
                    onValueChange={setSelectedMode}
                >
                    <SelectTrigger className="flex justify-center w-full h-auto py-10 bg-blackSecondary border-darkGray rounded-[20px] focus:none">
                        <SelectValue placeholder="Select mode" />
                    </SelectTrigger>
                    <SelectContent className="bg-blackSecondary border-darkGray text-neutral-50">
                        <SelectGroup>
                            <SelectLabel>Selected mode</SelectLabel>
                            {modes.map((mode) => {
                                return (
                                    <SelectItem 
                                        className="h-auto py-3 flex justify-center focus:bg-gold"    
                                        value={mode.mode} 
                                        key={crypto.randomUUID()}
                                    >
                                        <div className="flex flex-col justify-center items-center font-[Rajdhani]">
                                            <p className="font-semibold text-lg">{mode.name}</p>
                                            <p className="text-sm">{mode.authors}</p>
                                        </div>
                                    </SelectItem>
                                )
                            })}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}