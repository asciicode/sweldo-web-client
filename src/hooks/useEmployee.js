import React from "react";
import axios from "axios";

function employeesReducer(state, action) {
  switch (action.type) {
    case employeeActionTypes.LIST:
      state.employees = 0;
      return {
        ...state,
        employees: [...action.payload.employees],
        open: action.payload.open
      };
    case employeeActionTypes.OPEN:
      return { ...state, open: action.payload.open };
    default:
      throw new Error(`Unhandled type ${action.type}`);
  }
}

const employeeActionTypes = {
  LIST: "list",
  OPEN: "open"
};

export function useEmployee(orgId) {
  const [state, dispatch] = React.useReducer(employeesReducer, {
    employees: [],
    open: false
  });
  // const [employees, setEmployees] = React.useState([]);
  const [errors, setErrors] = React.useState();
  // const [open, setOpen] = React.useState(false);
  const apiBase = "http://localhost:8085/api/core/v1/" + orgId;
  const addEmployee = form => {
    axios
      .post(apiBase + "/employee", form)
      .then(response => {
        listEmployee();
      })
      .catch(error => {
        if (error.response.data && error.response.data.errorFields) {
          setErrors({ ...error.response.data.errorFields });
        }
      })
      .then(() => {});
  };

  const deleteEmployee = id => {
    axios.delete(apiBase + "/employee/" + id).then(response => {
      listEmployee();
    });
  };

  const editEmployee = form => {
    axios
      .put(apiBase + "/employee/" + form.id, form)
      .then(response => {
        listEmployee();
      })
      .catch(error => {
        if (error.response.data && error.response.data.errorFields) {
          setErrors({ ...error.response.data.errorFields });
        }
      })
      .then(() => {});
  };

  const listEmployee = () => {
    axios.get(apiBase + "/employee/list").then(response => {
      dispatch({
        type: employeeActionTypes.LIST,
        payload: { employees: response.data, open: false }
      });
    });
  };
  const clearErrors = () => {
    setErrors();
  };
  const putOpen = flag => {
    dispatch({
      type: employeeActionTypes.OPEN,
      payload: { open: flag }
    });
  };
  return [
    state.employees,
    errors,
    state.open,
    addEmployee,
    deleteEmployee,
    editEmployee,
    listEmployee,
    clearErrors,
    putOpen
  ];
}

// export const employees = {};
