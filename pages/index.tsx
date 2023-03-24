import { Container, Grid, Typography } from "@mui/material"
import Animation from "components/Animation"
import Slider from "components/Slider"
import { client } from "lib/api"
import homepageQuery from "queries/homepage"
import { getLastPosts } from "queries/posts"
import { FC } from "react"
import { wrapper } from "stores"
import { Section } from "styles/section"
import { IShortPost } from "types/ShortPosts"

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async (ctx) => {
    
    const { data: homepageData } = await client.query({ query: homepageQuery });
    const { data: postsData } = await client.query({ query: getLastPosts });

    const homepage = homepageData.homepage.data.attributes
    const posts = postsData.posts.data.map((item: any) => item.attributes)
    // const meta = homepage?.meta

    // store.dispatch(changeTitle(meta?.title || 'Úvod'))
    // store.dispatch(changeDescription(meta?.description || ''))

    return {
      props: {
        homepage,
        posts
      }
    }
  }
)

interface IHomepage {
  homepage: {
    content: string
  }
  posts: IShortPost[]
}

const Homepage: FC<IHomepage> = ({
  homepage,
  posts
}) => {

  return (
    <main>
      <Animation />
      <Section>
        <Container maxWidth="xl">
          <Grid container>
            <Grid item xs={12} lg={6}>
              <Typography dangerouslySetInnerHTML={{__html: homepage.content}} />
            </Grid>
          </Grid>
        </Container>
      </Section>
      <Slider data={posts} />
    </main>
  )
}

export default Homepage