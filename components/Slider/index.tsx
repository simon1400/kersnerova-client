import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ShortItem from "components/ShortItem";
import { Navigation } from "swiper";
import { SliderWrap, SwiperNav } from "./styled";
import Arrow from "public/assets/arrow.svg";
import { IShortPost } from "types/ShortPosts";
import { FC } from "react";

interface ISlider {
  data: IShortPost[];
  title: string;
}

const Slider: FC<ISlider> = ({ title, data }) => {
  const mediaMd = useMediaQuery("(max-width:960px)");

  return (
    <SliderWrap>
      <Container maxWidth="xl">
        <Typography variant="h2">
          <span>{title}</span>
        </Typography>
        <Swiper
          style={{
            overflow: "visible",
          }}
          modules={[Navigation]}
          navigation={{ nextEl: "#swiper-forward", prevEl: "#swiper-back" }}
          spaceBetween={mediaMd ? 20 : 60}
          slidesPerView={mediaMd ? 1.2 : 2.5}
        >
          {data.map((item, idx) => (
            <SwiperSlide style={{height: 'auto'}} key={idx}>
              <ShortItem fullHeight removemargin data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNav>
          <IconButton disableRipple id="swiper-back" aria-label="swiper-back">
            <Arrow />
          </IconButton>
          <IconButton
            disableRipple
            id="swiper-forward"
            aria-label="swiper-forward"
          >
            <Arrow />
          </IconButton>
        </SwiperNav>
      </Container>
    </SliderWrap>
  );
};

export default Slider;
