
import './App.css';//import de style globaux
import Header from "./Header/Header"

function App() {
  const texte="Première petites manip";
  const containerClassName ="App"
  return (
    <div className={containerClassName}>
     <header></header>
     <h2>Hello CDA 2021 </h2>
     <p>{texte.toUpperCase()}</p>
    </div>
  );
}

export default App;
