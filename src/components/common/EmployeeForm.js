import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import classNames from "classnames";
import SaveIcon from "@material-ui/icons/Save";
import PersonAdd from "@material-ui/icons/PersonAdd";

const useStyles = theme => ({
  root: {
    flexGrow: 1,
    height: 570,
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[900]
  },
  input: base => ({
    ...base,
    color: theme.palette.text.primary,
    "& input": {
      font: "inherit"
    }
  }),
  button: {
    margin: theme.spacing.unit
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

const EmployeeForm = props => {
  const [form, setForm] = React.useState(props.data);
  // const [errors, setErrors] = React.useState(props.errors);
  const { classes, errors } = props;
  // console.log(errors && errors.rate);

  // React.useEffect(() => {
  //   if (props.data) {
  //     setForm(props.data);
  //   }
  // }, []);

  const handleChange = event => {
    setForm({
      ...form,
      [event.target.id]: event.target.value
    });
  };

  const handleAmountChange = event => {
    if (
      !isNaN(parseFloat(event.target.value, 10)) ||
      event.target.value === ""
    ) {
      setForm({
        ...form,
        [event.target.id]: event.target.value
      });
    }
  };
  const handleAmountBlur = event => {
    // console.log(parseFloat(event.target.value, 10));
    if (!isNaN(parseFloat(event.target.value, 10))) {
      setForm({
        ...form,
        [event.target.id]: parseFloat(event.target.value, 10).toFixed(2)
      });
    }
  };
  const handleSubmit = act => {
    console.log(act);

    props.onSubmit({
      ...form,
      action: act
    });
  };
  return (
    <div className={classes.root}>
      <form noValidate autoComplete="off">
        <TextField
          id="surname"
          label="Lastname"
          margin="normal"
          fullWidth
          value={form.surname}
          onChange={handleChange}
          helperText={
            errors && errors.surname !== undefined ? errors.surname : ""
          }
          error={errors && errors.surname !== undefined}
        />
        <TextField
          id="firstNames"
          label="Firstname(s)"
          margin="normal"
          fullWidth
          value={form.firstNames}
          onChange={handleChange}
          helperText={
            errors && errors.firstNames !== undefined ? errors.firstNames : ""
          }
          error={errors && errors.firstNames !== undefined}
        />
        <TextField
          id="jobDescription"
          label="Job Description"
          margin="normal"
          fullWidth
          value={form.jobDescription}
          onChange={handleChange}
        />
        <TextField
          id="rate"
          label="Rate"
          margin="normal"
          fullWidth
          value={form.rate}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
          helperText={errors && errors.rate !== undefined ? errors.rate : ""}
          error={errors && errors.rate !== undefined}
        />
        <TextField
          id="otmultiplier"
          label="OT multiplier"
          margin="normal"
          fullWidth
          value={form.otmultiplier}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
          helperText={
            errors && errors.otmultiplier !== undefined
              ? errors.otmultiplier
              : ""
          }
          error={errors && errors.otmultiplier !== undefined}
        />
        <TextField
          id="sss"
          label="SSS"
          margin="normal"
          fullWidth
          value={form.sss}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
        />
        <TextField
          id="philhealth"
          label="PhilHealth"
          margin="normal"
          fullWidth
          value={form.philhealth}
          onChange={handleAmountChange}
          onBlur={handleAmountBlur}
        />

        <DialogActions>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            size="small"
            onClick={() => handleSubmit("save")}
          >
            <SaveIcon
              className={classNames(classes.leftIcon, classes.iconSmall)}
            />
            Save
          </Button>
          {props.addToPayrollBtn && (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              size="small"
              onClick={() => handleSubmit("addToPayroll")}
            >
              <PersonAdd />
              Add to Payroll
            </Button>
          )}
        </DialogActions>
      </form>
    </div>
  );
};

export default withStyles(useStyles, { withTheme: true })(EmployeeForm);
