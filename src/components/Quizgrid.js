import React from "react";
import "./Quizgrid.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: "center",
}));

const Quizgrid = () => {
  return (
    <div className="center">
      <div className="infobar">
        <div>timer</div>
        <div>
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                m: 1,
                width: 1024,
                height: 128,
              },
            }}
          >
            <Paper elevation={10} />
          </Box>
        </div>
        <div>counter</div>
      </div>
      <div className="grid">
        <div className="image">{`image`}</div>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item xs={6} marginTop={5}>
            <Item elevation={10}>1</Item>
          </Grid>
          <Grid item xs={6} marginTop={5}>
            <Item elevation={10}>2</Item>
          </Grid>
          <Grid item xs={6} marginTop={5}>
            <Item elevation={10}>3</Item>
          </Grid>
          <Grid item xs={6} marginTop={5}>
            <Item elevation={10}>4</Item>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Quizgrid;
