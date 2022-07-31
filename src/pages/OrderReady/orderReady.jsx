import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { Button } from "react-bootstrap";

export default function OrderReady() {
  return (
    <div className=" col col-lg-12 container row">
      <Header className="col col-lg-12" ph1="¡Tu comida" ph2="está lista!" />
      <Button variant="success" className="col col-lg-2">
        Contacta al donador
      </Button>
      <Footer className="col col-lg-12" />
    </div>
  );
}
