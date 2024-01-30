/** @format */

import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Form from "./Form";

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {},
  [`&.${tableCellClasses.body}`]: {},
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {},
  // hide last border
  "&:last-child td, &:last-child th": {},
}));

function createData(name, time, how) {
  return { name, time, how };
}

const rows = [
  createData(
    "MONTHLY DIRECT DEBIT (rolling contract)",
    "£29",
    "Online or In Club"
  ),
  createData("12 MONTHS FULLY PAID", "£299", "In Club Only"),
  createData("6 MONTHS", "£180", "In Club Only"),
  createData("3 MONTHS", "£95", "In Club Only"),
  createData("1 MONTH", "£35", "In Club Only"),
  createData("ONE SESSION (non member rate)", "£6.50", "In Club Only"),
];

export default function Tables({ slids }) {
  return (
    <Container maxWidth="lg">
      <Box m={2}>
        <Typography fontSize={{ xs: "30px", md: "50px" }} color="text.main">
          Membership
        </Typography>
      </Box>
      <Grid container spacing={3} pl={2} pr={2} mb={4}>
        <Grid item xs={12} md={7}>
          <TableContainer>
            <Table sx={{ minWidth: 200 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>
                    <Typography
                      color="text.main"
                      sx={{
                        fontSize: { xs: "12px", md: "25px" },
                      }}>
                      {" "}
                      Membership Type
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="text.main"
                      sx={{
                        fontSize: { xs: "12px", md: "25px" },
                      }}>
                      {" "}
                      Anytime
                    </Typography>
                  </StyledTableCell>
                  <StyledTableCell>
                    <Typography
                      color="text.main"
                      sx={{
                        Width: "60px",
                        fontSize: { xs: "12px", md: "25px" },
                      }}>
                      {" "}
                      How to join
                    </Typography>{" "}
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody className={slids}>
                {rows.map((row) => (
                  <StyledTableRow key={row.name}>
                    <StyledTableCell className={slids}>
                      <Typography
                        color="text.main"
                        fontSize={{ xs: "10px", md: "15px" }}>
                        {row.name}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell className={slids}>
                      <Typography
                        color="text.main"
                        fontSize={{ xs: "10px", md: "15px" }}>
                        {row.time}
                      </Typography>
                    </StyledTableCell>
                    <StyledTableCell align="center" className={slids}>
                      <Typography
                        color="text.main"
                        fontSize={{ xs: "10px", md: "15px" }}>
                        {row.how}
                      </Typography>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Box mt={3}>
            <Typography color="text.main" fontSize={{ xs: "12px", md: "15px" }}>
              1 MONTHS NOTICE IS REQUIRED FOR CANCELLATION
            </Typography>
            <Typography
              color="text.main"
              marginBottom={3}
              fontSize={{ xs: "12px", md: "15px" }}>
              *£10 admin fee applies for new direct debit set ups <br></br>*£5
              admin fee applies to any default payments{" "}
            </Typography>
            <Button color="btncolor" variant="outlined">
              Join Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Form rows={rows} slids={slids}></Form>
        </Grid>
      </Grid>
    </Container>
  );
}
