import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC<{}> = () => (
  <React.Fragment>
    <h1>The Page you are looking for is not found</h1>
    <Link to="/">Go Home</Link>
  </React.Fragment>
);

export default NotFound;