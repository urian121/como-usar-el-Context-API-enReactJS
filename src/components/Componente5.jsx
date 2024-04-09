import { useContext } from "react";

// Importamos el contexto
import { MyDataContext } from "../contexts/DataContext";

const Componente5 = () => {
  const { decrementar } = useContext(MyDataContext);
  return (
    <>
      <h2>Componente 5</h2>
      <button onClick={decrementar}>Decrementar</button>
    </>
  );
};

export default Componente5;
