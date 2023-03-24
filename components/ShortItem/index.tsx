import { Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { IShortPost } from "types/ShortPosts";
import { ShortItemS } from "./styled"

interface IShortItem { 
  removeMargin?: boolean;
  data: IShortPost;
}

const ShortItem: FC<IShortItem> = ({removeMargin = false, data}) => {
  return (
    <ShortItemS removeMargin={removeMargin} href={`/blog/${data.slug}`} passHref>
      <Image src="/assets/img.png" fill alt="" />
      <Typography variant="h2">{data.title}</Typography>
      <Typography dangerouslySetInnerHTML={{__html: data.perex}} />
    </ShortItemS>
  )
}

export default ShortItem