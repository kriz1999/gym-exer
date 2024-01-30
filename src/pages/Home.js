/** @format */

import React from "react";
import Hero from "../componants/Hero";

import Slids from "../componants/Slids";

import TestiSmall from "../componants/TestiSmall";
import Tables from "../componants/Table";
import Classes from "../componants/Classes";
import { Box, Button, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SwiperApp from "../componants/SwiperApp";
import Footer from "../componants/Footer";

function Home() {
  const [icon, setIcon] = useState(
    <DarkModeIcon fontSize="large"></DarkModeIcon>
  );
  const [text, setText] = useState("#fafafa");

  const [btnColordark, setBtnColordark] = useState("#1b5e20");
  const [btncolor, setBtncolor] = useState("#00e676");

  const theme = createTheme({
    palette: {
      myColor: {
        main: "#26c6da",
        dark: "#C0ECEB",
        lihgt: "#2196f3",
      },
      text: {
        main: text,
      },

      btnColordark: {
        main: btnColordark,
      },
      icony: {
        main: "#C0ECEB",
      },
      btncolor: {
        main: btncolor,
      },
    },
  });

  const [background, setBackgroun] = useState("bg-color-dark");
  const [slids, setSlids] = useState("slids-dark");

  const handlColor = () => {
    setBackgroun("bg-color-light");
    setText("#000000");
    setBtncolor("#039be5");
    setIcon(<DarkModeIcon fontSize="large"></DarkModeIcon>);
    setSlids("slids-light");
    setBtnColordark("#1b5e20");
    if (text === "#fafafa") {
      setBackgroun("bg-color-light");
      setText("#000000");
      setBtncolor("#039be5");
      setIcon(<DarkModeIcon fontSize="large"></DarkModeIcon>);
      setSlids("slids-light");

      setBtnColordark("#039be5");
    } else {
      setBackgroun("bg-color-dark");
      setText("#fafafa");
      setBtncolor("#00e676");
      setIcon(
        <LightModeIcon fontSize="large" color="btncolor"></LightModeIcon>
      );
      setSlids("slids-dark");

      setBtnColordark("#1b5e20");
    }
  };

  return (
    <div className={background}>
      <ThemeProvider theme={theme}>
        {/* <Nav handlColor={handlColor} icon={icon} navColor={navColor}></Nav> */}
        {/* <Try></Try> */}

        <Box position="absolute" top={2} left={{ xs: 5, md: 15, lg: "100px" }}>
          <Button
            className="mood-logo"
            color="btncolor"
            sx={{ zIndex: 5 }}
            onClick={() => handlColor()}>
            {icon}
          </Button>
        </Box>
        <Hero slids={slids}></Hero>
        <Slids slids={slids}></Slids>
        <SwiperApp></SwiperApp>
        <TestiSmall slids={slids}></TestiSmall>
        <Slids slids={slids}></Slids>
        <Classes slids={slids}></Classes>
        <Tables slids={slids}></Tables>
        <Slids slids={slids}></Slids>
        <Footer slids={slids}></Footer>
      </ThemeProvider>
    </div>
  );
}

export default Home;
