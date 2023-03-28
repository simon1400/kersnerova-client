import styled from "@emotion/styled";

export const LogoS = styled.div`
  svg{
    position: absolute;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    transition: all .5s ease;
    g{
      rect{
        cursor: pointer;
      }
    }
  }
`