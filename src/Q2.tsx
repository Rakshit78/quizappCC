import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
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

      <FormControlLabel
        value="yes"
        control={
          <Radio
            onChange={(e) => {
              props.setans2(e.target.value);
            }}
          />
        }
        label="True"
      />
      <FormControlLabel
        value="false"
        control={
          <Radio
            onChange={(e) => {
              props.setans2(e.target.value);
            }}
          />
        }
        label="False"
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
