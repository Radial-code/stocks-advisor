import { useState, useContext, createContext } from "react";
const LayoutChangerProviderContext = createContext();
export function useLayoutChangerProvider() {
  return useContext(LayoutChangerProviderContext);
}
export default function LayoutChangerProvider({ children }) {
  const [layoutClickChanger, setLayoutClickChanger] = useState(true);
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

//    <button onClick={layoutleftChangeHandler}>change in arabic layout</button>
//       <button onClick={layoutrightChangeHandler}>
//         change to english layout
//       </button>

// const layoutleftChangeHandler = () => {
//   setLayoutChanger(true);
// };

// const layoutrightChangeHandler = () => {
//   setLayoutChanger(false);
// };

//   const [layoutClickChanger, setLayoutClickChanger] = useState();
