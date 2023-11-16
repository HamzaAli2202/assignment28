import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { useState } from "react";
import { Xs } from "./data/Test";

export const Test = () => {
  const [data, setData] = useState(Xs);

  return (
    <Grid container spacing={2}>
      {data.map((item) => (
        <Grid item xs={item.xs}>
          <Card sx={{ bgcolor: item.clr }}>
            <CardContent></CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
