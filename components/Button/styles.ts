import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const ButtonS = styled(Button)(({theme}) => `
  text-transform: none;
  min-width: 260px;
  height: 60px;
  font-size: 21px;
  font-weight: 500px;
  line-height: 1;
  border: 1.5px solid ${theme.palette.primary.main};
  border-radius: 0;
  &:hover{
    background: white;
    color: ${theme.palette.primary.main};
  }
  ${theme.breakpoints.down('md')} {
    min-width: 165px;
    height: 44px;
    font-size: 16px;
  }
`)