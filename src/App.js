// import logo from './logo.svg';
import './App.css';
import Father from './components/containers/father';
import TaskListComponent from './components/containers/task_list';
// import EjemploState from './hooks/EjemploState';
// import EjemploEffect from './hooks/EjemploEffect';
// import { EjemploContext } from './hooks/EjemploContext';
// import EjemploChildren from './hooks/EjemploChildren';
// import GreetingStyled from './components/pure/forms/greetingStyled';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
     <TaskListComponent></TaskListComponent>
     {/*Ejemplo de HOOK useState*/}
     {/* <EjemploState></EjemploState>
     <EjemploEffect></EjemploEffect>
     <EjemploContext></EjemploContext>
     <EjemploChildren name = 'Emilce'>
      <h3>
        Contenido de props.children
      </h3>
     </EjemploChildren> */}
     {/* <GreetingStyled name = 'Emi'></GreetingStyled>
      </header> */}
      {/** Gestión de eventos */}
      <Father></Father>
    </div>
  );
}

export default App;
