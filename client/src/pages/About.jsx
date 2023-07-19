import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      <Link to='..' relative="path">Back</Link>
    </>
  );
};

export default About;
