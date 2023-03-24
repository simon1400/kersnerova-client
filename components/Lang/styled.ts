import styled from "@emotion/styled";

export const LangS = styled.nav<{active: boolean}>(({theme, active}) => `
  margin-right: 30px;
  position: relative;
  z-index: 1001;
  ul{
    li{
      display: inline-block;
      &:not(:first-of-type) {
        margin-left: 10px;
      }
      &:not(:last-of-type) {
        margin-right: 10px;
      }
      a{
        font-size: 20px;
        color: ${active ? '#ffffff' : theme.palette.primary.main}66;
        text-decoration: none;
      }
      .active{
        color: ${theme.palette.primary.main};
      }
    }
  }
  ${theme.breakpoints.down('md')} {
    margin-right: 20px;
    ul{
      li{
        a{
          font-size: 13px;
          font-weight: 500;
        }
      }
    }
  }
`)