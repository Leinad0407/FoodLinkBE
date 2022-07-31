import "./header.scss";
export default function Header({ ph1, ph2 }) {
  return (
    <div className="titleContainer">
      <h4 className="boldTitle">
        {ph1} {ph2}
      </h4>
    </div>
  );


}

