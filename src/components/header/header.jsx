import "./header.scss";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function Header({ ph1, ph2 }) {
  const navigate = useNavigate();
  return (
    <div className="titleContainer" onClick={() => navigate("/")}>
      {/* <Container>
          <Navbar.Brand href="#home">
            <img
              src="./images/logo.png"
              width="210"
              height="50"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container> */}
      <h4 className="boldTitle">
        {ph1} {ph2}
      </h4>
    </div>
  );
}
