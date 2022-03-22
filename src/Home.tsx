import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
type P = {
  setvisible: any;
  name: string;
  setname: any;
  gender: string;
  setgender: any;
  subject: string;
  setsubject: any;
};
export default function Home(props: P) {
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
        <input
          style={{ marginTop: "20px", padding: "4px 6px" }}
          type="text"
          value={props.name}
          placeholder="Enter Your Name"
          onChange={(e) => {
            props.setname(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="gender">Male:</label>
        <input
          type="radio"
          value="Male"
          placeholder="Enter Your Name"
          name="gender"
          onChange={(e) => {
            console.log(e.target.value);
            props.setgender(e.target.value);
          }}
        />
        <label htmlFor="gender">Female:</label>

        <input
          type="radio"
          value="female"
          placeholder="Enter Your Name"
          name="gender"
          onChange={(e) => {
            console.log(e.target.value);
            props.setgender(e.target.value);
          }}
        />
        <br />
        <br />
        <label htmlFor="subject">English:</label>

        <input
          type="radio"
          value="English"
          placeholder="Enter Your Name"
          name="subject"
          onChange={(e) => {
            // setsubject(e.target.value);
            console.log(e.target.value);
          }}
        />
        <label htmlFor="subject">Java:</label>

        <input
          type="radio"
          value="Java"
          placeholder="Enter Your Name"
          name="subject"
          onChange={(e) => {
            props.setsubject(e.target.value);
            console.log(e.target.value);
          }}
        />
        <label htmlFor="subject">React js:</label>

        <input
          type="radio"
          value="React"
          placeholder="Enter Your Name"
          name="subject"
          onChange={(e) => {
            props.setsubject(e.target.value);
            console.log(e.target.value);
          }}
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
