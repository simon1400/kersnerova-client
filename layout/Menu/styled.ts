import styled from "@emotion/styled";

export const MenuS = styled.div<{active: boolean}>(({theme, active}) => `
  position: fixed;
  right: 0;
  top: 0;
  width: ${active ? '100vw' : '0'};
  height: ${active ? "100vh" : '0'};
  z-index: 1000;
  display: flex;
  align-items: center;
  overflow: hidden;
  transition: all 0s ease;
  transition-delay: ${active ? "0s" : '.5s'};
  &:before{
    content: '';
    display: block;
    background: black;
    position: fixed;
    top: 0;
    right: 0;
    width: 1px;
    z-index: 999;
    height: 1px;
    border-radius: 50%;
    transition: all .8s ease;
    transition-delay: ${active ? "0s" : '.5s'};
    transform: scale(${active ? "5000" : '1'})
  }
  nav{
    position: relative;
    z-index: 1001;
    ul{
      margin: 0;
      padding: 0;
      li{
        text-align: right;
        transition: all .5s ease;
        transform: translateY(${active ? 0 : "-20px"});
        opacity: ${active ? 1 : 0};
        &:nth-child(1) {
          transition-delay: .3s;
        }
        &:nth-child(2) {
          transition-delay: .4s;
        }
        &:nth-child(3) {
          transition-delay: .5s;
        }
        &:nth-child(4) {
          transition-delay: .6s;
        }
        &:nth-child(5) {
          transition-delay: .7s;
        }
        &:nth-child(6) {
          transition-delay: .8s;
        }
        &:not(:last-of-type) {
          margin-bottom: 30px;
        }
        a{
          color: white;
          font-size: 50px;
          text-decoration: none;
          line-height: 1.06;
          transition: all .2s ease;
          &:hover{
            color: rgba(255, 255, 255, 0.7);
          }
          &.active{
            border-bottom: 4px solid #ffffff;
          }
        }
      }
    }
  }
  ${theme.breakpoints.down('md')} {
    nav{
      ul{
        li{
          &:not(:last-of-type) {
            margin-bottom: 19px;
          }
          a{
            font-size: 30px;
            line-height: 1.07;
            &.active{
              border-bottom: 2px solid #ffffff;
            }
          }
        }
      }
    }
  }
`)