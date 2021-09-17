import "./App.css";
import "./assets/css/common.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Router from "./component/Router";
import Navbar from "./component/common/Navbar";
import Footer from "./component/common/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Router />
      <Footer />
    </>
  );
}

export default App;
