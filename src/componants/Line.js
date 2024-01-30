/** @format */

import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const Line = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Stack textAlign="center" marginBottom={10} marginTop={0}>
          <Typography
            color="btncolor.main"
            fontSize={{
              xs: "40px",
              sm: "70px",
              md: "105px",
              lg: "130px",
              xl: "150px",
            }}>
            BUILD STRONG
          </Typography>
          <Typography
            color="text.main"
            fontSize={{
              xs: "40px",
              sm: "70px",
              md: "105px",
              lg: "130px",
              xl: "150px",
            }}>
            HABITS TODAY!
          </Typography>
        </Stack>
      </Container>
    </div>
  );
};

export default Line;
