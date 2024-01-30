/** @format */

import { Box, Container, Grid } from "@mui/material";
import React from "react";

const StanderHero = ({ hero }) => {
  return (
    <Box position="relative" height={{ xs: "400px", md: "550px" }} pb={10}>
      <Container maxWidth="lg">
        <Grid pl={2} container height={{ xs: "400px", md: "550px" }}>
          {hero.text}
          {hero.text2}
        </Grid>
      </Container>
      <Box>{hero.img}</Box>
    </Box>
  );
};

export default StanderHero;
