import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../../globalStyles";
import { Holder } from "./checkoutStyles";

const Success = ({ history }) => {
  return (
    <Holder>
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <h2>
        we will bring your order to the table number provided when its ready
      </h2>
      <Button onClick={() => history.push("/")}>Go Back</Button>
    </Holder>
  );
};

export default withRouter(Success);
