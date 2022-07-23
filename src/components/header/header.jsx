export default function Header({ ph1, ph2 }) {
  return (
    <div className="titleContainer">
      <span>
        <h1 className="boldTitle">{ph1}</h1>
      </span>
      <span>
        <h2 className="normalTitle">{ph2}</h2>
      </span>
    </div>
  );
}
