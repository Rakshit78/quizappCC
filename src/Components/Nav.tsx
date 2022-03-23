import { useNavigate } from "react-router-dom";

type P = {
  setcount: any;
};
const Nav = (props: P) => {
  const navigate = useNavigate();
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button onClick={() => navigate("/q1")}>1</button>
      <button onClick={() => navigate("/q2")}>2</button>
      <button onClick={() => navigate("/q3")}>3</button>
      <button onClick={() => navigate("/q4")}>4</button>
      <button onClick={() => navigate("/q5")}>5</button>
    </div>
  );
};

export default Nav;
