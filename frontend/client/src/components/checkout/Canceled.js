import React from "react";
import { withRouter } from "react-router";
import { Button } from "../../globalStyles";
import { Holder } from "./checkoutStyles";

const Canceled = ({ history }) => {
  return (
    <>
      <Holder>
        <h1>payment failed</h1>
        <p>payment was not successful</p>
        <Button onClick={() => history.push("/")}> Go Back</Button>
      </Holder>
    </>
  );
};

export default withRouter(Canceled);
