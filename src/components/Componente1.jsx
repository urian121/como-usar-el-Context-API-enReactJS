import { useContext } from "react";

// Importamos el contexto
import { MyDataContext } from "../contexts/DataContext";

const Componente1 = () => {
  const { contador } = useContext(MyDataContext);
  return (
    <>
      <h2>Componente 1</h2>
      <p>Cuenta: {contador}</p>
    </>
  );
};
export default Componente1;
