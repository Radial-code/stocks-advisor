import { useState, useContext, createContext } from "react";

const LayoutChangerProviderContext = createContext();

export function useLayoutChangerProvider() {
  return useContext(LayoutChangerProviderContext);
}

export default function LayoutChangerProvider({ children }) {
  const initialLanguage = localStorage.getItem("stock-advisor-lang");
  const [layoutClickChanger, setLayoutClickChanger] = useState(
    initialLanguage === "Arabic" ? true : false
  );
  const value = {
    setLayoutClickChanger,
    layoutClickChanger,
  };

  return (
    <LayoutChangerProviderContext.Provider value={value}>
      {children}
    </LayoutChangerProviderContext.Provider>
  );
}
