import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
type P = {
  setcount: any;
  q1: any;
  resfun: any;
  name: string;
  setans1: any;
  ans1: string;
};
export default function Q1(props: P) {
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques1}</h1>
      <input
        type="text"
        placeholder="your answer"
        value={props.ans1}
        onChange={(e) => {
          props.setans1(e.target.value);
        }}
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
