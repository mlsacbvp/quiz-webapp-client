import React from "react";
import "./Quizgrid.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import useCountdown from "./useCountdown";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

const Quizgrid = ({ image, quesText, optionArray, counter }) => {
  const endTime = new Date().getTime() + 60000; // 2 minutes
  const [timeLeft, setEndTime] = useCountdown(endTime);
  setEndTime(endTime);

  const minutes = Math.floor(timeLeft / 60000) % 60;
  const seconds = Math.floor(timeLeft / 1000) % 60;


  const listItems = optionArray.map((options) =>

    <Grid item xs={6} marginTop={5}>
      <Item elevation={10}>{options}</Item>
    </Grid>
  );

  if (minutes === 0 && seconds === 0) {
    return (
      <div className="center">
        <p>TIMES UP</p>
      </div>
    );
  } else {
    return (
      <div className="">
        <div className="infobar">
          <div>
            <p>
              {minutes}:{seconds}
            </p>
          </div>
          <div>
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 1,
                  width: 1024,
                  height: 128,
                  marginInline: 10,
                },
              }}
            >
              <Item elevation={10} >{quesText ? `${quesText}` : `This is some Sample Text For No Question`}</Item>
            </Box>
          </div>
          <div>{counter}</div>
        </div>
        <div className="grid">
          <div className="image">{image ? <img src='' alt="" /> : ` Sample Loading image`}

          </div>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
          >
            {listItems}
          </Grid>
        </div>
      </div>
    );
  }
};

export default Quizgrid;
