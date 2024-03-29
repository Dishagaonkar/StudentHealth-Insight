import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Dashboard from "./Dashboard/Dashboard";
import { createBrowserRouter } from "react-router-dom";
import Profile from "./Profile";
import Learn from "./Learn";
import Nearby from "./Nearby";
import Evaluate from "./Evaluate";
import Login from "./Login";
import SignUp from "./SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "profile",
    element: <Profile />,
  },
  {
    path: "learn",
    element: <Learn />,
  },
  {
    path: "nearby",
    element: <Nearby />,
  },
  {
    path: "evaluate",
    element: <Evaluate />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "SignUp",
    element: <SignUp />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
