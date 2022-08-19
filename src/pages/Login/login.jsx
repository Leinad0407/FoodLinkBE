import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./login.scss";
import Form from 'react-bootstrap/Form';


import Button from 'react-bootstrap/Button';

export default function Login() {
  return (
    <div className="container row">
      <Header className="justify-content-center" ph1="Inicia" ph2="sesión" />
      <section>
        <Form>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Ingresa tu usuario</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
      </Form>
      <div> <Button variant="success">Ingresar</Button>{' '}</div>
              <div className="row">
                <Footer />
            </div>
      </section>
    </div>
    
  );
}
