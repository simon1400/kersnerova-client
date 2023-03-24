import styled from "@emotion/styled";
import Link from "next/link";

export const ShortItemS = styled(Link)<{removeMargin?: boolean}>(({theme, removeMargin = false}) => `
  border: 1.5px solid #1616151A;
  padding: 50px;
  position: relative;
  transition: all .5s ease;
  display: block;
  text-decoration: none;
  margin-bottom: ${removeMargin ? "0" : "70px"};
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
    margin-bottom: ${removeMargin ? "0" : "20px"};
  }
`)