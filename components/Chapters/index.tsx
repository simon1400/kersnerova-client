import ChapterItem from "components/ChapterItem";
import { FC } from "react"

interface IChapters {
  data: any
}

const Chapters: FC<IChapters> = ({
  data
}) => {

  const strCE = "ComponentChapter"
  
  return data.map((item: any, index: number) => {
    
    if(item.__typename === strCE+"Content") {
      return <ChapterItem key={index} content={item.content} />
    }else if(item.__typename === strCE+"Title") {
      return <ChapterItem key={index} head={item.title} />
    }else if(item.__typename === strCE+"Button") {
      return <ChapterItem 
                key={index} 
                button={item} />
    }
    return null
  })
  
}

export default Chapters