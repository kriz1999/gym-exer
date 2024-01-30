/** @format */

import React from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Grid, Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const SwiperSwich = ({ item, setItem, array, slids }) => {
  return (
    <div>
      <Swiper
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        style={{
          "--swiper-navigation-color": "rgba(255, 255, 255, 0.39)",
          "--swiper-pagination-color": "rgba(255, 255, 255, 0.39)",
        }}
        loop={true}
        navigation={true}
        thumbs={item ? { swiper: item } : undefined}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper3">
        {array.map((clas, i) => (
          <SwiperSlide className="classes-app" key={i}>
            <Box position="relative" height={{ xs: "500px", md: "600px" }}>
              <img
                src={clas.bg}
                alt={clas.name}
                className="img-class-app"></img>
              <Box
                className={`wave-${slids}`}
                position="absolute"
                top={0}
                zIndex={1}></Box>
              <Grid container position="absolute" top="20%" zIndex={2}>
                <Grid item xs={12} textAlign="center" mt={5}>
                  <Typography
                    textTransform="uppercase"
                    fontSize={{ xs: "28px", md: "50px" }}
                    color="white"
                    fontWeight="bold">
                    {clas.name}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" mt={2}>
                  <Typography
                    color="btncolor.main"
                    fontSize={{ xs: "14px", md: "28px" }}
                    fontWeight="bold">
                    about the class
                  </Typography>
                  <Typography
                    p={2}
                    pt={0}
                    fontSize={{ xs: "11px", md: "18px" }}
                    color="white">
                    {clas.discribe}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Box p={2}>
                    <Typography
                      color="btncolor.main"
                      fontSize={{ xs: "14px", md: "28px" }}
                      fontWeight="bold">
                      see the benefits
                    </Typography>
                    <Typography
                      fontSize={{ xs: "11px", md: "18px" }}
                      color="white">
                      {clas.ben1}
                    </Typography>
                    <Typography
                      fontSize={{ xs: "11px", md: "18px" }}
                      color="white">
                      {clas.ben2}
                    </Typography>
                    <Typography
                      fontSize={{ xs: "11px", md: "18px" }}
                      color="white">
                      {clas.ben3}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
            {/* <Stack className="stack-class" position="relative">
              
              <Box
                className="stack-class-img"
                height={{ xs: "390px", md: "500px" }}>
              
              </Box>

              <Box
                className="stack-class-container"
                position="absolute"
                zIndex={1}></Box>
            </Stack> */}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        breakpoints={{
          300: { slidesPerView: 2.7 },
          600: { slidesPerView: 4.5 },
        }}
        onSwiper={setItem}
        loop={true}
        spaceBetween={10}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {array.map((clas, i) => (
          <SwiperSlide key={i} className="swich-class">
            <img src={clas.img} alt={clas.name} className="img-class"></img>
            <Typography
              top="35%"
              textTransform="capitalize"
              className="Text-classes"
              fontSize={{ xs: "10px", sm: "18px", md: "25px" }}
              color="white">
              {clas.name}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSwich;
