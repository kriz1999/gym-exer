/** @format */

import { Box, Typography } from "@mui/material";
import React from "react";
import "./styles.css";

function Bigcard({ item }) {
  return (
    <Box className="big-card" pl={2} mt={2}>
      <Typography
        color="text.main"
        fontSize={{ xs: "15px", sm: "20px", md: "20px" }}>
        {item.condsion}
      </Typography>
      <Typography
        color="text.main"
        fontSize={{ xs: "35px", sm: "40px", md: "50px" }}>
        {item.name}
      </Typography>
      <Typography
        color="text.main"
        fontSize={{ xs: "15px", sm: "20px", md: "20px" }}>
        {item.text}
      </Typography>
    </Box>
  );
}

export default Bigcard;
