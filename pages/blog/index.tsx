import { Container, Grid, Typography } from "@mui/material"
import ShortItem from "components/ShortItem"
import Page from "layout/Page"
import { client } from "lib/api"
import blogQuery from "queries/blog"
import { getAllPosts } from "queries/posts"
import { FC } from "react"
import { wrapper } from "stores"
import { changeDescription, changeTitle } from "stores/slices/metaSlices"
import { Section } from "styles/section"

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({params}) => {
    
    const { data } = await client.query({query: getAllPosts});
    const { data: blogData } = await client.query({query: blogQuery});

    const posts = data.posts.data.map((item: any) => item.attributes)
    const blog = blogData.blog.data.attributes
    const meta = blog?.meta

    store.dispatch(changeTitle(meta?.title || 'Blog'))
    store.dispatch(changeDescription(meta?.description || ''))

    return {
      props: {
        posts,
        blog
      }
    }
  }
)

interface IBlog {
  posts: {
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
  }[]
  blog: {
    title: string;
  }
}

const Blog: FC<IBlog> = ({posts, blog}) => {
  return (
    <Page>
      <Section big>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} md={7}>
              <Typography variant="h1"><span>{blog.title}</span></Typography>
              {posts.map((item, idx) => <ShortItem key={idx} data={item} />)}
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Page>
  )
}

export default Blog
