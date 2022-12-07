import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Home />
    </div>
  );
}

export default App;
