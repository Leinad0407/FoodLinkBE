import "./header.scss";
import { useNavigate } from "react-router-dom";
export default function Header({ ph1, ph2 }) {
  const navigate = useNavigate();
  return (
    <div className="titleContainer" onClick={() => navigate("/")}>
      <h4 className="boldTitle">
        {ph1} {ph2}
      </h4>
    </div>
  );
}
