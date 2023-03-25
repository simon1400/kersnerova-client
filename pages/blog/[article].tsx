import { Container, Grid, Typography } from "@mui/material";
import Chapters from "components/Chapters";
import Page from "layout/Page";
import { client } from "lib/api";
import { NextPage } from "next";
import Image from "next/image";
import { getPost } from "queries/posts";
import { wrapper } from "stores";
import { changeDescription, changeTitle } from "stores/slices/metaSlices";
import { ImgWrap } from "styles/img-wrap";
import { Section } from "styles/section";
import { IMeta } from "types/Meta";

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ params, locale }) => {
      if (!params?.article) {
        return {
          notFound: true,
        };
      }

      const { data } = await client.query({
        query: getPost,
        variables: {
          slug: params.article,
          locale
        },
      });

      if (!data.posts.data || !data.posts.data.length) {
        return {
          notFound: true,
        };
      }

      const post = data.posts.data[0].attributes;
      const meta = post?.meta

      store.dispatch(changeTitle(meta?.title || post.title))
      store.dispatch(changeDescription(meta?.description || ''))

      return {
        props: {
          post,
        },
      };
    }
);

interface IPost {
  post: {
    title: string;
    chapters: any;
    image: {
      data: {
        attributes: {
          url: string;
          alternativeText?: string;
        };
      };
    };
    meta?: IMeta;
  };
}

const APP_API = process.env.APP_API

const Post: NextPage<IPost> = ({ post }) => {
  return (
    <Page>
      <Section big>
        <Container maxWidth="xl">
          <Typography variant="h1">
            <span>{post.title}</span>
          </Typography>
          <Grid container spacing={14}>
            <Grid item xs={12} md={6}>
              <Chapters data={post.chapters} />
            </Grid>
            <Grid item xs={12} md={6}>
              <ImgWrap>
                {post.image.data && <Image src={APP_API+post.image.data.attributes.url} fill alt="" />}
              </ImgWrap>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Page>
  );
};

export default Post;
