import { Container, Grid, Typography } from "@mui/material";
import Animation from "components/Animation";
import Slider from "components/Slider";
import Page from "layout/Page";
import { client } from "lib/api";
import homepageQuery from "queries/homepage";
import { getLastPosts } from "queries/posts";
import { FC } from "react";
import { wrapper } from "stores";
import { changeDescription, changeLocalizations, changeTitle } from "stores/slices/metaSlices";
import { Section } from "styles/section";
import { IShortPost } from "types/ShortPosts";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async ({locale}) => {
    const { data: homepageData } = await client.query({ query: homepageQuery, variables: {locale} });
    const { data: postsData } = await client.query({ query: getLastPosts, variables: {locale} });

    const homepage = homepageData.homepage.data.attributes;
    const posts = postsData.posts.data.map((item: any) => item.attributes);
    const meta = homepage?.meta;

    const localizations = [
      {
        locale: 'cs',
        slug: '/'
      },
      {
        locale: 'en',
        slug: '/'
      },
    ]

    store.dispatch(changeTitle(meta?.title || "Úvod"));
    store.dispatch(changeDescription(meta?.description || ""));
    store.dispatch(changeLocalizations(localizations))

    return {
      props: {
        homepage,
        posts,
      },
    };
  }
);

interface IHomepage {
  homepage: {
    content: string;
    sliderTitle: string;
  };
  posts: IShortPost[];
}

const Homepage: FC<IHomepage> = ({ homepage, posts }) => {
  return (
    <Page>
      <Animation />
      <Section>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Typography
                component="div"
                dangerouslySetInnerHTML={{ __html: homepage.content }}
              />
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Slider title={homepage.sliderTitle} data={posts} />
    </Page>
  );
};

export default Homepage;
