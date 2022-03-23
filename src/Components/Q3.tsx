import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

type Props = {
  resfun: any;
  q1: any;
  name: string;
  setans3: any;
  setans33: any;
};
export default function Q3(props: Props) {
  const navigate = useNavigate();
  return (
    <>
      <p>candidate Name {props.name}</p>
      <h1>{props.q1.ques3}</h1>
      lorum:
      <input
        type="checkbox"
        value="false"
        name="app"
        onChange={(e) => {
          console.log(e.target.value);
          props.setans3(e.target.value);
        }}
      />
      proum:
      <input
        type="checkbox"
        value="false"
        name="app"
        onChange={(e) => {
          props.setans33(e.target.value);
        }}
      />
      Xorum:
      <input
        type="checkbox"
        value="yes"
        name="app"
        onChange={(e) => {
          props.setans33(e.target.value);
        }}
      />
      Aorum:
      <input
        type="checkbox"
        value="yes"
        name="app"
        onChange={(e) => {
          props.setans33(e.target.value);
        }}
      />
      <br />
      <br />
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q2");
        }}
        style={{ marginRight: "10px" }}
      >
        prev
      </Button>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/q4");
        }}
      >
        Next
      </Button>
    </>
  );
}
