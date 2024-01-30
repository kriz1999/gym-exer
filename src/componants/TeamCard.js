/** @format */

import React, { useState } from "react";

import { Box, Grid, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Card({ title, position, img }) {
  const [isHovered, setHovered] = useState(false);

  return (
    <Grid item md={4} sm={6} position="relative">
      <Grid container spacing={1}>
        <Grid item md={8.5} position="relative">
          <img
            className="img-team "
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            src={img}
            alt={title}></img>
          <Box
            className="box-contain"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <Box className="box-share">
              <a href="#/" className="team-icon">
                {" "}
                <ShareIcon></ShareIcon>
              </a>
            </Box>
            {isHovered && (
              <Box className="box-child">
                <a href="#/" className="team-icon">
                  {" "}
                  <TwitterIcon></TwitterIcon>
                </a>
                <a href="#/" className="team-icon">
                  {" "}
                  <FacebookIcon></FacebookIcon>
                </a>
                <a href="#/" className="team-icon">
                  {" "}
                  <WhatsAppIcon></WhatsAppIcon>
                </a>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item md={3.5}>
          <Box padding={0} className="box-team">
            <Typography
              className="team-position"
              textTransform="uppercase"
              color="white">
              {position}
            </Typography>
            <Typography
              className="team-name"
              textTransform="uppercase"
              color="white">
              {title}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}

function TeamCard({ title, img, i, position }) {
  return <Card key={i} title={title} img={img} position={position} />;
}

export default TeamCard;
