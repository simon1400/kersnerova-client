import styled from "@emotion/styled";

export const FooterS = styled.footer(({theme}) => `
  background: black;
  position: fixed;
  height: 100vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: flex;
  align-items: end;
  padding-bottom: 50px;
  p{
    color: rgba(255, 255, 255, 0.8);
  }
  svg{
    margin-bottom: 50px;
  }
  ${theme.breakpoints.down('md')} {
    svg{
      height: 33px;
      width: auto;
    }
  }
`)