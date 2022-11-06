import React from "react";
import Footer from "src/components/footer/Footer";
import NavBar from "src/components/navbar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
