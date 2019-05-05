import React from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Swelbar from "./layout/Swelbar";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    margin: 24
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1200
  },
  grid: {
    width: 1200,
    marginTop: 40,
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 20px)"
    }
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  box: {
    marginBottom: 40,
    height: 65
  },
  actionButtom: {
    textTransform: "uppercase",
    margin: theme.spacing.unit,
    width: 152
  },
  alignRight: {
    display: "flex",
    justifyContent: "flex-end"
  }
}));

function Home(props) {
  const classes = useStyles();
  const theme = useTheme();
  console.log(props);
  console.log(theme);

  return (
    <div className={classes.root}>
      <Swelbar />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center">
          <Grid
            spacing={24}
            alignItems="center"
            justify="center"
            container
            className={classes.grid}
          >
            <Grid container item xs={12}>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <div>
                    <div className={classes.box}>
                      <Typography color="secondary" gutterBottom>
                        <Link
                          to="/1/employee"
                          style={{ textDecoration: "none" }}
                        >
                          <Button color="secondary">Printing Shop</Button>
                        </Link>
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                        This is an example of a full-width box
                      </Typography>
                    </div>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default Home;
