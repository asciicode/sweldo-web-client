import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Employee from "./components/Employee";
// import AtzKarlTable from "./AtzKarlTable";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:orgId/dashboard" component={Dashboard} />
        <Route path="/:orgId/employee" component={Employee} />
        {/* <Route path="/:orgId/payroll" component={AtzKarlTable} /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
