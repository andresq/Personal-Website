import { StrictMode } from "react";
import { render } from "react-dom";
import "./App.css";
import * as WorkItems from "./data/WorkItems.json";
import Images from "./data/imageModules";
import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import WorkExample from "./components/WorkExample/WorkExample";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <StrictMode>
      <Header></Header>
      <Intro></Intro>
      {/* {WorkItems.map((work) => (
        <WorkExample
          key={work.workTitle}
          imgSource={Images[work.workTitle]}
          imgAlt={work.imgAlt}
          workTitle={work.workTitle}
          workParagraph={work.workParagraph}
          workLink={work.workLink}
        ></WorkExample>
        ))} */}
      <Footer></Footer>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
