import React, { useEffect, useState } from "react";
import "./App.css";
function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", { show });
    };
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg w-100 position-fixed navbar-light  d-flex d-flex justify-content-between px-3 ${
        show && "nav_black"
      } `}
    >
      <img
        src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
        height="auto"
        width="140px"
        alt="netflix logo"
      />
      <img
        src="https://i.pinimg.com/736x/c4/88/34/c488340ad56e5454f4576f6c708b63aa.jpg"
        height="auto"
        width="47px"
        alt="netflix user logo"
      />
    </nav>
  );
}

export default Nav;
