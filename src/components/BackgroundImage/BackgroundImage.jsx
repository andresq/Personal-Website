import "./BackgroundImage.css";
import backgroundPhoto from "../../assets/background.jpg";

const BackgroundImage = ({ children }) => {
  const background = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.66), rgba(0, 0, 0, 0.66)), url(${backgroundPhoto})`,
  };
  return (
    <div className="BackgroundImage" style={background}>
      {children}
    </div>
  );
};

export default BackgroundImage;
