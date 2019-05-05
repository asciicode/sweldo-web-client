import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({
  appBar: {},
  buttonLabel: {
    textTransform: "none",
    color: "#fff"
  },
  avatar: {
    margin: 10
  },
  logoLabel: {
    minHeight: 55,
    display: "inline-flex",
    alignItems: "center"
  }
}));
function Swelbar(props) {
  const classes = useStyles();
  // const theme = useTheme();
  // console.log(props);

  function handleEmployeeClick() {}
  return (
    <>
      <CssBaseline />

      <AppBar position="fixed" className={classNames(classes.appBar)}>
        <Toolbar>
          <div style={{ display: "flex" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Avatar className={classes.avatar}>AT</Avatar>
            </Link>
            <div>
              <span className={classes.logoLabel}>
                <Typography variant="h6" color="inherit">
                  Atzkarl Trading
                </Typography>
              </span>
            </div>
          </div>
          <div style={{ flexGrow: "1" }} />
          {props.match != null && props.match.params.orgId != null && (
            <div>
              <Link to="employee" style={{ textDecoration: "none" }}>
                <Button
                  classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.buttonLabel // class name, e.g. `classes-nesting-label-x`
                  }}
                  onClick={handleEmployeeClick}
                >
                  Employee
                </Button>
              </Link>
              <Link to="payroll" style={{ textDecoration: "none" }}>
                <Button
                  classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                    label: classes.buttonLabel // class name, e.g. `classes-nesting-label-x`
                  }}
                  // buttonRef={anchorEl}
                  // aria-owns={open ? "menu-list-grow" : undefined}
                  // aria-haspopup="true"
                  // onClick={handleToggle}
                >
                  Payroll
                </Button>
              </Link>
              {/* <Popper
              open={open}
              anchorEl={anchorEl.current}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id="menu-list-grow"
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom"
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper> */}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Swelbar;
