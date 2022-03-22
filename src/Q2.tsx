import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
type P = {
  resfun: any;
  q: any;
  name: string;
  setans2: any;
};
export default function Q2(props: any) {
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques2}</h1>
      True:
      <input
        type="radio"
        value="yes"
        name="app"
        onChange={(e) => {
          props.setans2(e.target.value);
        }}
      />
      False:
      <input
        type="radio"
        value="false"
        name="app"
        onChange={(e) => {
          props.setans2(e.target.value);
        }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q1");
        }}
        style={{ marginRight: "10px" }}
      >
        prev
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q3");
        }}
      >
        Next
      </Button>
    </>
  );
}
