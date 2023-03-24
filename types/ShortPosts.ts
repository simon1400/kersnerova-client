export interface IShortPost {
  title: string;
  slug: string;
  perex: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}