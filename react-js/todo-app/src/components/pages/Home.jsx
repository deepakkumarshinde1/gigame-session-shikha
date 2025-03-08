import { Link, useNavigate } from "react-router-dom";

function Home() {
  let navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">About</Link>
      <button onClick={() => navigate("/team")}>Team</button>
    </div>
  );
}

export default Home;
