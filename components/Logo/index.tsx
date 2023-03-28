import { useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { LogoS } from "./styled"

const Logo = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  const xl = useMediaQuery("(min-width: 1560px)");
  const lg = useMediaQuery("(max-width: 1560px) and (min-width: 1100px)");
  const md = useMediaQuery("(max-width: 1100px) and (min-width: 942px)");
  const sm = useMediaQuery("(max-width: 942px)");

  return (
    <LogoS>
      {xl && <svg id="LOGO" xmlns="http://www.w3.org/2000/svg" width="2560" height="90" viewBox="0 0 2560 90"><g id="LOGO-2" onClick={() => handleClick()}><polygon points="598.72 29.89 588.33 29.89 567.59 54.64 567.59 29.89 559.17 29.89 559.17 82.26 567.59 82.26 567.59 67.64 576.4 56.68 590.9 82.26 600.04 82.26 582.07 50.02 598.72 29.89" fill="#1d1d1b"/><path d="m629.86,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m680.12,38.72l-1.34-8.83h-16.43v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m737.07,52.58l-8.32-2.46c-4.42-1.34-7.19-3.6-7.19-7.09,0-4.62,3.59-7.29,8.93-7.29,5.96,0,9.76,3.18,9.76,8.52h8.42c0-9.35-6.16-15.92-18.18-15.92-10.99,0-17.36,6.14-17.36,15.2,0,7.09,4.21,11.91,11.81,14.27l8.83,2.57c4.83,1.54,6.98,3.7,6.98,7.7,0,5.03-3.7,7.81-9.45,7.81-6.37,0-10.89-3.39-10.89-9.45h-8.42c0,10.58,6.98,16.84,18.9,16.84s18.28-6.31,18.28-15.51c0-8.11-3.9-12.73-12.12-15.2Z" fill="#1d1d1b"/><path d="m785.64,28.35c-6.88,0-11.81,2.98-14.28,8.73l-1.16-7.19h-6.33v52.38h8.42v-34.1c0-7.91,3.59-11.81,10.27-11.81s10.27,4,10.27,11.91v33.99h8.42v-33.99c0-12.84-5.55-19.92-15.61-19.92Z" fill="#1d1d1b"/><path d="m835.18,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m886.16,38.72l-1.36-8.83h-16.41v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m936.84,28.35c-12.43,0-19.2,7.19-19.2,19.92v15.1c0,12.73,6.78,19.92,19.2,19.92s19.2-7.19,19.2-19.92v-15.1c0-12.73-6.68-19.92-19.2-19.92Zm10.78,35.94c0,7.39-3.7,11.3-10.78,11.3s-10.78-3.9-10.78-11.3v-16.94c0-7.39,3.7-11.3,10.78-11.3s10.78,3.9,10.78,11.3v16.94Z" fill="#1d1d1b"/><polygon points="988.64 70.76 974.87 29.89 966.04 29.89 984.53 82.26 992.95 82.26 1011.12 29.89 1002.71 29.89 988.64 70.76" fill="#1d1d1b"/><path d="m1052.02,29.89l-.92,6.57c-2.05-5.14-6.47-8.11-13.35-8.11-10.99,0-17.15,7.29-17.15,19.92v15.1c0,12.63,6.16,19.92,17.15,19.92,6.88,0,11.3-2.98,13.35-8.11l.86,7.09h6.53V29.89h-6.47Zm-1.95,36.97c0,4.42-3.59,8.42-10.27,8.42s-10.78-4.11-10.78-10.99v-16.94c0-6.88,3.8-10.99,10.78-10.99s10.27,4,10.27,8.42v22.08Z" fill="#1d1d1b"/><polygon points="735.18 17.4 747.54 0 738.27 0 731.17 11.22 724.19 0 715.03 0 727.28 17.4 735.18 17.4" fill="#1d1d1b"/><polygon points="1053.16 0 1043.15 0 1036.51 17.4 1044.07 17.4 1053.16 0" fill="#1d1d1b"/><rect x="559" width="499" height="90" fill="none"/></g></svg>}
      {lg && <svg id="LOGO" xmlns="http://www.w3.org/2000/svg" width="1560" height="90" viewBox="0 0 1560 90"><g id="LOGO-2" onClick={() => handleClick()}><polygon points="98.72 29.89 88.33 29.89 67.59 54.64 67.59 29.89 59.17 29.89 59.17 82.26 67.59 82.26 67.59 67.64 76.4 56.68 90.9 82.26 100.04 82.26 82.07 50.02 98.72 29.89" fill="#1d1d1b"/><path d="m129.86,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m180.12,38.72l-1.34-8.83h-16.43v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m237.07,52.58l-8.32-2.46c-4.42-1.34-7.19-3.6-7.19-7.09,0-4.62,3.59-7.29,8.93-7.29,5.96,0,9.76,3.18,9.76,8.52h8.42c0-9.35-6.16-15.92-18.18-15.92-10.99,0-17.36,6.14-17.36,15.2,0,7.09,4.21,11.91,11.81,14.27l8.83,2.57c4.83,1.54,6.98,3.7,6.98,7.7,0,5.03-3.7,7.81-9.45,7.81-6.37,0-10.89-3.39-10.89-9.45h-8.42c0,10.58,6.98,16.84,18.9,16.84s18.28-6.31,18.28-15.51c0-8.11-3.9-12.73-12.12-15.2Z" fill="#1d1d1b"/><path d="m285.64,28.35c-6.88,0-11.81,2.98-14.28,8.73l-1.16-7.19h-6.33v52.38h8.42v-34.1c0-7.91,3.59-11.81,10.27-11.81s10.27,4,10.27,11.91v33.99h8.42v-33.99c0-12.84-5.55-19.92-15.61-19.92Z" fill="#1d1d1b"/><path d="m335.18,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m386.16,38.72l-1.36-8.83h-16.41v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m436.84,28.35c-12.43,0-19.2,7.19-19.2,19.92v15.1c0,12.73,6.78,19.92,19.2,19.92s19.2-7.19,19.2-19.92v-15.1c0-12.73-6.68-19.92-19.2-19.92Zm10.78,35.94c0,7.39-3.7,11.3-10.78,11.3s-10.78-3.9-10.78-11.3v-16.94c0-7.39,3.7-11.3,10.78-11.3s10.78,3.9,10.78,11.3v16.94Z" fill="#1d1d1b"/><polygon points="488.64 70.76 474.87 29.89 466.04 29.89 484.53 82.26 492.95 82.26 511.12 29.89 502.71 29.89 488.64 70.76" fill="#1d1d1b"/><path d="m552.02,29.89l-.92,6.57c-2.05-5.14-6.47-8.11-13.35-8.11-10.99,0-17.15,7.29-17.15,19.92v15.1c0,12.63,6.16,19.92,17.15,19.92,6.88,0,11.3-2.98,13.35-8.11l.86,7.09h6.53V29.89h-6.47Zm-1.95,36.97c0,4.42-3.59,8.42-10.27,8.42s-10.78-4.11-10.78-10.99v-16.94c0-6.88,3.8-10.99,10.78-10.99s10.27,4,10.27,8.42v22.08Z" fill="#1d1d1b"/><polygon points="235.18 17.4 247.54 0 238.27 0 231.17 11.22 224.19 0 215.03 0 227.28 17.4 235.18 17.4" fill="#1d1d1b"/><polygon points="553.16 0 543.15 0 536.51 17.4 544.07 17.4 553.16 0" fill="#1d1d1b"/><rect x="59" width="499" height="90" fill="none"/></g></svg>}
      {md && <svg id="LOGO" xmlns="http://www.w3.org/2000/svg" width="1100" height="90" viewBox="0 0 1100 90"><g id="LOGO-2" onClick={() => handleClick()}><polygon points="98.72 29.89 88.33 29.89 67.59 54.64 67.59 29.89 59.17 29.89 59.17 82.26 67.59 82.26 67.59 67.64 76.4 56.68 90.9 82.26 100.04 82.26 82.07 50.02 98.72 29.89" fill="#1d1d1b"/><path d="m129.86,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m180.12,38.72l-1.34-8.83h-16.43v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m237.07,52.58l-8.32-2.46c-4.42-1.34-7.19-3.6-7.19-7.09,0-4.62,3.59-7.29,8.93-7.29,5.96,0,9.76,3.18,9.76,8.52h8.42c0-9.35-6.16-15.92-18.18-15.92-10.99,0-17.36,6.14-17.36,15.2,0,7.09,4.21,11.91,11.81,14.27l8.83,2.57c4.83,1.54,6.98,3.7,6.98,7.7,0,5.03-3.7,7.81-9.45,7.81-6.37,0-10.89-3.39-10.89-9.45h-8.42c0,10.58,6.98,16.84,18.9,16.84s18.28-6.31,18.28-15.51c0-8.11-3.9-12.73-12.12-15.2Z" fill="#1d1d1b"/><path d="m285.64,28.35c-6.88,0-11.81,2.98-14.28,8.73l-1.16-7.19h-6.33v52.38h8.42v-34.1c0-7.91,3.59-11.81,10.27-11.81s10.27,4,10.27,11.91v33.99h8.42v-33.99c0-12.84-5.55-19.92-15.61-19.92Z" fill="#1d1d1b"/><path d="m335.18,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m386.16,38.72l-1.36-8.83h-16.41v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m436.84,28.35c-12.43,0-19.2,7.19-19.2,19.92v15.1c0,12.73,6.78,19.92,19.2,19.92s19.2-7.19,19.2-19.92v-15.1c0-12.73-6.68-19.92-19.2-19.92Zm10.78,35.94c0,7.39-3.7,11.3-10.78,11.3s-10.78-3.9-10.78-11.3v-16.94c0-7.39,3.7-11.3,10.78-11.3s10.78,3.9,10.78,11.3v16.94Z" fill="#1d1d1b"/><polygon points="488.64 70.76 474.87 29.89 466.04 29.89 484.53 82.26 492.95 82.26 511.12 29.89 502.71 29.89 488.64 70.76" fill="#1d1d1b"/><path d="m552.02,29.89l-.92,6.57c-2.05-5.14-6.47-8.11-13.35-8.11-10.99,0-17.15,7.29-17.15,19.92v15.1c0,12.63,6.16,19.92,17.15,19.92,6.88,0,11.3-2.98,13.35-8.11l.86,7.09h6.53V29.89h-6.47Zm-1.95,36.97c0,4.42-3.59,8.42-10.27,8.42s-10.78-4.11-10.78-10.99v-16.94c0-6.88,3.8-10.99,10.78-10.99s10.27,4,10.27,8.42v22.08Z" fill="#1d1d1b"/><polygon points="235.18 17.4 247.54 0 238.27 0 231.17 11.22 224.19 0 215.03 0 227.28 17.4 235.18 17.4" fill="#1d1d1b"/><polygon points="553.16 0 543.15 0 536.51 17.4 544.07 17.4 553.16 0" fill="#1d1d1b"/><rect x="59" width="499" height="90" fill="none"/></g></svg>}
      {sm && <svg id="LOGO" xmlns="http://www.w3.org/2000/svg" width="942" height="90" viewBox="0 0 942 90"><g id="LOGO-2" onClick={() => handleClick()}><polygon points="98.72 29.89 88.33 29.89 67.59 54.64 67.59 29.89 59.17 29.89 59.17 82.26 67.59 82.26 67.59 67.64 76.4 56.68 90.9 82.26 100.04 82.26 82.07 50.02 98.72 29.89" fill="#1d1d1b"/><path d="m129.86,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m180.12,38.72l-1.34-8.83h-16.43v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m237.07,52.58l-8.32-2.46c-4.42-1.34-7.19-3.6-7.19-7.09,0-4.62,3.59-7.29,8.93-7.29,5.96,0,9.76,3.18,9.76,8.52h8.42c0-9.35-6.16-15.92-18.18-15.92-10.99,0-17.36,6.14-17.36,15.2,0,7.09,4.21,11.91,11.81,14.27l8.83,2.57c4.83,1.54,6.98,3.7,6.98,7.7,0,5.03-3.7,7.81-9.45,7.81-6.37,0-10.89-3.39-10.89-9.45h-8.42c0,10.58,6.98,16.84,18.9,16.84s18.28-6.31,18.28-15.51c0-8.11-3.9-12.73-12.12-15.2Z" fill="#1d1d1b"/><path d="m285.64,28.35c-6.88,0-11.81,2.98-14.28,8.73l-1.16-7.19h-6.33v52.38h8.42v-34.1c0-7.91,3.59-11.81,10.27-11.81s10.27,4,10.27,11.91v33.99h8.42v-33.99c0-12.84-5.55-19.92-15.61-19.92Z" fill="#1d1d1b"/><path d="m335.18,28.45c-12.12,0-18.59,7.09-18.59,19.82v15.2c0,12.94,6.16,19.82,18.69,19.82,11.5,0,18.59-6.57,18.59-16.33h-8.32c0,5.13-4.11,8.73-10.27,8.73-6.98,0-10.27-3.7-10.27-11.3v-5.85h28.86v-10.27c0-12.73-6.47-19.82-18.69-19.82Zm10.37,23.21l-20.54.31v-4.62c0-7.29,3.39-11.3,10.17-11.3s10.37,3.9,10.37,11.3v4.31Z" fill="#1d1d1b"/><path d="m386.16,38.72l-1.36-8.83h-16.41v7.6h10.17v37.18h-10.17v7.6h35.03v-7.6h-16.44v-26.87c.62-6.68,4.11-9.65,10.68-9.65h8.84v-8.26h-6.89c-6.16,0-11.09,1.95-13.45,8.83Z" fill="#1d1d1b"/><path d="m436.84,28.35c-12.43,0-19.2,7.19-19.2,19.92v15.1c0,12.73,6.78,19.92,19.2,19.92s19.2-7.19,19.2-19.92v-15.1c0-12.73-6.68-19.92-19.2-19.92Zm10.78,35.94c0,7.39-3.7,11.3-10.78,11.3s-10.78-3.9-10.78-11.3v-16.94c0-7.39,3.7-11.3,10.78-11.3s10.78,3.9,10.78,11.3v16.94Z" fill="#1d1d1b"/><polygon points="488.64 70.76 474.87 29.89 466.04 29.89 484.53 82.26 492.95 82.26 511.12 29.89 502.71 29.89 488.64 70.76" fill="#1d1d1b"/><path d="m552.02,29.89l-.92,6.57c-2.05-5.14-6.47-8.11-13.35-8.11-10.99,0-17.15,7.29-17.15,19.92v15.1c0,12.63,6.16,19.92,17.15,19.92,6.88,0,11.3-2.98,13.35-8.11l.86,7.09h6.53V29.89h-6.47Zm-1.95,36.97c0,4.42-3.59,8.42-10.27,8.42s-10.78-4.11-10.78-10.99v-16.94c0-6.88,3.8-10.99,10.78-10.99s10.27,4,10.27,8.42v22.08Z" fill="#1d1d1b"/><polygon points="235.18 17.4 247.54 0 238.27 0 231.17 11.22 224.19 0 215.03 0 227.28 17.4 235.18 17.4" fill="#1d1d1b"/><polygon points="553.16 0 543.15 0 536.51 17.4 544.07 17.4 553.16 0" fill="#1d1d1b"/><rect x="59" width="499" height="90" fill="none"/></g></svg>}
    </LogoS>
  )
}

export default Logo