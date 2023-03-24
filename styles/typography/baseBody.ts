import { paragraph } from "./paragraph";

export const baseBody = (theme: any) => ({
  color: "rgba(0, 0, 0, .8)",
  "&::selection": {
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff'
  },
  p: paragraph(theme),
  ul: {
    padding: 0,
    li: {
      listStyleType: "none",
    }
  },
  ol: {
    paddingLeft: 0,
    listStyle: 'none',
    counterReset: 'item',
    li: {
      listStyleType: "none",
      paddingLeft: "29px",
      fontSize: '21px',
      position: "relative",
      lineHeilght: 1.67,
      counterIncrement: 'item',
      p: {
        marginTop: 0,
        marginBottom: 0,
      },
      "&:before": {
        content: `counter(item)"."`,
        display: "block",
        position: "absolute",
        fontWeight: 500,
        left: 0,
      }
    }
  },
})