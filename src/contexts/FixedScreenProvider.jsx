import { useState, useContext, createContext } from "react";
const FixedScreenProviderContext = createContext();
export function useFixedScreenProvider() {
  return useContext(FixedScreenProviderContext);
}
export default function FixedScreenProvider({ children }) {
  const [isScreenFixed, setScreenFixed] = useState(false);

  const value = {
    setScreenFixed,
    isScreenFixed,
  };
  return (
    <FixedScreenProviderContext.Provider value={value}>
      {children}
    </FixedScreenProviderContext.Provider>
  );
}
