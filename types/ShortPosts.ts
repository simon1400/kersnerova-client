import { IImage } from "./image";

export interface IShortPost {
  title: string;
  slug: string;
  perex: string;
  image: IImage;
}