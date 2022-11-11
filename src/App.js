import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/containers/task_list';
// import EjemploState from './hooks/EjemploState';
import EjemploEffect from './hooks/EjemploEffect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
     {/* <TaskListComponent></TaskListComponent> */}
     {/*Ejemplo de HOOK useState*/}
     {/* <EjemploState></EjemploState> */}
     <EjemploEffect></EjemploEffect>
      </header>
    </div>
  );
}

export default App;
