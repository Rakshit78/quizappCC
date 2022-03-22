import { useNavigate } from "react-router-dom";

import { Button } from "@mui/material";
type P = {
  q1: any;
  name: string;
  seta: any;
  setb: any;
  setc: any;
  setd: any;
};

export default function Q4(props: P) {
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques4}</h1>
      <p>apple: {"  "} sumsung</p>
      <p>apple: {"  "} magic</p>
      <p>apple: {"  "} skoda</p>
      <p>apple: {"  "} audi</p>
      A:
      <input
        type="text"
        placeholder="type answer"
        onChange={(e) => {
          props.seta(e.target.value);
        }}
      />
      <br />
      B:
      <input
        type="text"
        placeholder="type answer"
        onChange={(e) => {
          props.setb(e.target.value);
        }}
      />
      <br />
      C:
      <input
        type="text"
        placeholder="type answer"
        onChange={(e) => {
          props.setc(e.target.value);
        }}
      />
      <br />
      D:
      <input
        type="text"
        placeholder="type answer"
        onChange={(e) => {
          props.setd(e.target.value);
        }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q3");
        }}
        style={{ marginRight: "10px" }}
      >
        prev
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q5");
        }}
      >
        Next
      </Button>
    </>
  );
}
