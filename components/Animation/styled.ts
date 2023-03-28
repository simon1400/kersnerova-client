import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const arrowAnimation = keyframes`
 0% { opacity: 0; }
 100% { opacity: 1; }
`

export const Animations = styled.div(({theme}) => `
  height: 100vh;
  position: relative;
  overflow: hidden;
  > svg {
    position: absolute;
    cursor: pointer;
    left: 50%;
    bottom: 20px;
    transform: translate(-50%, 0px) rotate(90deg);
    opacity: 0;
    animation-name: ${arrowAnimation};
    animation-duration: 1s;
    animation-delay: 5.6s;
    animation-fill-mode: forwards;
    transition: all .2s ease;
    &:hover{
      transform: translate(-50%, 10px) rotate(90deg);
      left: 50%;
    }
  }
  ${theme.breakpoints.down('md')} {
    > svg {
      bottom: 120px;
    }
  }
  @media(min-width: 1560px) {
    > div svg {
      width: auto!important;
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%) translate3d(0px, 0px, 0px)!important;
    }
  }
`)


