import styled from "@emotion/styled";

export const HeaderS = styled.div(({theme}) => `
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 0px 0 30px;
  background: white;
  svg{
    height: 65px;
    position: relative;
    z-index: 1001;
    transition: all .5s ease;
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
`