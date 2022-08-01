import Header from "../../components/header/header";
import "./login.scss";

export default function Login() {
  return (
    <div className="container row">
      <Header className="justify-content-center" ph1="Inicia" ph2="sesión" />
      <label>
        <input placeholder="usuario"></input>
        <input placeholder="contraseña"></input>
      </label>
    </div>
  );
}
