/** @format */
import "./exer.css";
import React, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { config, config2 } from "../axios/custom";

import NavEx from "./NavEx";
import axios from "axios";
import HomeEx from "./HomeEx";
import Error from "./exercise/Error";

function Exercise() {
  const [errorvpn, setErrorvpn] = useState(false);
  const [error429, setErorr429] = useState(false);

  const [bodyPartList, setBodyPartList] = useState([]);
  const [target, setTarget] = useState([]);
  const [equipment, setEquipment] = useState([]);
  const [result, setResult] = useState();
  const [restResult, setRestResult] = useState();
  const [itemValue, setItemValue] = useState("back");
  const [exerciseSide, setExerciseSide] = useState("bodyPart");
  const [newData, setNewData] = useState("");
  const [newDataType, setNewDataType] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
        config
      );
      const responselist1 = await axios(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        config
      );
      const responselist2 = await axios(
        "https://exercisedb.p.rapidapi.com/exercises/equipmentList",
        config
      );
      const responselist3 = await axios(
        "https://exercisedb.p.rapidapi.com/exercises/targetList",
        config
      );
      // const reasrech = await axios(
      //   "https://exercisedb.p.rapidapi.com/exercises",
      //   config2
      // );
      // console.log(reasrech);
      setResult(res.data.slice(0, 5));
      setTimeout(() => {
        setRestResult(res.data.slice(5));
      }, "3000");

      setBodyPartList(responselist1.data);
      setEquipment(responselist2.data);
      setTarget(responselist3.data);
    } catch (error) {
      console.log(error);
      if (error.code === "ERR_NETWORK") setErrorvpn(true);
      else if (error.response.status === 429) setErorr429(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (newData) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            `https://exercisedb.p.rapidapi.com/exercises/${newDataType}/${newData}`,
            config
          );
          console.log(response.data);
          setResult([]);
          setRestResult([]);
          setTimeout(() => {
            setResult(response.data.slice(0, 5));
          }, "1000");
          setTimeout(() => {
            setRestResult(response.data.slice(5));
          }, "3000");
          setItemValue(newData);
          setExerciseSide(newDataType);
        } catch (error) {
          console.error(error);
        }
      };

      fetchData();
    }
  }, [newData, newDataType]);

  return (
    <Container maxWidth="lg">
      {errorvpn === true ? (
        <Error maseg={"can you turn VPN on"}></Error>
      ) : error429 === true ? (
        <Error
          maseg={
            " sorry we have exceeded the MONTHLY quota for Requests"
          }></Error>
      ) : (
        <Box>
          <NavEx
            bodylist={bodyPartList}
            targetlist={target}
            equipmentlist={equipment}
            setNewDataType={setNewDataType}
            setNewData={setNewData}></NavEx>

          <HomeEx
            result={result}
            restResult={restResult}
            itemValue={itemValue}
            exerciseSide={exerciseSide}></HomeEx>
        </Box>
      )}
    </Container>
  );
}
export default Exercise;
