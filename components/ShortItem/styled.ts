import styled from "@emotion/styled";
import Link from "next/link";

export const ShortItemS = styled(Link)<{removemargin?: boolean; fullHeight: boolean}>(({theme, removemargin = false, fullHeight}) => `
  border: 1.5px solid #1616151A;
  padding: 50px;
  height: ${fullHeight ? "calc(100% - 100px)" : 'auto'};
  position: relative;
  transition: all .5s ease;
  display: block;
  text-decoration: none;
  margin-bottom: ${removemargin ? "0" : "70px"};
  > * {
    transition: all .5s ease;
  }
  img{
    object-fit: cover;
    object-position: center;
    z-index: -1;
    opacity: 0;
  }
  h2 {
    margin-bottom: 40px;
  }
  &:hover{
    background-color: rgba(22, 22, 21, 0.6);
    img{
      opacity: 1;
    }
    > * {
      color: white;
    }
  }
  ${theme.breakpoints.down('md')} {
    padding: 20px;
    height: ${fullHeight ? "calc(100% - 40px)" : 'auto'};
    margin-bottom: ${removemargin ? "0" : "20px"};
    h2{
      margin-bottom: 20px;
    }
  }
`)