/** @format */

import { Box, LinearProgress, Typography } from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import React from "react";

function Error({ maseg }) {
  return (
    <Box textAlign={"center"} display={"flex"} justifyContent={"center"}>
      <Box mt={{ xs: "50%", md: "25%" }} width={"75%"}>
        <Typography
          color={"secondary"}
          mb={5}
          fontSize={{ xs: "20spx", md: "35px" }}
          fontWeight={"500"}>
          {maseg}
        </Typography>

        <LinearProgress color="secondary" variant="indeterminate" />
      </Box>
    </Box>
  );
}

export default Error;
