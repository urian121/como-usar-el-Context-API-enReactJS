import Button from "./Button";
// Importar useContext de react, esta funcion permite acceder al valor de un contexto
import { useContext } from "react";

// Importamos el contexto
import { MyDataContext } from "../contexts/DataContext";

const Componente3 = () => {
  const { myContextData, contador } = useContext(MyDataContext);

  return (
    <>
      <h2>Componente 3</h2>
      <p>
        Nombre: {myContextData.name} - {myContextData.age}
      </p>
      <p>
        Cuenta: <span>{contador}</span>
      </p>
      <Button />
    </>
  );
};

export default Componente3;
