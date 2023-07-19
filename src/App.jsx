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

function App() {
  return (
    <>
      <div className="cards-list">
        <Card item={item1} />
        <Card item={item2} />
      </div>
    </>
  );
}

export default App;
