/** @format */

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import photo1 from "../img/testi/istockphoto-1142401173-1024x1024-transformed.jpeg";
import photo2 from "../img/testi/istockphoto-1387475299-1024x1024-transformed.jpeg";
import photo3 from "../img/testi/istockphoto-503188721-1024x1024-transformed.jpeg";
import photo4 from "../img/testi/istockphoto-539246455-1024x1024-transformed.jpeg";
import "swiper/css";
import "swiper/css/effect-cards";
import "./styles.css";
import { EffectCards } from "swiper/modules";
import { Box, Container, Grid, Typography } from "@mui/material";
import Bigcard from "./Bigcard";

export default function TestiSmall({ slids }) {
  const myArray = [
    {
      name: "JEANNY VO",
      text: "Push! is a great environment for total body wellness for women of all ages and fitness levels. The facility is clean, the staff are friendly, and there is a variety of group classes, personal training, massage, and skin care. By far my favorite gym!.",
      condsion: "PERSONAL TRAINING",
      img: photo4,
    },

    {
      name: "KATHRN BEV",
      text: "’ve been attending for a week now and I absolutely LOVE it! Everyone from staff to members are all such a joy to be around. Very positive atmosphere..",
      condsion: "PERSONAL TRAINING",
      img: photo1,
    },

    {
      name: "DEVON MORF",
      text: "It has been almost one year and I have lost weight and increased my strength.  I find the coaches – so motivating and supportive.  During the shred I worked with Dave and he was very motivating and held me accountable.  The nutritional guidance and meal plans are easy to follow that is realistic and plenty of food.",

      condsion: "CLIENT",
      img: photo2,
    },

    {
      name: "JEROM LANE",
      text: "My greatest achievement since training here, is I gained muscle, improved form, and strengthened my core. The Bootcamps are always different and always challenging and good class times.  The trainers are good motivators and there is a great combination of young and old clients and everyone feels welcome.  If you are thinking about joining, you won’t regret it",

      condsion: "CLIENT",
      img: photo3,
    },
  ];

  const [slideDetails, setSlideDetails] = useState(myArray[0]);

  const handleActiveSlideChange = (swiper) => {
    const activeSlide = swiper.activeIndex;

    setSlideDetails(myArray[activeSlide]);
  };

  return (
    <Container maxWidth="lg">
      <Typography
        fontSize={{ xs: "30px", md: "50px" }}
        color="text.main"
        pl={2}
        pt={5}>
        Testimonials
      </Typography>
      <Grid
        overflow="hidden"
        container
        pt={5}
        pb={5}
        spacing={{ xs: 0, md: 10 }}
        justifyContent="center">
        <Grid item xs={8} sm={8} md={5} mb={5} ml={5}>
          <Swiper
            onActiveIndexChange={handleActiveSlideChange}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper-testi">
            {myArray.map((item) => (
              <SwiperSlide key={item.name} className="SwiperS">
                <Box
                  position="relative"
                  width="100%"
                  height={{ xs: "300px", md: "400px" }}
                  className="box-test">
                  <img
                    className="img-swip"
                    src={item.img}
                    alt="testi name"></img>
                  <Box
                    position="absolute"
                    top={0}
                    className={`wave-${slids}`}></Box>
                  <Typography
                    textAlign="center"
                    className="typography-test"
                    fontSize={{ xs: "15px", sm: "20px", md: "25px" }}
                    position="absolute"
                    bottom={{ xs: 70, md: 100 }}>
                    {item.condsion}
                  </Typography>
                  <Typography
                    textAlign="center"
                    fontSize={{ xs: "25px", sm: "35px", md: "40px" }}
                    position="absolute"
                    className="typography-test"
                    bottom={20}>
                    {item.name}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        <Grid item xs={12} sm={10} md={6} pt={3}>
          <Bigcard item={slideDetails}></Bigcard>
        </Grid>
      </Grid>
    </Container>
  );
}
