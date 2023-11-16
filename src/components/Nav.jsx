import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, Button } from "@mui/material";

export const Nav = () => {
  return (
    <Card>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <Link to="/">
              <Button variant="contained" color="warning" fullWidth>
                Home
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/count">
              <Button variant="contained" color="warning" fullWidth>
                counter
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/prod">
              <Button variant="contained" color="warning" fullWidth>
                product
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/serv">
              <Button variant="contained" color="warning" fullWidth>
                service
              </Button>
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/cont">
              <Button variant="contained" color="warning" fullWidth>
                contact
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
