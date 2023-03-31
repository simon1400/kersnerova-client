import { Player } from "@lottiefiles/react-lottie-player";
import { useMediaQuery } from "@mui/material";
import { Animations } from "./styled";
import Arrow from "public/assets/arrow.svg";

const Animation = () => {
  let urlAnimation = "";

  const handleClick = () => {
    const element = document.getElementById("content");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const xl = useMediaQuery("(min-width: 1560px)");
  const lg = useMediaQuery("(max-width: 1560px)");
  const md = useMediaQuery("(max-width: 1100px)");
  const sm = useMediaQuery("(max-width: 942px)");

  if (xl) urlAnimation = "/animations/9999_-_1560.json";
  if (lg) urlAnimation = "/animations/1560_-_1100.json";
  if (md) urlAnimation = "/animations/1100_-_942.json";
  if (sm) urlAnimation = "/animations/942_-_320.json";

  return (
    <Animations>
      <Player 
        autoplay
        keepLastFrame
        src={urlAnimation} 
      />
      <Arrow onClick={() => handleClick()} />
    </Animations>
  );
};

export default Animation;
