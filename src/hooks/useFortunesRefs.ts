import { useRef } from "react"

export default function useFortunesRefs() {
    // refs for animations
    const fortuneCookie = useRef<HTMLImageElement>(null);
    const fortuneCookieLeft = useRef<HTMLImageElement>(null);
    const fortuneCookieRight = useRef<HTMLImageElement>(null);
    const fortuneText = useRef<HTMLDivElement>(null);
    
    return { 
        fortuneCookie, 
        fortuneCookieLeft, 
        fortuneCookieRight, 
        fortuneText 
    };
}