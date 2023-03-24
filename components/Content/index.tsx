import { FC, ReactElement } from "react"
import { ContentS } from "./styles"

interface IContent {
  children: ReactElement | ReactElement[];
}

const Content: FC<IContent> = ({
  children
}) => {
  
  return (
    <ContentS>
      {children}
    </ContentS>
  )
}

export default Content