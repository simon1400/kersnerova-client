import { baseBody } from "./baseBody";
import { baseHead } from "./baseHead";

export const typography = (theme: any) => ({
  body1: {
    ...baseBody(theme)
  },
  body2: {
    ...baseBody(theme)
  },
  h1: {
    fontSize: "50px",
    lineHeight: 1.38,
    marginBottom: "120px",
    span: {
      borderBottom: '6px solid black'
    },
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '32px',
      marginBottom: "40px",
      span: {
        borderBottom: '3px solid black'
      }
    },
  },
  h2: {
    fontSize: "40px",
    lineHeight: 1.23,
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '24px',
    },
  },
  h3: {
    fontSize: "27px",
    lineHeight: 1.22,
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '20px',
    },
  },
  h4: {
    fontSize: "21px",
    lineHeight: 1.24,
    ...baseHead(theme),
    [theme.breakpoints.down('md')]: {
      fontSize: '16px',
    },
  },
})