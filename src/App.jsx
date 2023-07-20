import { useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";

const item1 = {
  nome: "Rick Sanchez",
  imagem:
    "https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png",
};

const item2 = {
  nome: "Morty Smith",
  imagem:
    "https://comicvine.gamespot.com/a/uploads/scale_medium/6/66303/4469088-tumblr_inline_n0aleph3fl1r8rr6o.jpg",
};

const item3 = {
  nome: "Summer Smith",
  imagem:
    "https://images.squarespace-cdn.com/content/v1/5616ac17e4b018d366f57f53/1616952566614-0IEBMBBMXMO30Z37PTMN/summer+smith+soundboard",
};

// const itens = [];

async function carregarDadosApi() {
  // console.log("Iniciei a função carregarDadosApi");

  const apiUrl = "https://ocean-api-itens.onrender.com/itens";

  const response = await fetch(apiUrl);
  const body = await response.json();

  console.log(body);

  // itens.push(...body);
  // console.log("body", body);
  // console.log("itens atualizados", itens);
}

// carregarDadosApi();

function App() {
  const [itens, setItens] = useState([]);

  console.log("itens", itens);

  setItens([item1, item2]);

  // console.log("Iniciei o componente App");

  // console.log("itens", itens);

  return (
    <>
      <div className="cards-list">
        {itens.map(function (item, index) {
          return <Card key={index} item={item} />;
        })}
        {/* <Card item={item1} />
        <Card item={item2} />
        <Card item={item3} /> */}
      </div>
    </>
  );
}

export default App;
