import './App.css';
import { NavBar } from "./Components/NavBar"/* TRAIGO EL NAVBAR */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; /* TRAIGO LAS IMAGENES DE FONTAWESOME */
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';/* TRAIGO LA IMAGEN DEL CARRITO */
import { ItemListContainer } from './Components/ItemListContainer';/* TRAIGO EL GREETINGS */
import { CartWidget } from './Components/CartWidget'; /* TRAIGO EL CARRITO */
import { ItemDetailContainer } from './Components/ItemDetailContainer'


function App() {
  return ( 
    <>
    <NavBar />
    <CartWidget />
    <FontAwesomeIcon icon={faShoppingCart} />
    <ItemListContainer greeting={"texto-Bienvenidos"} />
    <ItemDetailContainer></ItemDetailContainer>


    </>
  );
}

export default App;
