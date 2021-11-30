import React from "react";
import { withRouter } from "react-router-dom";
import { Button } from "../../globalStyles";
import { Holder } from "./checkoutStyles";

const Success = ({ history }) => {
  return (
    <Holder>
      <h1>THANK YOU FOR YOUR ORDER</h1>
      <h2>will will bring your order when its ready </h2>
      <Button onClick={() => history.push("/Drinks")}>back</Button>
    </Holder>
  );
};

export default withRouter(Success);
