
import "./Registro.scss"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




export default function Registro() {
    return (
        <Container className="container">
        <Row>
          <Col sm={8}>
            <img src="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" className="img"/>
            </Col>
          <Col sm={4} className="containerSec">
          <h1 className="pageTitle">
                Registro
            </h1>
            <h2>
                Usuario existente
            </h2>
           
            <p>Usuario</p>
            <input type="username" placeholder="Ingresa tu usuario" />
            <p>Contraseña</p>
            <input type="password" placeholder="Ingresa tu contraseña" />
            <div>
                <button className="Enter">Entrar</button>
            </div>
            <div>
            <p>Usuario Nuevo</p>
                <button className="Enter">Registrate</button>
            </div>
            <div className="logo">
                <img src="" alt="" />
            </div>
            
          </Col>
        </Row>
       
      </Container>
       
       
      
    )
}

