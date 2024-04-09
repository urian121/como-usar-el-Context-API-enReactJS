import { useContext } from "react";

// Importamos el contexto
import { MyDataContext } from "../contexts/DataContext";

const Button = () => {
  const { contador, setContador } = useContext(MyDataContext);
  return (
    <button onClick={() => setContador(contador + 1)}>Incrementar Valor</button>
  );
};

export default Button;
