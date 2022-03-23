import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

type Props = {
  setvisible: any;
  name: string;
  setname: any;
  gender: string;
  setgender: any;
  subject: string;
  setsubject: any;
  navigate: any;
};
export default function Home(props: Props) {
  const navigate = useNavigate();
  const buttonhandle = () => {
    if (props.name === "" || props.gender === "" || props.subject === "") {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div
      style={{
        display: "grid",
        width: "100vw",
        height: "100vh",
        placeItems: "center"
      }}
    >
      <form
        style={{
          width: "300px",
          height: "250px",
          background: "#e5e5e5",
          padding: "5px"
        }}
        onSubmit={(e) => {
          e.preventDefault();
          props.setvisible(true);
          navigate("/q1");
        }}
      >
        <TextField
          style={{ marginTop: "10px" }}
          id="outlined-basic"
          label="Enter Your Name"
          variant="outlined"
          onChange={(e) => {
            props.setname(e.target.value);
          }}
          value={props.name}
        />
        <br />
        <br />

        <FormControlLabel
          value="female"
          control={
            <Radio
              onChange={(e) => {
                console.log(e.target.value);
                props.setgender(e.target.value);
              }}
            />
          }
          label="Female"
        />
        <FormControlLabel
          value="male"
          control={
            <Radio
              onChange={(e) => {
                console.log(e.target.value);
                props.setgender(e.target.value);
              }}
            />
          }
          label="Male"
        />
        <FormControlLabel
          value="other"
          control={
            <Radio
              onChange={(e) => {
                console.log(e.target.value);
                props.setgender(e.target.value);
              }}
            />
          }
          label="Other"
        />

        <br />
        <br />

        <FormControlLabel
          value="English"
          control={
            <Radio
              onChange={(e) => {
                props.setsubject(e.target.value);
                console.log(e.target.value);
              }}
            />
          }
          label="English"
        />
        <FormControlLabel
          value="Java"
          control={
            <Radio
              onChange={(e) => {
                props.setsubject(e.target.value);
                console.log(e.target.value);
              }}
            />
          }
          label="Java"
        />
        <FormControlLabel
          value="React js"
          control={
            <Radio
              onChange={(e) => {
                props.setsubject(e.target.value);
                console.log(e.target.value);
              }}
            />
          }
          label="React js"
        />
        <br />
        <br />

        <Button
          variant="contained"
          type="submit"
          disabled={buttonhandle()}
          onClick={() => {
            props.setvisible(true);
          }}
        >
          Start test
        </Button>
      </form>
    </div>
  );
}
