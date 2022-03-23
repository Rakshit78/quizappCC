import { PieChart } from "react-minimal-pie-chart";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
type P = {
  count: number;
  q1: any;
  name: string;
  ans1: string;
  ans2: string;
  ans3: string;
  ans33: string;
  ans4: any;
  ans5: string;
  a: string;
  b: string;
  c: string;
  d: string;
};

export default function Res(props: P) {
  const navigate = useNavigate();
  let [res, setres] = useState(1);
  const reloadPage = () => {
    window.location.reload();
  };
  function getres() {
    if (props.q1.ans1 === props.ans1) {
      setres(res + 1);
      return;
    } else if (props.q1.ans2 === props.ans2) {
      setres(res + 1);
      return;
    } else if (props.q1.ans5 === props.ans5) {
      setres(res + 1);
      return;
    } else if (props.q1.ans3 === props.ans3) {
      setres(res + 1);
      return;
    } else if (
      props.q1.ans4.app1 === props.a &&
      props.q1.ans4.app2 === props.b &&
      props.q1.ans4.app3 === props.c &&
      props.q1.ans4.app4 === props.d
    ) {
      setres(res + 1);
      return;
    }
  }
  useEffect(() => {
    getres();
  }, []);

  return (
    <>
      <h1>Result</h1>
      <PieChart
        data={[
          { title: "One", value: res, color: "#E38627" },
          { title: "Two", value: 5, color: "#C13C37" }
        ]}
        style={{ width: "100px", height: "100px" }}
      />
      <h1>
        Hey!! {props.name} Your Score {res} out of 5
      </h1>
      <Button
        variant="contained"
        onClick={() => {
          navigate("/");
          reloadPage();
        }}
      >
        retake
      </Button>
      <h1>Correct Ans</h1>
      <h5>{props.q1.ques1}</h5>
      <p>
        <b>Answer:</b>
        {props.q1.ans1}
        <br />
        <b>Your answer:</b>
        {props.ans1}
      </p>
      <h5>{props.q1.ques2}</h5>
      <p>
        <b>Answer:</b>
        {props.q1.ans2}
        <br />
        <b>Your answer:</b>
        {props.ans2}
      </p>
      <h5>{props.q1.ques3}</h5>
      <p>
        <b>Answer:</b>
        {props.q1.ans3.ans1} {props.q1.ans3.ans2}
        <br />
        <b>Your answer:</b>
        {props.ans3 + " "}
        {props.ans33}
      </p>

      <h5>{props.q1.ques4}</h5>
      <p>
        <b>Answer:</b>
        {props.q1.ans4.app1} {props.q1.ans4.app2} {props.q1.ans4.app3}{" "}
        {props.q1.ans4.app4}
        <br />
        <b>Your answer:</b>
        {props.a} {props.b} {props.c} {props.d}
      </p>
      <h5>{props.q1.ques5}</h5>
      <p>
        <b>Answer:</b>
        {props.q1.ans5} <br />
        <b>Your answer:</b>
        {props.ans5}
      </p>
    </>
  );
}
