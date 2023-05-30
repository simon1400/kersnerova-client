import styled from "@emotion/styled";

export const Animations = styled.div(({theme}) => `
  height: 100vh;
  position: relative;
  overflow: hidden;
  @keyframes arrowAnimation {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
  > div:last-of-type {
    position: absolute;
    left: 50%;
    bottom: 70px;
    transform: translateX(-50%);
    cursor: pointer;
    width: 31px;
    height: 35px;
    &:hover{
      > svg {
        transform: translateY(10px) rotate(90deg);
        left: 50%;
      }
    }
    > svg {
      transform: translateY(0px) rotate(90deg); 
      opacity: 0;
      margin-left: -2px;
      margin-top: 2px;
      animation-name: arrowAnimation;
      animation-duration: 1s;
      animation-delay: 5.6s;
      animation-fill-mode: forwards;
      transition: all .2s ease;
    }
  }
  ${theme.breakpoints.down('md')} {
    > div:last-of-type > svg {
      bottom: 120px;
    }
  }
  @media(min-width: 1560px) {
    > div:first-of-type svg {
      width: auto!important;
      display: block;
      position: relative;
      left: 50%;
      transform: translateX(-50%) translate3d(0px, 0px, 0px)!important;
    }
  }
`)


