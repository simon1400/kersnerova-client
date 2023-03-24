import { Container, Grid, Typography } from "@mui/material";
import Content from "components/Content";
import { client } from "lib/api";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { wrapper } from "stores";
import { ImgWrap } from "styles/img-wrap";
import { Section } from "styles/section";

import {getArticle} from 'queries/articles'
import { NextPage } from "next";
import { IMeta } from "types/Meta";
import Chapters from "components/Chapters";

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({params}) => {

    if(!params?.article) {
      return {
        notFound: true
      }
    }
    
    const { data } = await client.query({
      query: getArticle,
      variables: {
        slug: params.article
      }
    });

    if(!data.articles.data || !data.articles.data.length) {
      return {
        notFound: true
      }
    }

    const article = data.articles.data[0].attributes
    // const meta = homepage?.meta

    // store.dispatch(changeTitle(meta?.title || 'Úvod'))
    // store.dispatch(changeDescription(meta?.description || ''))

    return {
      props: {
        article
      }
    }
  }
)

interface IArticle {
  article: {
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
  }
}

const Article: NextPage<IArticle> = ({article}) => {

  const ref = useRef<HTMLDivElement>(null)

  const [marginImg, setMarginImg] = useState(0)

  useEffect(() => {
    if(ref.current) {
      setMarginImg(ref.current.offsetLeft)
    }
  }, [ref.current])

  return (
    <main>
      <Section big top>
        <Container maxWidth="xl">
          <Grid container spacing={14}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1">
                <span>{article.title}</span>
              </Typography>
              <Chapters data={article.chapters}/>
            </Grid>
            <Grid item xs={12} md={6}>
              <ImgWrap ref={ref} marginImg={marginImg} big>
                {marginImg !== 0 && <Image src="/assets/img.png" fill alt="" />}
              </ImgWrap>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </main>
  );
};

export default Article;
