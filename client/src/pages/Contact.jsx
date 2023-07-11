import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      {" "}
      <h2>Contact Page</h2>
      <p>For more information about us, go to <Link to='/about'>About Us</Link> page</p>
    </>
  );
};

export default Contact;
