import { createContext, useContext, type ReactNode } from "react";

// hooks
import useFortunes from "@/hooks/useFortunes";

type FortunesContextType = ReturnType<typeof useFortunes>;

const FortunesContext = createContext<FortunesContextType | null>(null);

export function FortunesProvider({ children }: { children: ReactNode }) {
  const value = useFortunes(); 
  return (
    <FortunesContext.Provider value={value}>
      {children}
    </FortunesContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFortunesContext() {
  const ctx = useContext(FortunesContext);
  if (!ctx) {
    throw new Error("useFortunesContext must be used inside <FortunesProvider>");
  }
  return ctx;
}
