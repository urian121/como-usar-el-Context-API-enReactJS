// Importar createContext de 'react', Esto nos permitira crear un contexto dentro del cual podamos guardar cierta información para luego hacer que otros componentes  accedan a ella.
import { createContext } from "react";

import PropTypes from "prop-types";

// Usar createContext para Crear el contexto y lo almacenar en la variable 'MyDataContext'
export const MyDataContext = createContext();

// Crear el componente o bien conocido como proveedor
export const DataContextProvider = ({ children }) => {
  // Es aqui donde debe ir toda la información que se va a compartir entre los componentes
  const myContextData = {
    name: "John",
    age: 30,
  };

  //DataContext.jsx
  const valor = myContextData;

  // Vamos a retornar un componente en el cual podamos usar el contexto
  return (
    <MyDataContext.Provider value={valor}>{children}</MyDataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContextProvider;
