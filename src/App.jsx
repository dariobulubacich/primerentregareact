import { Navbar } from "../src/components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer saludo="¡Bienvenidos!" />
    </div>
  );
}

export default App;
