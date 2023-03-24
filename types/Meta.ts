export interface IMeta {
  title: string;
  description: string;
  image: {
    data: {
      attributes: {
        url: string;
        alternativeText?: string;
      };
    };
  };
}