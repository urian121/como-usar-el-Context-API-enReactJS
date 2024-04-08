# Como usar el Context API en ReactJS

##### Context API proporciona una forma de pasar datos a través del árbol de componentes sin tener que pasar explícitamente las props en cada nivel. Esto es útil cuando se tienen datos que deben estar disponibles para muchos componentes a diferentes niveles de profundidad en el árbol de componentes.

##### El Context API consta de dos partes principales: el Proveedor (Provider) y el Consumidor (Consumer).

    Proveedor (Provider): El componente Provider permite envolver una parte de la aplicación con un contexto y pasar un valor a todos los componentes hijos de ese Provider. Por lo general, se coloca en la parte superior del árbol de componentes para que todos los componentes debajo de él tengan acceso al valor del contexto.

    Consumidor (Consumer): El componente Consumer permite a los componentes consumir el valor del contexto. Los componentes que están dentro de un Consumer tendrán acceso al valor del contexto proporcionado por el Proveedor más cercano en el árbol de componentes.

### Referencias

    https://www.youtube.com/watch?v=UPCOJgLlr3w
    https://www.youtube.com/watch?v=dmxVjrSdOAY
    https://tinkin.medium.com/qu%C3%A9-es-context-api-d856839130a0

##### useContext es un hook proporcionado por React que se utiliza para acceder al valor de un contexto en un componente funcional de React. Permite a un componente funcional suscribirse al contexto y leer el valor actual del contexto, sin necesidad de utilizar un componente Consumer.
