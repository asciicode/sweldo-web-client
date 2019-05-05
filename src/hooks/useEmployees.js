import React from "react";
import axios from "axios";

// TODO : should submit to backend
function employeesReducer(state, action) {
  switch (action.type) {
    case employeeActionTypes.ADD:
      // return [...state, action.payload];
      return [...state];
    case employeeActionTypes.DELETE:
      // return state.filter(rec => rec.employeeId !== action.payload.id);
      return [...state];
    case employeeActionTypes.EDIT:
      // const ndx = state.findIndex(
      //   rec => rec.employeeId === action.payload.employeeId
      // );
      // let newRec = { ...state[ndx], ...action.payload };
      // state.splice(ndx, 1, newRec);
      // console.log(state);

      return [...state];
    case employeeActionTypes.LIST:
      state.length = 0;
      return [...state, ...action.payload];
    default:
      throw new Error(`Unhandled type ${action.type}`);
  }
}

const employeeActionTypes = {
  ADD: "add",
  DELETE: "delete",
  EDIT: "edit",
  LIST: "list"
};

export function useEmployees(orgId) {
  // console.log(orgId);

  // const [state, dispatch] = React.useReducer(employeesReducer, []);
  const [employees, setEmployees] = React.useState([]);
  const [errors, setErrors] = React.useState();

  const addEmployee = form => {
    axios
      .post("http://localhost:8085/api/core/v1/1/employee", form)
      .then(response => {
        // console.log(response);
        listEmployee();
        clearErrors();
      })
      .catch(error => {
        // dispatch({ type: employeeActionTypes.ADD, payload: { ...form } });
        // console.log(error.response.data, error.response.data.errorFields);
        if (error.response.data && error.response.data.errorFields) {
          setErrors({ ...error.response.data.errorFields });
        }
      })
      .then(() => {});
  };

  const deleteEmployee = id => {
    // dispatch({ type: employeeActionTypes.DELETE, payload: { id } });
    axios
      .delete("http://localhost:8085/api/core/v1/1/employee/" + id)
      .then(response => {
        // console.log(response);
        listEmployee();
        clearErrors();
      });
  };

  const editEmployee = form => {
    axios
      .put("http://localhost:8085/api/core/v1/1/employee/" + form.id, form)
      .then(response => {
        // console.log(response);
        listEmployee();
        clearErrors();
      })
      .catch(error => {
        // dispatch({ type: employeeActionTypes.ADD, payload: { ...form } });
        // console.log(error.response.data, error.response.data.errorFields);
        if (error.response.data && error.response.data.errorFields) {
          setErrors({ ...error.response.data.errorFields });
        }
      })
      .then(() => {});
  };

  const listEmployee = () => {
    axios
      .get("http://localhost:8085/api/core/v1/1/employee/list")
      .then(response => {
        // dispatch({ type: employeeActionTypes.LIST, payload: response.data });
        setEmployees(response.data);
        // setErrors(null);
      });
  };
  const clearErrors = () => {
    setErrors();
  };
  return [
    employees,
    errors,
    addEmployee,
    deleteEmployee,
    editEmployee,
    listEmployee,
    clearErrors
  ];
}

// export const employees = {};
