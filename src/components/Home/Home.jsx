import BackgroundImage from "../BackgroundImage/BackgroundImage";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import "./Home.css";

const Home = () => {
  return (
    <BackgroundImage>
      <Intro></Intro>
      <Footer></Footer>
    </BackgroundImage>
  );
};

export default Home;
