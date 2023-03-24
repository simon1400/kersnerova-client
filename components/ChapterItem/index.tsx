import { Typography } from "@mui/material"
import Button from "components/Button";
import Content from "components/Content";
import { FC } from "react"

interface ChapterProps {
  content?: string;
  head?: string;
  button?: {
    link: string;
    text: string;
  };
}

const ChapterItem: FC<ChapterProps> = ({
  content = "",
  head = "",
  button = undefined,
}) => {

  return (
    <Content>
      <>
        {head && <Typography variant="h2">{head}</Typography>}
        {content && <Typography component="div" dangerouslySetInnerHTML={{__html: content}} />}
        {button && <Button href={button.link}>{button.text}</Button>}
      </>
    </Content>
  )
}



export default ChapterItem