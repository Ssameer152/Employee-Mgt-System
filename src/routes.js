import { Routes, Route } from "react-router-dom";
import React from "react";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Employee from "./components/Employee/EmployeeCard";

const Router = () => {
  return (
    <>
      <Routes>
        <Route
          path="/register"
          exact
          element={
            <React.Suspense fallback={<></>}>
              <Signup />
            </React.Suspense>
          }
        />
        <Route
          path="/login"
          exact
          element={
            <React.Suspense>
              <Login />
            </React.Suspense>
          }
        />
        <Route
          path="/employee"
          element={
            <React.Suspense>
              <Employee />
            </React.Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default Router;
