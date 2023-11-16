import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardContent,
  Button,
  TextField,
  Rating,
} from "@mui/material";

export const Product = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products");
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid sx={{ marginTop: 5 }} container spacing={2}>
      <TextField variant="outlined" label="Serch Here" fullWidth />
      {data.map((item) => (
        <Grid align="left" item xs={3}>
          <Card>
            <CardContent>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <img src={item.image} alt="" />
                </Grid>
                <Grid item xs={12}>
                  <p>{item.title.slice(0, 25)}</p>
                </Grid>
                <Grid item xs={12}>
                  <Rating value={item.rating.rate} />
                </Grid>
                <Grid item xs={12}>
                  <span style={{ fontSize: 25 }}>${item.price}</span>{" "}
                  <span>
                    {" "}
                    <del>${item.price}</del>
                  </span>
                </Grid>

                <Grid item xs={12}>
                  <p>{item.description.slice(0, 50)}</p>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="info" fullWidth>
                    Add to cart
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" color="warning" fullWidth>
                    buy
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
