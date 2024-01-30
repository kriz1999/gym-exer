/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Box, Container, Stack, Typography } from "@mui/material";

const Slids = ({ slids }) => {
  return (
    <Stack className={slids} p={2} mb={5}>
      <Container maxWidth="lg">
        <Swiper
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            576: {
              slidesPerView: 3,
            },
            790: {
              slidesPerView: 4,
            },
          }}
          autoplay={{
            delay: 1000,
          }}
          modules={[Autoplay, Navigation]}
          className="mySwiper-line">
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="btncolor.main">
              GET STARTED TODAY
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="text.main">
              BUILD STRONG HABITS
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="btncolor.main">
              GET STARTED TODAY
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="text.main">
              BUILD STRONG HABITS
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="btncolor.main">
              GET STARTED TODAY
            </Typography>
          </SwiperSlide>
          <SwiperSlide>
            <Typography
              fontSize={{ xs: "10px", sm: "11px", md: "12px", lg: "15px" }}
              fontWeight="bold"
              textAlign="center"
              color="text.main">
              BUILD STRONG HABITS
            </Typography>
          </SwiperSlide>
        </Swiper>
      </Container>
    </Stack>
  );
};

export default Slids;
