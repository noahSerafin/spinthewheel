import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header/Header";

const Layout = ({ children }) => {
  const { isLoading, isAuthenticated, logout } = useAuth0();

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

export default Layout;