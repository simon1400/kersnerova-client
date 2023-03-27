import styled from "@emotion/styled";

export const ContentS = styled.div(({theme}) => `
  padding-bottom: 200px;
  ul {
    padding-left: 0;
    li {
      list-style-type: none;
      padding-left: 29px;
      font-size: 21px;
      position: relative;
      line-height: 1.67;
      p {
        margin-top: 0;
        margin-bottom: 0;
      }
      &:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: 19px;
        width: 11px;
        height: 1.5px;
        background-color: ${theme.palette.primary.main};
      }
    }
  }

  p{
    margin-bottom: 70px;
    &:first-of-type{
      margin-top: 0;
    }
    a:hover{
      color: rgba(0, 0, 0, .5);
    }
  }

  h1 {
    font-size: 50px;
    line-height: 1.38;
    ${theme.breakpoints.down('md')} {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 40px;
    line-height: 1.23;
    margin-bottom: 70px;
    ${theme.breakpoints.down('md')} {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 27px;
    line-height: 1.22;
    ${theme.breakpoints.down('md')} {
      font-size: 20px;
    }
  }
  h4 {
    font-size: 21px;
    line-height: 1.24;
    ${theme.breakpoints.down('md')} {
      font-size: 16px;
    }
  }
  h1, h2, h3, h4, h5 {
    font-weight: 500;
    &::selection {
      background-color: ${theme.palette.primary.main};
    }
  }
`)