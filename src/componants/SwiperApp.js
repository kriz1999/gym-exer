/** @format */

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Grid } from "swiper/modules";

import ph1 from "../img/team/emily-coach-1.png";
import ph2 from "../img/team/mehrasa-1.png";
import ph3 from "../img/team/erika-1.png";
import ph4 from "../img/team/maxine-yoga-instructor.png";
import ph5 from "../img/team/emily-front-of-house-1.png";
import ph6 from "../img/team/meti-coach.png";
import ph7 from "../img/team/rez-coach.png";
import ph8 from "../img/team/rosie-1.png";
import ph9 from "../img/team/shahin-coach-1.png";

import { Box, Container, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const team = [
  { name: "Emily", position: "coach", img: ph1 },
  { name: "merth", position: "coach", img: ph2 },
  { name: "Erika", position: "coach", img: ph3 },
  { name: "Maxine", position: "coach", img: ph4 },
  { name: "Emily", position: "front of house", img: ph5 },
  { name: "Meti", position: "front of house", img: ph6 },
  { name: "Rez", position: "YOGA INSTRUCTor", img: ph7 },
  { name: "Rosie", position: "MASSAG THERAPisr", img: ph8 },
  { name: "Shahin", position: "AESTHETICIA", img: ph9 },
];
const SwiperApp = () => {
  const [isHovered, setHovered] = useState("");

  const handleoverd = (i) => {
    setHovered(i);
  };
  const handlelave = () => {
    setHovered("");
  };
  return (
    <Container>
      <Typography
        pl={2}
        fontSize={{ xs: "30px", md: "50px" }}
        color="text.main"
        mb={4}>
        OUR TEAM
      </Typography>
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 2.3,
            grid: {
              fill: "row",
              rows: 1,
            },
          },
          600: {
            slidesPerView: 3.5,
            grid: {
              fill: "row",
              rows: 2,
            },
          },
        }}
        spaceBetween={30}
        modules={[Grid]}>
        {team.map((coach, i) => (
          <SwiperSlide key={i}>
            <Box
              className="box-grid-swiper"
              onMouseEnter={() => handleoverd(i)}
              onMouseLeave={() => handlelave(i)}>
              <Box
                className="img-team-box"
                height={{ xs: "200px", sm: "250px", md: "300px" }}>
                {" "}
                <img
                  className="img-team"
                  src={coach.img}
                  alt={coach.title}></img>
              </Box>
              <Box padding={0} className="box-team">
                <Typography
                  className="team-position"
                  textTransform="uppercase"
                  color="text.main">
                  {coach.position}
                </Typography>
                <Typography
                  className="team-name"
                  textTransform="uppercase"
                  color="text.main">
                  {coach.name}
                </Typography>
              </Box>
              <Box
                className="box-contain"
                onMouseEnter={() => handleoverd(i)}
                onMouseLeave={() => handlelave(i)}>
                <Box
                  className="box-child"
                  bgcolor="btncolor.main"
                  pt={{ xs: "5px", md: "6px", lg: "8px" }}
                  pb={{ xs: "3px", md: "5px", lg: "8px" }}
                  pl={{ xs: "3px", md: "3px", lg: "5px" }}
                  pr={{ xs: "3px", md: "5px", lg: "8px" }}>
                  {isHovered === i ? (
                    <a href="#/">
                      {" "}
                      <TwitterIcon className="team-icon"></TwitterIcon>
                    </a>
                  ) : null}
                  {isHovered === i ? (
                    <a href="#/">
                      {" "}
                      <FacebookIcon className="team-icon"></FacebookIcon>
                    </a>
                  ) : null}
                  {isHovered === i ? (
                    <a href="#/">
                      {" "}
                      <WhatsAppIcon className="team-icon"></WhatsAppIcon>
                    </a>
                  ) : null}
                  <a href="#/">
                    <ShareIcon className="team-icon"></ShareIcon>
                  </a>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SwiperApp;
