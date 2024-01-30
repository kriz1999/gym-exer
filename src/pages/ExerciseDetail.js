/** @format */

import { Box, Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./exer.css";
import ph1 from "../img/icon/icons8-bench-press.gif";
import ph2 from "../img/icon/icons8-dumbbell.gif";
import ph3 from "../img/icon/icons8-pullups.gif";

import Scroling from "./Scroling";
import { config, youtobeOp } from "../axios/custom";
import axios from "axios";

const ExerciseDetail = () => {
  const location = useLocation();
  const data = location.state.data;
  const [youtube, setYoutube] = useState([]);
  const [similarTarget, setSimilarTarget] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios(
        `https://youtube-v3-alternative.p.rapidapi.com/search?query=${data.name}exercise&geo=US&lang=en`,
        youtobeOp
      );
      const res2 = await axios(
        `https://exercisedb.p.rapidapi.com/exercises/target/${data.target}`,
        config
      );
      const res3 = await axios(
        `https://exercisedb.p.rapidapi.com/exercises/equipment/${data.equipment}`,
        config
      );
      setSimilarTarget(res2.data);
      setSimilarEquipment(res3.data);
      setYoutube(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, [data.name]);
  return (
    <Container maxWidth="lg">
      <Box className="ExerciseDetail">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={6} height={{ xs: "300px", md: "450px" }}>
            {" "}
            <img className="img-ex-detail" src={data.gifUrl} alt="/"></img>
          </Grid>
          <Grid item xs={10} md={6}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item xs={2} textAlign="end" pr={4}>
                {" "}
                <img src={ph1} alt="/"></img>
              </Grid>
              <Grid item xs={10}>
                {" "}
                <Typography
                  textTransform="capitalize"
                  fontSize={{ xs: "15px", md: "20px" }}
                  fontWeight={600}>
                  name :<span style={{ color: "purple" }}> {data.name}</span>{" "}
                </Typography>
              </Grid>
              <Grid item xs={2} textAlign="end" pr={4}>
                {" "}
                <img src={ph3} alt="/"></img>
              </Grid>
              <Grid item xs={10}>
                {" "}
                <Typography
                  textTransform="capitalize"
                  fontSize={{ xs: "15px", md: "20px" }}
                  fontWeight={600}>
                  target muscles is :{" "}
                  <span style={{ color: "purple" }}> {data.target}</span>
                </Typography>
              </Grid>
              <Grid item xs={2} textAlign="end" pr={4}>
                {" "}
                <img src={ph2} alt="/"></img>
              </Grid>
              <Grid item xs={10}>
                {" "}
                <Typography
                  textTransform="capitalize"
                  fontSize={{ xs: "15px", md: "20px" }}
                  fontWeight={600}>
                  equipment needs{" "}
                  <span style={{ color: "purple" }}> {data.equipment}</span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Box p={2}>
          <Typography
            mb={3}
            color="secondary"
            fontSize={{ xs: "25px", md: "35px" }}
            fontWeight={700}>
            description{" "}
          </Typography>
          {data.instructions ? (
            data.instructions.map((e, i) => (
              <Box key={i} textAlign="center">
                <Typography>{e}</Typography>
              </Box>
            ))
          ) : (
            <Box textAlign="center">
              <Typography
                fontSize={{ xs: "20px", md: "30px" }}
                fontWeight={500}>
                "none"
              </Typography>
            </Box>
          )}
        </Box>

        <Box p={2}>
          <Scroling
            array={youtube}
            title={" relatid youtube videos"}></Scroling>
        </Box>
        <Box p={2}>
          <Scroling
            arraySimilar={similarTarget}
            title={"  similar Target"}></Scroling>
        </Box>
        <Box p={2}>
          <Scroling
            arraySimilar={similarEquipment}
            title={"similar equipment"}></Scroling>
        </Box>
      </Box>
    </Container>
  );
};

export default ExerciseDetail;
