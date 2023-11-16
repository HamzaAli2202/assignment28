import React, { useState, useEffect } from "react";
import axios from "axios";
import { Grid, Card, CardContent, TextField } from "@mui/material";

export const Asgn = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setData(result.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <h1>USER DETAILS</h1>
      </Grid>
      <Grid item xs={12}>
        <TextField variant="outlined" label="serch" fullWidth />
      </Grid>
      {data.map((item) => (
        <Grid item xs={4}>
          <Card
            sx={{
              bgcolor: "lightcyan",
              boxShadow: "10px 10px 10px black",
              height: 500,
            }}
          >
            <CardContent>
              <h3>
                {item.id}. {item.name}
              </h3>
              <p>
                <span>User Name :</span> {item.username}
              </p>
              <p>
                <span>Email id :</span> {item.email}
              </p>
              <p>
                <span>Address :</span> {item.address.street},
                {item.address.suite},{item.address.city}
              </p>
              <p>
                <span>Zipcode :</span> {item.zipcode}
              </p>
              <p>
                <span>Mobile Number :</span> {item.phone}
              </p>
              <p>
                <span>Company's Website :</span> {item.website}
              </p>
              <p>
                <span>Company Name :</span> {item.company.name}
              </p>
              <p>
                <span>Company's Catch Phrase :</span> {item.company.catchPhrase}
              </p>
              <p>
                <span>Company's Business :</span> {item.company.bs}
              </p>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
