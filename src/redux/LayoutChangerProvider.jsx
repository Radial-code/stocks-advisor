import { useState, useContext, createContext, useEffect } from "react";
import en from "../translation/en.json";
import ab from "../translation/ab.json";

const LayoutChangerProviderContext = createContext();

export function useLayoutChangerProvider() {
  return useContext(LayoutChangerProviderContext);
}

export default function LayoutChangerProvider({ children }) {
  const initialLanguage = localStorage.getItem("stock-advisor-lang");
  const [layoutClickChanger, setLayoutClickChanger] = useState(
    initialLanguage === "Arabic" ? true : false
  );
  const getValueOf = (key) => {
    const defaultLanguage = layoutClickChanger;
    if (defaultLanguage) {
      return ab[key] ? ab[key] : key;
    } else if (!defaultLanguage) {
      return en[key] ? en[key] : key;
    }
  };

  useEffect(() => {
    getValueOf();
  }, [layoutClickChanger]);

  const value = {
    setLayoutClickChanger,
    layoutClickChanger,
    getValueOf,
  };

  return (
    <LayoutChangerProviderContext.Provider value={value}>
      {children}
    </LayoutChangerProviderContext.Provider>
  );
}
