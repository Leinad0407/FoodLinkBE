import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./cartaPerfil.scss"


export default function Cartaperfil() {
    return (
        <div className="d-flex justify-content-around">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="https://www.tuexperto.com/wp-content/uploads/2015/07/perfil_01.jpg" />
        <Card.Body>
          <Card.Title>David Romero</Card.Title>
         
          <Button variant="primary">Actualizar Foto de Perfil</Button>
        </Card.Body>
      </Card>

      
    </div>
       
       
      
    )
}
