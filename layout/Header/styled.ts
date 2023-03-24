import styled from "@emotion/styled";

export const HeaderS = styled.div(({theme}) => `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 0;
  background: white;
  svg{
    height: 65px;
    position: relative;
    z-index: 1001;
    transition: all .5s ease;
  }
  ${theme.breakpoints.down('md')} {
    padding: 7px 0;
    svg{
      height: 25px;
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