import React from "react";
import { Link,useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  function navigateTo () {
    navigate('/');
  }
  return (
    <>
      {" "}
      <h2>Contact Page</h2>
      <p>For more information about us, go to <Link to='/about'>About Us</Link> page</p>
      <p>
        <button onClick={navigateTo}>Navigate</button>
      </p>
    </>
  );
};

export default Contact;
