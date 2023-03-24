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
  transition: all .5s ease;
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
        &:not(:last-of-type) {
          margin-bottom: 30px;
        }
        a{
          color: white;
          font-size: 50px;
          text-decoration: none;
          line-height: 1.06;
        }
      }
    }
  }
`)