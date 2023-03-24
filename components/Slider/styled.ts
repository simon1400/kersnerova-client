import styled from "@emotion/styled";

export const SwiperNav = styled.div(({theme}) => `
  display: flex;
  margin-top: 60px;
  button{
    border: none;
    background: transparent;
    transition: all .5s ease;
    transform: translateX(0);
    padding: 15px;
    svg{
      color: black;
    }
    &:hover{
      background: transparent;
      &#swiper-back {
        transform: translateX(-5px);
      }
      &#swiper-forward {
        transform: translateX(5px);
      }
    }
    &#swiper-back {
      svg{
        transform: rotate(180deg);
      }
    }
    &#swiper-forward {

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