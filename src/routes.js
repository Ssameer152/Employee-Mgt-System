import { Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Signup from "./components/Signup/Signup";
import Login from "./components/Login/Login";
import Employee from "./components/Employee/Employee";
import Chart from "./components/ChartData/Chart";
import AddUser from "./components/User/AddUser";

const Router = () => {
  const isLoggedIn = JSON.parse(localStorage.getItem("userLogin"));
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
            <React.Suspense fallback={<></>}>
              <Login />
            </React.Suspense>
          }
        />
        {isLoggedIn ? (
          <Route
            path="/employee"
            element={
              <React.Suspense fallback={<></>}>
                <Employee />
              </React.Suspense>
            }
          />
        ) : (
          <Route path="*" element={<Navigate to="/login" replace />} />
        )}
        {isLoggedIn && (
          <Route
            path="/charts/:id"
            element={
              <React.Suspense fallback={<></>}>
                <Chart />
              </React.Suspense>
            }
          />
        )}
        {isLoggedIn && (
          <Route
            path="/addUser"
            element={
              <React.Suspense fallback={<></>}>
                <AddUser />
              </React.Suspense>
            }
          />
        )}
      </Routes>
    </>
  );
};

export default Router;
