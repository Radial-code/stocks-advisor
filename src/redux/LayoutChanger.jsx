import { createContext, useState, useContext } from "react";

const LayoutChanger = createContext();

export const LayoutProvider = ({ children }) => {
  const [layoutClickChanger, setLayoutClickChanger] = useState(true);

  if (layoutClickChanger) {
    document.dir = "rtl";
  } else {
    document.dir = "ltr";
  }

  const layoutValue = {
    layoutClickChanger,
    setLayoutClickChanger,
  };

  return (
    <LayoutChanger.Provider layoutValue={layoutValue}>
      {children}
    </LayoutChanger.Provider>
  );
};

export const useLayout = () => useContext(LayoutChanger);

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
