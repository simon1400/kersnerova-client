import styled from "@emotion/styled";

export const SwiperNav = styled.div(({theme}) => `
  display: flex;
  margin-top: 60px;
  button{
    border: none;
    background: transparent;
    svg{
      color: black;
    }
  }
  ${theme.breakpoints.down('md')} {
    margin-top: 30px;
  }
`)

export const SliderWrap = styled.div(({theme}) => `
  padding-top: 90px;
  padding-bottom: 190px;
  > div > h2{
    margin-bottom: 70px;
    span{
      border-bottom: 6px solid black;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding-top: 40px;
    > div > h2{
      margin-bottom: 40px;
      span{
        border-bottom: 3px solid black;
      }
    }
  }
  
`)