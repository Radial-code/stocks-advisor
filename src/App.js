import "./App.css";
import "./assets/css/common.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./component/Router";
import { useFixedScreenProvider } from "./contexts/FixedScreenProvider";
function App() {
  const { setScreenFixed, isScreenFixed } = useFixedScreenProvider();

  return (
    <div className="d-flex justify-content-between flex-column h-100vh">
      <Router />
    </div>
  );
}

export default App;
