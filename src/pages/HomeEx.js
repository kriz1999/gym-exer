/** @format */

import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import { useNavigate } from "react-router-dom";

const HomeEx = ({ result, restResult, itemValue, exerciseSide }) => {
  const navigate = useNavigate();
  return (
    <Box>
      {result ? (
        <Box>
          <Box p={2}>
            <Typography
              fontSize={{ xs: "25px", md: "45px" }}
              fontWeight={600}
              textTransform="capitalize">
              the result for{" "}
              <span style={{ color: "rgb(156,39,176)" }}>{itemValue}</span>{" "}
            </Typography>
            <Typography
              fontSize={{ xs: "25px", md: "45px" }}
              fontWeight={600}
              textTransform="capitalize">
              by
              <span style={{ color: "rgb(156,39,176)" }}> {exerciseSide} </span>
              list
            </Typography>
          </Box>
          <Grid
            spacing={2}
            container
            direction="row"
            justifyContent="space-between"
            alignItems="stretch">
            {result.map((item, i) => (
              <Grid
                item
                xs={6}
                md={3}
                key={i}
                marginBottom={2}
                value={item.name}
                onClick={() =>
                  navigate("/ex-detail", {
                    state: { data: item },
                  })
                }>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="stretch"
                  className="box-ex-app">
                  <Grid item xs={12} className="box-img">
                    <img
                      className="img-ex"
                      src={item.gifUrl}
                      loading="lazy"
                      alt={item.name}></img>
                  </Grid>
                  <Grid item xs={12} className="box-text">
                    <Typography
                      textAlign="center"
                      textTransform="capitalize"
                      fontSize={{ xs: "12px", sm: "17px", md: "20px" }}
                      color="black">
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
            {restResult?.map((item, i) => (
              <Grid
                mb={2}
                item
                xs={6}
                md={3}
                key={i}
                marginBottom={2}
                value={item.name}
                onClick={() =>
                  navigate("/ex-detail", {
                    state: { data: item },
                  })
                }>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="stretch"
                  className="box-ex-app">
                  <Grid item xs={12} className="box-img">
                    <img
                      className="img-ex"
                      src={item.gifUrl}
                      loading="lazy"
                      alt={item.name}></img>
                  </Grid>
                  <Grid item xs={12} className="box-text">
                    <Typography
                      textAlign="center"
                      textTransform="capitalize"
                      fontSize={{ xs: "12px", sm: "17px", md: "20px" }}
                      color="black">
                      {item.name}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      ) : null}
    </Box>
  );
};
export default HomeEx;
