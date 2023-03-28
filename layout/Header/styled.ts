import styled from "@emotion/styled";

export const HeaderS = styled.div(({theme}) => `
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 0 30px;
  background: white;
  svg{
    position: absolute;
    z-index: 999;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    transition: all .5s ease;
    g{
      cursor: pointer;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 0;
    align-items: start;
    svg{
      height: 30px;
    }
  }
`)

export const ControlWrapS = styled.div`
  display: flex;
  align-items: center;
`

export const HamburderWrap = styled.div`
  position: relative; 
  z-index: 1001;
`

export const HeaderWrap = styled.header`
  background: white;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100px;
`