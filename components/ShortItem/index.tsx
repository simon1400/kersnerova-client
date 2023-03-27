import { Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";
import { IShortPost } from "types/ShortPosts";
import { ShortItemS } from "./styled";

const APP_API = process.env.APP_API

interface IShortItem {
  removemargin?: boolean;
  fullHeight?: boolean;
  data: IShortPost;
}

const ShortItem: FC<IShortItem> = ({
  removemargin = false,
  data,
  fullHeight = false,
}) => {
  return (
    <ShortItemS
      fullHeight={fullHeight}
      removemargin={removemargin}
      href={`/blog/${data.slug}`}
      passHref
    >
      {data.image.data && <Image src={APP_API+data.image.data.attributes.url} fill alt="" />}
      <Typography variant="h2">{data.title}</Typography>
      <Typography
        component="div"
        dangerouslySetInnerHTML={{ __html: data.perex }}
      />
    </ShortItemS>
  );
};

export default ShortItem;
