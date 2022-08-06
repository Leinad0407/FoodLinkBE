import "./footer.scss";
export default function Footer() {
  return (
    <div id="fatherContainer">
      <div id="firstPart" className="row">
        <div id="splitter" className="col col-lg-12"></div>
        <img
          className="col col-lg-4 col-12"
          src="https://pbs.twimg.com/media/FX_2fGBWAAAON7X?format=png&name=240x240"
        ></img>
        <div className="col col-lg-4 col-12"></div>
        <p className=" col col-lg-4 col-12 FoodLinkAddress">
          Puebla 308 Col. Roma Norte
          <br />
          Ciudad de México
        </p>
        <p className="col col-lg-12 col-12" id="rights">
          © 2022 FoodLink. Todos los derechos reservados.{" "}
        </p>
      </div>
    </div>
  );
}
