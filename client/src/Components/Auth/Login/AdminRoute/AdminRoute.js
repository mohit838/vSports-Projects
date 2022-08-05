import React from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import useAuth from "../../../../Hooks/useAuth";

const AdminRoute = () => {
  let location = useLocation();

  const { user, admin, isLoading } = useAuth();

  if (isLoading) {
    return <CircularProgress color="secondary" />;
  }

  return user.email && admin ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default AdminRoute;
