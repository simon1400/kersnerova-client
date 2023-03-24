export const paragraph = (theme: any) => ({
  fontSize: '21px',
  lineHeight: 1.67,
  [theme.breakpoints.down('md')]: {
    fontSize: '16px',
    lineHeight: 1.69,
  },
  a: {
    position: "relative",
    color: "rgba(0, 0, 0, .8)",
    textDecoration: "none",
    transition: "all .2s ease",
    borderBottom: `1.5px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    }
  }
})