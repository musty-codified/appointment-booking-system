import "./App.css";
import React from "react";
import DataProvider from "./context/AuthContext.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterForm from "./pages/AuthPage/RegisterForm.js";
import LoginForm from "./pages/AuthPage/LoginForm.js";
import Page404 from "./pages/404Page/Page404.js";
import AppointmentTableView from "./pages/adminDashboard/AppointmentTableView.js";
import AppointmentView from "./pages/adminDashboard/AppointmentView.js";
import UserBooking from "./pages/userDashboard/UserBooking.js";
import Layout from "./components/layout/Layout.js";
import {
  ProtectUserRoute,
  IsAuthenticated,
  AdminAuthRequired,
} from "./context/ProtectRoute.js";

function App() {
  return (
    <React.Fragment>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ProtectUserRoute>
                    {/* <AppointmentTableView tableTitle={"APPOINTMENTS"} /> */}
                    <UserBooking />
                  </ProtectUserRoute>
                }
              />
              <Route element={<AdminAuthRequired/>}>
              <Route path="admin-dashboard" element={<AppointmentView />} />
              </Route>
            </Route>

            {/* Whitelisted routes */}
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" 
            element={
              <IsAuthenticated>
              <LoginForm />
            </IsAuthenticated>

            } />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Router>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
