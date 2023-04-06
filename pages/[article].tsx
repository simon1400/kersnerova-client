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
import Page from "layout/Page";
import { changeDescription, changeLocalizations, changeTitle } from "stores/slices/metaSlices";

export const getServerSideProps = wrapper.getServerSideProps((store) =>
  async ({params, locale}) => {

    if(!params?.article) {
      return {
        notFound: true
      }
    }
    
    const { data } = await client.query({
      query: getArticle,
      variables: {
        slug: params.article,
        locale
      }
    });

    if(!data.articles.data || !data.articles.data.length) {
      return {
        notFound: true
      }
    }

    const article = data.articles.data[0].attributes
    const localizations = [
      {
        locale,
        slug: params.article
      }
    ]
    if(article.localizations.data?.length){
      localizations.push(article.localizations.data[0].attributes)
    }
    const meta = article?.meta

    store.dispatch(changeTitle(meta?.title || article.title))
    store.dispatch(changeDescription(meta?.description || ''))
    store.dispatch(changeLocalizations(localizations))

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

const APP_API = process.env.APP_API

const Article: NextPage<IArticle> = ({article}) => {

  return (
    <Page>
      <Section big top>
        <Container maxWidth="xl">
          <Grid container spacing={14}>
            <Grid item xs={12} md={6}>
              <Typography variant="h1">
                <span>{article.title}</span>
              </Typography>
              <Content>
                <Chapters data={article.chapters}/>
              </Content>
            </Grid>
            <Grid item xs={12} md={6}>
              <ImgWrap>
                {article.image.data && <Image src={APP_API+article.image.data.attributes.url+"?format=webp&width=670"} fill alt="" />}
              </ImgWrap>
            </Grid>
          </Grid>
        </Container>
      </Section>
    </Page>
  );
};

export default Article;
