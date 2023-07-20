import { useEffect, useState } from "react";
import Card from "./components/Card/Card";
import "./App.css";

function App() {
  const [itens, setItens] = useState([]);

  async function carregarDadosApi() {
    const apiUrl = "https://ocean-api-itens.onrender.com/itens";

    const response = await fetch(apiUrl);
    const body = await response.json();

    setItens(body);
  }

  useEffect(function () {
    carregarDadosApi();
  }, []);

  return (
    <>
      <div className="cards-list">
        {itens.map(function (item, index) {
          return <Card key={index} item={item} />;
        })}
      </div>
    </>
  );
}

export default App;
