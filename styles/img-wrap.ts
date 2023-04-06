import styled from "@emotion/styled";

export const ImgWrap = styled.div(({theme}) => `
  width: 100%;
  height: 100%;
  position: relative;
  img{
    object-fit: contain;
    object-position: top;
    position: relative!important;
    width: 100%;
    height: auto!important;
  }
  ${theme.breakpoints.down('md')} {
    margin-top: 40px;
    img{
      position: relative!important;
      margin-left: 0;
      width: 100%!important;
      margin-bottom: 0!important;
    }
  }
`)