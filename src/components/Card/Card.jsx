import "./Card.css";

export default function Card(props) {
  // console.log(props);

  const item = props.item;

  // console.log(item);

  return (
    <div className="card">
      <h1>{item.nome}</h1>
      <img src={item.imagem} />
    </div>
  );
}
