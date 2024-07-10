import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import {
  About,
  Home
} from "./pages";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
