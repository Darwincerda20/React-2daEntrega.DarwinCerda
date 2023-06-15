import { NavBar } from "./Components/NavBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ItemListContainer } from './Components/ItemListContainer';

import './App.css';

function App() {
  return ( 
    <>
    <NavBar />
    <FontAwesomeIcon icon={faShoppingCart} />
    <ItemListContainer greeting={"texto-Bienvenidos"} />
    </>
  );
}

export default App;
