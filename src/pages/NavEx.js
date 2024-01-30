/** @format */
import "./exer.css";
import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import {
  Box,
  Button,
  ButtonGroup,
  Grid,
  Hidden,
  TextField,
  Typography,
} from "@mui/material";
import dataName from "./exercise/dataName";

const NavEx = ({
  bodylist,
  targetlist,
  equipmentlist,
  setNewData,
  setNewDataType,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (e) => {
    setAnchorEl2(e.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (e) => {
    setAnchorEl3(e.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const handl1 = (item) => {
    setNewDataType("bodyPart");
    setNewData(item);
    handleClose();
  };
  const handl2 = (item) => {
    setNewDataType("target");
    setNewData(item);
    handleClose2();
  };
  const handl3 = (item) => {
    setNewDataType("equipment");
    setNewData(item);
    handleClose3();
  };
  // const handl4 = (item) => {
  //   setNewDataType("equipment");
  //   setNewData(item);
  // };

  //   const filteredExamples = reasershData.name.filter((item) =>
  //     item.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  // console.log(filteredExamples)
  //   // filteredExamples.map((item, index) => (
  //   //  console.log(item)
  //   // ))

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setClose(event.target.value);

    const filteredResults = dataName.filter((exercise) =>
      exercise.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const [close, setClose] = useState("");
  const nameCliced = (name) => {
    setNewDataType("name");
    setNewData(name);
    setClose("");
  };

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Box mt={2} ml={2}>
            <Button
              color="secondary"
              id=" Body part"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(e) => handleClick(e)}>
              <Typography
                fontSize={{ xs: "12px", md: "25px" }}
                fontWeight="600">
                {" "}
                Body part
              </Typography>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              {bodylist
                ? bodylist.map((item, i) => (
                    <MenuItem key={i} onClick={() => handl1(item)}>
                      {item}
                    </MenuItem>
                  ))
                : null}
            </Menu>

            <Button
              sx={{ marginLeft: "3px" }}
              color="secondary"
              id="demo-positioned-button"
              aria-controls={open2 ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open2 ? "true" : undefined}
              onClick={(e) => handleClick2(e)}>
              <Typography
                fontSize={{ xs: "12px", md: "25px" }}
                fontWeight="600">
                {" "}
                target
              </Typography>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl2}
              open={open2}
              onClose={handleClose2}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              {targetlist
                ? targetlist.map((item, i) => (
                    <MenuItem key={i} onClick={() => handl2(item)}>
                      {item}
                    </MenuItem>
                  ))
                : null}
            </Menu>
            <Button
              size="large"
              sx={{ marginLeft: "3px" }}
              color="secondary"
              id="demo-positioned-button"
              aria-controls={open3 ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open3 ? "true" : undefined}
              onClick={(e) => handleClick3(e)}>
              <Typography
                fontSize={{ xs: "12px", md: "25px" }}
                fontWeight="600">
                {" "}
                Equipment
              </Typography>
              <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
            <Menu
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl3}
              open={open3}
              onClose={handleClose3}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              {equipmentlist
                ? equipmentlist.map((item, i) => (
                    <MenuItem key={i} onClick={() => handl3(item)}>
                      {item}
                    </MenuItem>
                  ))
                : null}
            </Menu>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box m={2}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Search"
              variant="outlined"
              color="secondary"
              value={searchTerm}
              onChange={handleChange}
            />{" "}
            {close ? (
              <Box
                className="names"
                zIndex={5}
                position={"absolute"}
                bgcolor="white"
                maxHeight={300}>
                <ButtonGroup
                  orientation="vertical"
                  color="secondary"
                  aria-label="vertical contained button group"
                  variant="text">
                  {searchResults.map((exercise) => (
                    <Button
                      onClick={() => nameCliced(exercise.name)}
                      key={exercise.id}>
                      {exercise.name}
                    </Button>
                  ))}
                </ButtonGroup>
              </Box>
            ) : null}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default NavEx;
