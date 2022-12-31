import './App.css';
import BarraNav from './componentes/BarraNav';
import LoginForm from './componentes/LoginForm';
import TablaResultados from './componentes/TablaResultados';



function App() {

  return( <div id="App">
      <BarraNav></BarraNav>
  
      <h1 className="text-center my-5">Posiciones de Copa Buenos Aires</h1>
      <div className="container">
      <TablaResultados></TablaResultados>

      
      </div>
    </div>
  )

  
}

export default App;
