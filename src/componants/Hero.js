/** @format */

import React, { useState } from "react";
import "./hero.css";
import { Box, Button, Grid, Typography } from "@mui/material";
import bg from "../img/new/1245084-removebg-preview.png";
import bg2 from "../img/new/portrait-young-sportive-girl-training-with-dumbbells-isolated-blue-background-neon.jpg";
import bg3 from "../img/new/istockphoto-500284607-1024x1024-transformed.jpeg";
import bg4 from "../img/new/beautiful-sports-couple-is-engaged-gym.jpg";

import StanderHero from "./StanderHero";
import LooksOneOutlinedIcon from "@mui/icons-material/LooksOneOutlined";
import LooksTwoOutlinedIcon from "@mui/icons-material/LooksTwoOutlined";
import Looks3OutlinedIcon from "@mui/icons-material/Looks3Outlined";
import Looks4OutlinedIcon from "@mui/icons-material/Looks4Outlined";
import Slids from "./Slids";
import Line from "./Line";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Hero({ slids }) {
  const navigate = useNavigate();
  const [isInView, setIsInView] = useState(false);
  const [isInView1, setIsInView1] = useState(false);
  const [isInView2, setIsInView2] = useState(false);
  const hero = [
    {
      text: (
        <Grid item xs={12} md={7} mt={{ xs: "80px" }}>
          <Typography
            color="text.main"
            fontSize={{ xs: "24px", md: "35px", lg: "50px" }}
            className="Hero-title"
            textAlign="start"
            fontWeight="bold">
            GYM & FITNESS CENTER
          </Typography>
          <Typography
            pt={{ xs: 2, md: 5 }}
            color="text.main"
            fontSize={{ xs: "20px", md: "22px", lg: "35px" }}
            textAlign="start"
            paddingRight={1}
            className="Hero-title"
            fontWeight={600}>
            BUILDING THE NEXT GENERATION OF LEGENDS
          </Typography>
          <Typography
            className="Hero-title"
            fontSize={{ xs: "17px", md: "18px" }}
            pt={2}
            pb={2}
            pr={2}
            color="text.main">
            Looking for an experience that engages every part of your mind and
            body? It all happens here. Drop in for a quick class or join us as a
            member! We offer a selection of affordable options for you to come
            in and enjoy our clean, fully-equipped Gym.
          </Typography>
          <Box
            mt={{ xs: 2, md: 5 }}
            display="flex"
            gap={3}
            className="Hero-title">
            <Button color="btncolor" variant="outlined" href="#form">
              <Typography fontWeight="bold">APPLY NOW</Typography>
            </Button>
            <Button
              onClick={() => navigate("/exer")}
              color="btncolor"
              variant="outlined">
              <Typography fontWeight="bold"> training</Typography>
            </Button>
          </Box>
        </Grid>
      ),
      text2: <Grid item xs={12} md={5} mt={5}></Grid>,

      img: (
        <div>
          <img className="img-bg" src={bg} alt="backGround"></img>
        </div>
      ),
    },
    {
      text: <Grid item xs={0} md={5}></Grid>,
      text2: (
        <Grid item xs={12} md={7} mt={{ xs: 0, md: 10 }}>
          <Typography
            color="text.main"
            fontSize={{ xs: "30px", md: "50px" }}
            className="Hero-title">
            WHAT WE OFFER
          </Typography>
          <Typography
            color="text.main"
            pt={3}
            fontSize={{ xs: "17px", md: "22px" }}
            textAlign="start"
            className="Hero-title">
            With facilities and amenities for nearly every interest, we offer
            our community every opportunity to get in shape and get healthy!
            Whether you want to join a class, hire a personal trainer or
            facilitate your own workout, we have something for everyone!
          </Typography>
          <Grid container pt={3}>
            <Grid item pt={1} xs={6} className="Hero-title">
              <LooksOneOutlinedIcon color="btncolor"></LooksOneOutlinedIcon>
              <Typography color="text.main">Personal Training</Typography>
            </Grid>
            <Grid item pt={1} xs={6} className="Hero-title">
              <LooksTwoOutlinedIcon color="btncolor"></LooksTwoOutlinedIcon>
              <Typography color="text.main"> Group Fitness Classes </Typography>
            </Grid>
            <Grid item pt={1} xs={6} className="Hero-title">
              <Looks3OutlinedIcon color="btncolor"></Looks3OutlinedIcon>
              <Typography color="text.main">
                Cybex Strength Equipment
              </Typography>
            </Grid>
            <Grid item pt={1} xs={6} className="Hero-title">
              <Looks4OutlinedIcon color="btncolor"></Looks4OutlinedIcon>
              <Typography color="text.main">Indoor Walking Space</Typography>
            </Grid>
          </Grid>
        </Grid>
      ),
      img: (
        <motion.div
          onViewportEnter={() => setIsInView1(true)}
          animate={isInView1 ? { x: 0 } : { x: -1000 }}
          transition={{
            type: "spring",
            damping: 40,
          }}
          initial={{
            x: -1000,
            y: -600,
          }}>
          <Box display={{ xs: " none", md: " block" }}>
            <img className="img-bg-why" src={bg2} alt="backGround"></img>
          </Box>
        </motion.div>
      ),
    },
    {
      text: (
        <Grid item xs={12} md={7}>
          <Typography
            color="text.main"
            fontSize={{ xs: "30px", md: "50px" }}
            className="Hero-title">
            GROUP FITNESS{" "}
          </Typography>
          <Typography
            color="text.main"
            pt={3}
            fontSize={{ xs: "17px", md: "22px" }}
            textAlign="start"
            className="Hero-title">
            One of the most popular reasons for taking a group fitness class is
            simple: They’re just plain fun. With music playing and everyone else
            working with you, sharing in the struggle and the success, it can
            feel more like a party than a workout.
          </Typography>
          <Typography
            color="text.main"
            pt={3}
            fontSize={{ xs: "17px", md: "22px" }}
            textAlign="start"
            className="Hero-title">
            Our instructors are certified, motivating, and the friendships you
            make often become great for accountability.Classes are FREE for
            members. Non-members can drop-in for $10/day.
          </Typography>
        </Grid>
      ),
      text2: <Grid item xs={0} md={5}></Grid>,
      img: (
        <motion.div
          onViewportEnter={() => setIsInView2(true)}
          animate={isInView2 ? { x: 0 } : { x: 100 }}
          transition={{
            type: "spring",
            damping: 40,
          }}
          initial={{
            x: +15000,
            y: -600,
          }}>
          <Box display={{ xs: " none", md: " block" }}>
            <img className="img-bg-Groub" src={bg3} alt="backGround"></img>,
          </Box>
        </motion.div>
      ),
    },
    {
      text: <Grid item xs={0} md={5}></Grid>,
      text2: (
        <Grid item xs={12} md={7} pt={{ xs: "10px", md: "20px" }}>
          <Typography
            color="text.main"
            fontSize={{ xs: "25px", md: "40px", lg: "50px" }}
            className="Hero-title">
            PERSONAL TRAINING
          </Typography>
          <Box>
            <Typography
              color="text.main"
              pt={4}
              fontSize={{ xs: "18px", md: "20px", lg: "25px" }}
              textAlign="start"
              className="Hero-title">
              Discover all NYA’s options to find the more fit, faster, stronger,
              better you. We have options for personal training, performance
              training, group exercise, nutrition, stretching, sports
              conditioning, and more.
            </Typography>
            <Typography
              color="text.main"
              pt={4}
              fontSize={{ xs: "18px", md: "20px", lg: "25px" }}
              textAlign="start"
              className="Hero-title">
              Personal training goes far beyond learning basic workouts. Our
              trainers help ensure you have proper form to prevent injury, help
              keep you motivated, maintain accountability, and can provide
              exercises to shape and sculpt your body.
            </Typography>
          </Box>
        </Grid>
      ),
      img: (
        <motion.div
          onViewportEnter={() => setIsInView(true)}
          animate={isInView ? { x: 0 } : { x: -1000 }}
          transition={{
            type: "spring",
            damping: 40,
          }}
          initial={{
            x: -1000,
            y: -550,
          }}>
          <Box display={{ xs: " none", md: " block" }}>
            <img className="img-bg-train" src={bg4} alt="backGround"></img>
          </Box>
        </motion.div>
      ),
    },
  ];

  return (
    <Box className="Hero">
      <StanderHero hero={hero[0]}></StanderHero>
      <Slids slids={slids}></Slids>
      <StanderHero hero={hero[1]}></StanderHero>
      <Line></Line>
      <StanderHero hero={hero[3]}></StanderHero>
      <StanderHero hero={hero[2]}></StanderHero>
    </Box>
  );
}

export default Hero;
