import { Player } from '@lottiefiles/react-lottie-player';
import { useMediaQuery } from '@mui/material';
import { Animations } from './styled';

const Animation = () => {

  let urlAnimation = ""

  const xl = useMediaQuery("(min-width: 1560px)")
  const lg = useMediaQuery("(max-width: 1560px)")
  const md = useMediaQuery("(max-width: 1100px)")
  const sm = useMediaQuery("(max-width: 942px)")

  if(lg) {
    urlAnimation = "animations/1560_-_1100.json"
  }else if(md) {
    urlAnimation = "animations/1100_-_942.json"
  }else if(sm) {
    urlAnimation = "animations/942-_320.json"
  }else if(xl){
    urlAnimation = "animations/9999_-_1560.json"
  }

  return (
    <Animations>
      <Player
        autoplay
        loop
        src={urlAnimation}
      />
    </Animations>
  )
}

export default Animation