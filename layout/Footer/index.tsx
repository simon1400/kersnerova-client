import { Container, Grid, Typography } from "@mui/material"
import { FooterS } from "./styled"
import Logo from 'public/assets/kersnerova-logo.svg'
import globalQuery from "queries/global"
import { useQuery } from "@apollo/client"

const Footer = () => {

  const {data, loading} = useQuery(globalQuery)

  if(loading) {
    return <></>
  }

  return (
    <FooterS>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item xs={6}>
            <Logo fill="#fff" width="286" height="50" />
            <Typography component="div" dangerouslySetInnerHTML={{__html: data.global.data.attributes.footerInfo}} />
          </Grid>
          <Grid item xs={6}>
            
          </Grid>
        </Grid>
      </Container>
    </FooterS>
  )
}

export default Footer