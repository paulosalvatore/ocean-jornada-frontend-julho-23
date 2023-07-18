import "./App.css";
import Card from "./components/Card/Card";

function App() {
  return (
    <>
      <div className="card">
        <h1>Título do item</h1>
        <img src="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png" />
      </div>
      <Card />
    </>
  );
}

export default App;
