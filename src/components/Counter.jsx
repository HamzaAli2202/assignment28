import React, { useState, useEffect } from "react";
import { Card, CardContent, Button, Grid } from "@mui/material";

export const Counter = () => {
  const [curr, setCurr] = useState(0);

  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              disabled={curr >= 40}
              onClick={() => curr < 40 && setCurr(curr + 5)}
              variant="contained"
              fullWidth
            >
              Increment
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h1 style={{ textAlign: "center" }}> Count:{curr} </h1>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <Button
              disabled={curr <= 5}
              onClick={() => curr > 0 && setCurr(curr - 5)}
              variant="contained"
              fullWidth
            >
              decrement
            </Button>
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
