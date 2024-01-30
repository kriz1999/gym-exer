/** @format */

import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import "./form.css";

import SendIcon from "@mui/icons-material/Send";

function Form({ rows, slids }) {
  const handle = (e) => {
    e.preventDefault();
    setDataError(false);
    setTimeError(false);
    setNumError(false);

    if (data && time && num) {
      setGrid(
        <div className="">
          <Typography variant="h5" color="Green">
            sent succesfully
          </Typography>
        </div>
      );
    } else {
      setGrid(
        <Typography color="red"> Please enter correct information </Typography>
      );
    }

    if (data === "") {
      setDataError(true);
    }
    if (time === "") {
      setTimeError(true);
    }
    if (num === "") {
      setNumError(true);
    }
  };
  const [data, setData] = useState("");
  const [time, setTime] = useState("");
  const [num, setNum] = useState("");

  const [dataError, setDataError] = useState(false);
  const [timeError, setTimeError] = useState(false);
  const [numError, setNumError] = useState(false);

  const [grid, setGrid] = useState("");

  return (
    <div id="form">
      <Grid container spacing={2} direction="column" className="formapp">
        <Grid item xs={10} md={12}>
          <Box className="form-title">
            <Typography
              sx={{ fontSize: { xs: "15px", md: "20px" } }}
              color="text.main"
              variant="h6"
              fontWeight="bold">
              Having Any Query! Or Book An Appointmet
            </Typography>
          </Box>
          <form
            noValidate
            autoComplete="off"
            onSubmit={handle}
            className="form">
            <TextField
              sx={{ input: { color: "text.main" } }}
              className={`formInput ${slids}`}
              label=<Typography color="text.main">Your Name</Typography>
              color="btncolor"
              variant="standard"
              fullWidth={true}
              onChange={(e) => {
                setData(e.target.value);
              }}
              error={dataError}
            />

            <TextField
              className={`formInput ${slids}`}
              color="btncolor"
              variant="standard"
              type="email"
              sx={{ input: { color: "text.main" } }}
              label=<Typography color="text.main">Your Email</Typography>
              fullWidth={true}
              onChange={(e) => {
                setTime(e.target.value);
              }}
              error={timeError}
            />

            <FormControl
              fullWidth={true}
              color="btncolor"
              variant="standard"
              className={`formInput ${slids}`}>
              <InputLabel id="demo-simple-select-helper-label">
                <Typography color="text.main">Membership Type</Typography>
              </InputLabel>
              <Select
                sx={{ color: "text.main" }}
                color="btncolor"
                onChange={(e) => {
                  setNum(e.target.value);
                }}
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={num}
                error={numError}>
                {rows.map((row, i) => (
                  <MenuItem key={i} value={row.name}>
                    {row.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              color="btncolor"
              variant="standard"
              type="email"
              className={`formInput ${slids}`}
              label=<Typography color="text.main">Message</Typography>
              fullWidth={true}
              sx={{ input: { color: "text.main" } }}
            />

            <Button
              className="formBtn"
              type="submit"
              color="btncolor"
              variant="outlined"
              endIcon={<SendIcon color="btncolor" />}>
              <Typography> Submit</Typography>
            </Button>
          </form>
        </Grid>
        <Grid item xs={8} sm={10} md={12} lg={12} xl={12}>
          {grid}
        </Grid>
      </Grid>
    </div>
  );
}

export default Form;
