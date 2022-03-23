import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
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

      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-basic"
        label="Type answer"
        variant="outlined"
        onChange={(e) => {
          props.seta(e.target.value);
        }}
      />
      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-basic"
        label="Type answer"
        variant="outlined"
        onChange={(e) => {
          props.setb(e.target.value);
        }}
      />
      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-basic"
        label="Type answer"
        variant="outlined"
        onChange={(e) => {
          props.setc(e.target.value);
        }}
      />
      <TextField
        style={{ marginTop: "10px" }}
        id="outlined-basic"
        label="Type answer"
        variant="outlined"
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
