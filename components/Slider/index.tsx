import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container, IconButton, Typography, useMediaQuery } from '@mui/material';
import ShortItem from 'components/ShortItem';
import { Navigation } from 'swiper';
import { SliderWrap, SwiperNav } from './styled';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IShortPost } from 'types/ShortPosts';
import { FC } from 'react';

interface ISlider {
  data: IShortPost[]
}

const Slider: FC<ISlider> = ({data}) => {

  const mediaMd = useMediaQuery("(max-width:960px)")

  return (
    <SliderWrap>
      <Container maxWidth="xl">
        <Typography variant="h2"><span>Články</span></Typography>
        <Swiper
          style={{
            overflow: 'visible'
          }}
          modules={[Navigation]}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          spaceBetween={mediaMd ? 20 : 60}
          slidesPerView={mediaMd ? 1.2 : 2.5}
        >
          {data.map((item, idx) => <SwiperSlide key={idx}><ShortItem removemargin data={item}/></SwiperSlide>)}
        </Swiper>
        <SwiperNav>
          <IconButton id="swiper-back" aria-label="swiper-back">
            <ArrowBackIcon />
          </IconButton>
          <IconButton id="swiper-forward" aria-label="swiper-forward">
          <ArrowForwardIcon id="swiper-forward" />
          </IconButton>
        </SwiperNav>
      </Container>
    </SliderWrap>
  )
}

export default Slider