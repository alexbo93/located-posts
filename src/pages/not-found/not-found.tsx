import React from "react";
import { Link } from "react-router-dom";

import { MainContainer } from "components/container";

const NotFound: React.FC<{}> = () => (
  <MainContainer>
    <h1>The Page you are looking for is not found</h1>
    <Link to="/">Go Home</Link>
  </MainContainer>
);

export default NotFound;