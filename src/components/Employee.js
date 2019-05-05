import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import classNames from "classnames";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Fab } from "@material-ui/core";
import EmployeeDialog from "./common/EmployeeDialog";
import { Add } from "@material-ui/icons";
import { CustomTableCell } from "./common/CustomTableCell";
import { employeeRowEmpty } from "../data/payroll";
import { useEmployees } from "../hooks/useEmployees";
import Swelbar from "./layout/Swelbar";
// import axios from "axios";

const stylez = theme => ({
  input: base => ({
    ...base,
    color: theme.palette.text.primary,
    "& input": {
      font: "inherit"
    }
  }),
  tableWrap: {
    // display: 'flex',
    borderRadius: 4,
    justifyCenter: "center",
    backgroundColor: theme.palette.background.paper,
    padding: 24
  },
  tableRowHover: {
    "&:hover": {
      backgroundColor:
        theme.palette.type === "light"
          ? theme.palette.grey[200]
          : theme.palette.grey[900]
    }
  },
  root: {
    width: "100%",
    marginTop: theme.spacing.unit,
    overflowX: "auto"
  },
  table: {
    minWidth: 500
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default
    }
  },
  overtimeBox: {
    border: "1px solid white"
  },
  dayTextField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 30,
    fontSize: 12
  },
  InputProps: {
    textAlign: "center"
  },
  dense: {
    // marginTop: 19,
  },
  divTableTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  tdCell: {
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: "right"
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    margin: "0 auto",
    maxWidth: 1200
  }
});

function Employee(props) {
  const [
    state,
    errors,
    addEmployee,
    deleteEmployee,
    editEmployee,
    listEmployee,
    clearErrors
  ] = useEmployees();

  const { classes } = props;
  // console.log("Employee render ", props);
  const [employee, setEmployee] = React.useState(employeeRowEmpty);
  const [open, setOpen] = React.useState(false);
  const handleToggle = () => {
    setOpen(!open);
    console.log("handleToggle ", !open);
    if (!open) {
      setEmployee(employeeRowEmpty);
      clearErrors();
    }
  };

  const handleSubmit = form => {
    form.organisationId = props.match.params.orgId;
    // const formWithOrgId = {
    //   ...form,
    //   organisationId: props.match.params.orgId
    // };
    console.log("handleSubmit form ", form);
    // handleToggle();
    if (employee && employee.id) {
      editEmployee(form);
    } else {
      addEmployee(form);
      // console.log("has errors ", errors);
    }
  };
  const handleEditClick = id => {
    console.log("handleEditClick form ", id);
    handleToggle();
    const emp = state.find(rec => rec.id === id);
    for (let [key, value] of Object.entries(emp)) {
      if (value == null) {
        emp[key] = "";
      }
    }
    setEmployee(emp);
  };
  const handleDeleteClick = id => {
    console.log("handleDeleteClick form ", id);
    deleteEmployee(id);
  };

  React.useEffect(() => {
    listEmployee();
  }, []);
  React.useEffect(() => {
    console.log(errors);
    setOpen(errors !== undefined);
  }, [state]);
  console.log("employee list ", state, errors);

  return (
    <div className={classes.root}>
      <Swelbar {...props} />

      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Paper className={classes.tableWrap}>
          <Paper className={classes.root}>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <CustomTableCell>
                    Lastname
                    <div style={{ display: "inline-block" }}>
                      <Fab
                        color="secondary"
                        size="small"
                        onClick={handleToggle}
                      >
                        <Add />
                      </Fab>
                      <EmployeeDialog
                        onSubmit={handleSubmit}
                        open={open}
                        onToggle={handleToggle}
                        data={employee}
                        errors={errors}
                      />
                    </div>
                  </CustomTableCell>
                  <CustomTableCell>Firstname</CustomTableCell>

                  <CustomTableCell>Job Description</CustomTableCell>
                  <CustomTableCell className={classes.tdCell}>
                    Rate
                  </CustomTableCell>
                  <CustomTableCell className={classes.tdCell}>
                    OT multiplier
                  </CustomTableCell>
                  <CustomTableCell className={classes.tdCell}>
                    SSS
                  </CustomTableCell>
                  <CustomTableCell className={classes.tdCell}>
                    PhilHealth
                  </CustomTableCell>
                  <CustomTableCell style={{ width: "1%" }} />
                  <CustomTableCell style={{ width: "1%" }} />
                </TableRow>
              </TableHead>
              <TableBody>
                {state &&
                  Object.entries(state).length > 0 &&
                  state.map(row => (
                    <TableRow
                      className={classNames(classes.row, classes.tableRowHover)}
                      key={row.id}
                    >
                      <TableCell component="td" scope="row">
                        {row.surname}
                      </TableCell>
                      <TableCell>{row.firstNames}</TableCell>
                      <TableCell>{row.jobDescription}</TableCell>
                      <TableCell className={classes.tdCell}>
                        {row.rate}
                      </TableCell>
                      <TableCell className={classes.tdCell}>
                        {row.otmultiplier}
                      </TableCell>
                      <TableCell className={classes.tdCell}>
                        {row.sss}
                      </TableCell>
                      <TableCell className={classes.tdCell}>
                        {row.philhealth}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          className={classes.button}
                          aria-label="Delete"
                          onClick={() => handleEditClick(row.id)}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          className={classes.button}
                          aria-label="Delete"
                          onClick={() => handleDeleteClick(row.id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </Paper>
        </Paper>
      </main>
    </div>
  );
}

export default withStyles(stylez, { useTheme: true })(Employee);
