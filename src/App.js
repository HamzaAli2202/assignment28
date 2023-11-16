import React from "react";
import { Card, CardContent } from "@mui/material";
import { Test } from "./components/Test";
import { Landing } from "./components/Landing";
import "./components/common.css";
import { Asgn } from "./components/Asgn";

function App() {
  return (
    <Card sx={{ bgcolor: "whitesmoke" }}>
      <CardContent>
        {/* <Test /> */}
        {/* <Landing /> */}
        <Asgn />
      </CardContent>
    </Card>
  );
}

export default App;
