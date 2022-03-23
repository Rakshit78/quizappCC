import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
type P = {
  resfun: any;
  q1: any;
  setvisible: any;
  name: string;
  setans5: any;
};
export default function Q5(props: P) {
  const handle = () => {
    props.setans5("no");
  };
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques5}</h1>
      <button
        onClick={(e) => {
          props.setans5("yes");
        }}
      >
        abc
      </button>
      <button onClick={handle}>zxc</button>
      <button onClick={handle}>cxz</button>
      <button onClick={handle}>cba</button>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q4");
        }}
        style={{ marginRight: "10px" }}
      >
        prev
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          props.setvisible(false);
          navigate("/res");
        }}
      >
        Submit
      </Button>
    </>
  );
}
