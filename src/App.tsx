import "./styles.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Qe1 from "./Components/Qe1";
import Q2 from "./Components/Q2";
import Q3 from "./Components/Q3";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";
import Res from "./Components/Res";
import Nav from "./Components/Nav";
import { obj, obj1, obj2 } from "./data";
import Home from "./Components/Home";

export default function App() {
  const [name, setname] = useState("");
  const [gender, setgender] = useState("");
  const [subject, setsubject] = useState("");
  const [count, setcount] = useState(0);
  const [visible, setvisible] = useState(false);
  const [ans1, setans1] = useState("");
  const [ans2, setans2] = useState("");
  const [ans3, setans3] = useState("");
  const [ans33, setans33] = useState("");
  const [ans5, setans5] = useState("");
  const [q1, setq1] = useState(obj);
  const [a, seta] = useState("");
  const [b, setb] = useState("");
  const [c, setc] = useState("");
  const [d, setd] = useState("");

  const resfun = () => {
    setcount(count + 1);
  };
  const setquestion = () => {
    if (subject === "English") {
      setq1(obj);
    } else if (subject === "Java") {
      setq1(obj1);
    } else if (subject === "React") {
      setq1(obj2);
    }
  };
  useEffect(() => {
    console.log(count);
    setquestion();
  }, [count, subject]);
  return (
    <BrowserRouter>
      <div className="App">
        {visible ? <Nav setcount={setcount} /> : null}

        <Routes>
          <Route
            path="/"
            element={
              <Home
                setvisible={setvisible}
                name={name}
                setname={setname}
                gender={gender}
                setgender={setgender}
                subject={subject}
                setsubject={setsubject}
              />
            }
          />
          <Route
            path="/q1"
            element={
              <Qe1
                setcount={setcount}
                q1={q1}
                resfun={resfun}
                name={name}
                setans1={setans1}
                ans1={ans1}
              />
            }
          />
          <Route
            path="/q2"
            element={
              <Q2
                q1={q1}
                resfun={resfun}
                name={name}
                setans2={setans2}
                ans1={ans1}
              />
            }
          />
          <Route
            path="/q3"
            element={
              <Q3
                q1={q1}
                resfun={resfun}
                name={name}
                setans3={setans3}
                setans33={setans33}
              />
            }
          />
          <Route
            path="/q4"
            element={
              <Q4
                q1={q1}
                name={name}
                seta={seta}
                setb={setb}
                setc={setc}
                setd={setd}
              />
            }
          />
          <Route
            path="/q5"
            element={
              <Q5
                q1={q1}
                resfun={resfun}
                setvisible={setvisible}
                name={name}
                setans5={setans5}
              />
            }
          />
          <Route
            path="/res"
            element={
              <Res
                q1={q1}
                count={count}
                name={name}
                ans1={ans1}
                ans2={ans2}
                ans3={ans3}
                ans5={ans5}
                ans33={ans33}
                a={a}
                b={b}
                c={c}
                d={d}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
