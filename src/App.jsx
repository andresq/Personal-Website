import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Links from "./components/Links/Links";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route index element={<Home />} />
        <Route path="links" element={<Links />} />
      </Routes>
    </BrowserRouter>
  );
};

render(<App />, document.getElementById("root"));
