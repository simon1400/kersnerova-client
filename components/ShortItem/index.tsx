import { Typography } from "@mui/material"
import Image from "next/image"
import { FC } from "react"
import { IShortPost } from "types/ShortPosts";
import { ShortItemS } from "./styled"

interface IShortItem { 
  removemargin?: boolean;
  data: IShortPost;
}

const ShortItem: FC<IShortItem> = ({removemargin = false, data}) => {
  return (
    <ShortItemS removemargin={removemargin} href={`/blog/${data.slug}`} passHref>
      <Image src="/assets/img.png" fill alt="" />
      <Typography variant="h2">{data.title}</Typography>
      <Typography dangerouslySetInnerHTML={{__html: data.perex}} />
    </ShortItemS>
  )
}

export default ShortItem