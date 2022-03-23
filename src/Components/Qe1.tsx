import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
type Props = {
  setcount: any;
  q1: any;
  resfun: any;
  name: string;
  setans1: any;
  ans1: string;
};
export default function Q1(props: Props) {
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques1}</h1>

      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-basic"
        label="Enter Your Name"
        variant="outlined"
        onChange={(e) => {
          props.setans1(e.target.value);
        }}
        value={props.ans1}
      />

      <br />
      <br />

      <Button
        variant="contained"
        onClick={() => {
          navigate("/q2");
        }}
      >
        Next
      </Button>
    </>
  );
}
