import "./App.css";
import sum from "./components/sum"; //Imports de librerias, archivos locales, components, estilos, etc.

//Datos, funciones, estructuras, clases, etc.

const num1 = 5;
const num2 = 4;

// function getRamdom() {
//   return Math.random();
// }

// let valor1;

//Declaracion de la funcion del componente
//Hay dos formas principeles de recibir propiedades, directa o de estructurando

function App() {
  // Al igual que afuera de la funcion componente, podemos seguir declarando variables, funciones, etc.

  return (
    <p>
      Resultado: <sum>{sum(num1, num2)}</sum>
    </p>
  );
}

// function Header ({ services }) {
//   // Al igual que afuera de la funcion componente, podemos seguir declarando variables, funciones, etc.
//   const valor1 = getRamdom();
//   // HOOKS: Metodos especificos de react para manejar el estado del componente, TIENEN QUE IR DENTRO DE LA FUNCION COMPONENTE

//   // Declaracion de retorno
//   return {
//     <>
//       <Header className="App-header">
//         Header
//       <div>
//       </div>

//     </>
//   }
// }

//Exportaciones, comunmente se exporta el componente actual, o podemos exportar multiples componentes, funciones, etc.
export default App;
