/** @format */

import React from "react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Grid, Box, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

import { useEffect, useState } from "react";

const ExerciseSide = ({ item, setItem, array, result }) => {
  const [exerciseSide, setExerciseSide] = useState();

  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "rgba(255, 255, 255, 0.39)",
          "--swiper-pagination-color": "rgba(255, 255, 255, 0.39)",
        }}
        loop={true}
        navigation={true}
        thumbs={exerciseSide ? { swiper: exerciseSide } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3">
        {array.map((clas, i) => (
          <SwiperSlide className="classes-app" key={i}>
            <Stack className="stack-class" position="relative">
              <Grid container position="absolute" zIndex={2}>
                <Grid item xs={12} textAlign="center" mt={5}>
                  <Typography
                    textTransform="uppercase"
                    fontSize={{ xs: "22px", md: "32px" }}
                    color="white"
                    fontWeight="bold">
                    {clas.exercise_name}
                  </Typography>
                </Grid>
                <Grid item xs={12} textAlign="center" mt={2}>
                  <Typography
                    color="red"
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
                      color="red"
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
              <Box height={{ xs: "390px", md: "500px" }}>
                {/* <video>
                  <source src={clas.videoURL} type="video/mp4" />
                </video> */}
              </Box>

              <Box
                className="stack-class-container"
                position="absolute"
                zIndex={1}></Box>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setExerciseSide}
        spaceBetween={10}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {array.map(
          (clas, i) =>
            clas.target.Primary &&
            clas.target.Primary.map((tar) =>
              tar === result ? (
                <SwiperSlide key={i}>
                  <Box position="relative">
                    {/* <video className="video" width="750" height="500">
                      <source src={clas.videoURL} type="video/mp4" />
                    </video> */}
                    <Typography
                      top="35%"
                      textTransform="capitalize"
                      //   className="Text-classes"
                      fontSize={{ xs: "10px", sm: "18px", md: "30px" }}
                      color="black">
                      {clas.exercise_name}
                    </Typography>
                    <Typography
                      top="55%"
                      textTransform="capitalize"
                      //   className="Text-classes"
                      fontSize={{ xs: "8px", sm: "12px", md: "10px" }}
                      color="black">
                      {tar}
                    </Typography>
                  </Box>
                </SwiperSlide>
              ) : null
            )
        )}
      </Swiper>
    </div>
  );
};

export default ExerciseSide;
