import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";

const App = () => {
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default App;
