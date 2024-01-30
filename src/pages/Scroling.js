/** @format */
import React from "react";
import "./scrolling.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Scroling = ({ array, title, arraySimilar }) => {
  const navigate = useNavigate();

  const hanle = (el) => {
    navigate("/ex-detail", {
      state: { data: el },
    });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box>
      <Typography
        textTransform="capitalize"
        mb={3}
        color="secondary"
        fontSize={{ xs: "25px", md: "35px" }}
        fontWeight={700}>
        {title}
      </Typography>
      <Swiper
        className="scroll-app"
        spaceBetween={30}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          400: { slidesPerView: 2 },
          600: { slidesPerView: 3 },
        }}>
        {array
          ? array.slice(0, 6).map((el, index) => (
              <SwiperSlide key={index}>
                <a
                  className="a-scroll"
                  href={`https://www.youtube.com/watch?v=${el.videoId}`}
                  target="_blank"
                  rel="noreferrer">
                  <img
                    className="img-scrolling"
                    src={el.thumbnail[0].url}
                    alt="/"></img>
                  <Typography
                    textAlign="center"
                    color="black"
                    fontSize={{ xs: "12px", md: "18px" }}>
                    {el.title}
                  </Typography>
                  <Box className="time-video">
                    <Typography textAlign="center" color="white">
                      {el.lengthText}
                    </Typography>
                  </Box>
                </a>
              </SwiperSlide>
            ))
          : null}
        {arraySimilar
          ? arraySimilar.slice(0, 10).map((el, index) => (
              <SwiperSlide key={index}>
                <Button onClick={() => hanle(el)}>
                  {" "}
                  <img src={el.gifUrl} alt="/"></img>
                </Button>
                <Button onClick={() => hanle(el)}>
                  <Typography
                    textAlign="center"
                    color="black"
                    fontSize={{ xs: "12px", md: "18px" }}>
                    {el.name}
                  </Typography>
                </Button>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
    </Box>
  );
};

export default Scroling;
