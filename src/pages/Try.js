/** @format */

import React, { useEffect, useState } from "react";
import ex from "../ex.json";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const target = [
  "Biceps",
  "Forearms",
  "Lats",
  "Mid back",
  "Lower back",
  "Chest",
  "Triceps",
  "Shoulders",
  "Quads",
  "Hamstrings",
  "Traps",
  "Glutes",
  "Abdominals",
  "Calves",
  "Obliques",
];

const Try = () => {
  const [result, setResult] = useState("Biceps");
  const [exercise, setExercise] = useState([]);
  const [exerciseSide, setExerciseSide] = useState();
  // const [img , setImg ]= useState('')

  const cat = (e) => {
    // window.location.reload(true);

    setResult(e.target.value);
  };

  return (
    <div>
      {target.map((cate, i) => (
        <Button
          key={i}
          variant="contained"
          value={cate}
          onClick={(e) => cat(e)}>
          {cate}
        </Button>
      ))}

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
        {ex.map((clas, i) => (
          <SwiperSlide className="classes-app" key={i}>
            <Stack className="stack-class" position="relative">
              <Grid container position="absolute" zIndex={2}>
                <Grid item xs={12} textAlign="center" mt={5}>
                  {clas.exercise_name ? (
                    <Typography
                      textTransform="uppercase"
                      fontSize={{ xs: "22px", md: "32px" }}
                      color="white"
                      fontWeight="bold">
                      {clas.exercise_name}
                    </Typography>
                  ) : null}
                </Grid>
                <Grid item xs={12} textAlign="center" mt={2}>
                  {/* <Typography
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
                  </Typography> */}
                </Grid>
                <Grid item xs={12} textAlign="center">
                  <Box p={2}>
                    {/* <Typography
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
                    </Typography> */}
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
        slidesPerView={3}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {ex.map((item, i) =>
          item.target.Primary && item.exercise_name && item.videoURL ? (
            item.target.Primary[0] === result ? (
              <SwiperSlide key={i}>
                <Box position="relative">
                  <video className="video" width="750" height="500">
                    <source src={item.videoURL[1]} type="video/mp4" />
                  </video>
                  <Typography
                    top="35%"
                    textTransform="capitalize"
                    //   className="Text-classes"
                    fontSize={{ xs: "10px", sm: "18px", md: "30px" }}
                    color="black">
                    {item.exercise_name}
                  </Typography>
                  <Typography
                    top="55%"
                    textTransform="capitalize"
                    //   className="Text-classes"
                    fontSize={{ xs: "8px", sm: "12px", md: "10px" }}
                    color="black">
                    {item.target.Primary[0]}
                  </Typography>
                </Box>
              </SwiperSlide>
            ) : null
          ) : null
        )}
      </Swiper>
    </div>
  );
};

export default Try;
