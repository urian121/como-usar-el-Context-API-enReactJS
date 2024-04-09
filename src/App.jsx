import "./App.css";
import Componente1 from "./components/Componente1";
import Componente2 from "./components/Componente2";
import Componente3 from "./components/Componente3";
import Componente4 from "./components/Componente4";
import Componente5 from "./components/Componente5";
import { DataContextProvider } from "./contexts/DataContext";

function App() {
  return (
    <>
      <h1>Cómo usar el Context API</h1>
      <p>
        Context API proporciona una forma de pasar datos a través del árbol de
        componentes sin tener que pasar explícitamente las props en cada nivel.
        Esto es útil cuando se tienen datos que deben estar disponibles para
        muchos componentes a diferentes niveles de profundidad en el árbol de
        componentes.
      </p>
      <DataContextProvider>
        <Componente1 />
        <Componente2 />
        <Componente3 />
        <Componente4 />
        <Componente5 />
      </DataContextProvider>
    </>
  );
}

export default App;
