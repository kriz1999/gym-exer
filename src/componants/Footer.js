/** @format */

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import logo from "../img/icon/weight.png";

const Footer = ({ slids }) => {
  return (
    <Container>
      <Grid container paddingBottom={10}>
        <Grid item md={12}>
          <Grid container justifyContent="center" paddingBottom={2}>
            <Grid
              item
              md={4}
              xs={10}
              color="text.main"
              display={"flex"}
              flexDirection={"column"}
              alignItems="center"
              textAlign={"center"}>
              <img src={logo} className="logo"></img>
              <Typography>
                is one of the world's leading health and fitness chains, with a
                wide range of branches across the UAE in Dubai, Abu Dhabi,
                Sharjah and Al Ain.
              </Typography>
            </Grid>
            <Grid
              item
              md={2.5}
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="column">
              <Button fontSize="25px" fontWeight={600}>
                <Typography color="text.main" fontSize="20px" fontWeight={600}>
                  About Us
                </Typography>
              </Button>

              <Button>
                <Typography color="text.main">Our Story</Typography>
              </Button>
              <Button>
                <Typography color="text.main">Our Partners</Typography>
              </Button>
              <Button>
                <Typography color="text.main">Our Classes</Typography>
              </Button>
              <Button>
                <Typography color="text.main">Awards</Typography>
              </Button>
            </Grid>{" "}
            <Grid
              item
              md={2.5}
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="column">
              <Button fontSize="25px" fontWeight={600}>
                <Typography color="text.main" fontSize="20px" fontWeight={600}>
                  Careers
                </Typography>
              </Button>

              <Button>
                {" "}
                <Typography color="text.main">Our Culture</Typography>
              </Button>
              <Button>
                {" "}
                <Typography color="text.main">Work with us</Typography>
              </Button>
            </Grid>{" "}
            <Grid
              item
              md={2.5}
              color="text.main"
              sx={{ display: { xs: "none", md: "flex" } }}
              flexDirection="column">
              <Button fontSize="25px" fontWeight={600}>
                <Typography color="text.main" fontSize="20px" fontWeight={600}>
                  Customer Service
                </Typography>
              </Button>
              <Button>
                <Typography color="text.main">Contant Us</Typography>
              </Button>
              <Button>
                <Typography color="text.main">FAQs</Typography>
              </Button>
              <Button>
                <Typography color="text.main">Sitemap</Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "flex", md: "none" } }}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={10}>
              <Accordion className={`accordion ${slids}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="text" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography color="text.main"> About Us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <Typography color="text.main">Our Story</Typography>
                  </Button>
                  <Button>
                    <Typography color="text.main">Our Partners</Typography>
                  </Button>
                  <Button>
                    <Typography color="text.main">Our Classes</Typography>
                  </Button>
                  <Button>
                    <Typography color="text.main">Awards</Typography>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={10}>
              <Accordion className={`accordion ${slids}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="text" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography color="text.main"> Careers</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <Button>
                      <Typography color="text.main">Our Culture</Typography>
                    </Button>
                    <Button>
                      <Typography color="text.main">Work with us</Typography>
                    </Button>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid item xs={10}>
              <Accordion className={`accordion ${slids}`}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon color="text" />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography color="text.main"> Customer Service</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button>
                    <Typography color="text.main">Contant Us</Typography>
                  </Button>
                  <Button>
                    <Typography color="text.main">FAQs</Typography>
                  </Button>
                  <Button>
                    <Typography color="text.main">Sitemap</Typography>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
