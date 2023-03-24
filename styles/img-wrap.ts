import styled from "@emotion/styled";

export const ImgWrap = styled.div<{big?: boolean; marginImg?: number}>(({theme, big, marginImg}) => `
  width: ${big ? `calc(100vw - ${marginImg}px)` : "100%"};
  height: 100%;
  position: relative;
  img{
    object-fit: contain;
    object-position: top;
    width: 100%;
    height: auto!important;
  }
  ${theme.breakpoints.down('md')} {
    margin-top: 40px;
    img{
      position: relative!important;
      margin-left: ${big ? `-${marginImg}px` : "0"};
      width: ${big ? `100vw` : "100%"}!important;
      margin-bottom: ${big ? `-6px` : "0"}!important;
    }
  }
`)