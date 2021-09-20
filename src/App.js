import "./App.css";
import "./assets/css/common.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./component/Router";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
function App() {
  const { setScreenFixed, isScreenFixed } = useFixedScreenProvider();

  return (
    <div>
      <Router />
    </div>
  );
}

export default App;
