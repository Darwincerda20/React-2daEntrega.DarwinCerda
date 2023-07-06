import { useState, useEffect } from "react";
import { getProducts } from '../Data'
import  ItemList  from'./ItemList'


export const ItemListContainer = ({greeting}) =>{
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts() 
      .then(response => {
        setProducts(response)
      })
      .catch(error => {
        console.error(error)
      })
  },[])
      
  return (
        <div style={{ backgroundColor: 'orange', padding: '20px' }}>
          <br />
          <br />
          <h2 style={{position:"relative", left:"250px"}}>Bienvenidos a nuestro servicio de mantenimiento de bicicletas</h2>
          <p style={{position:"relative", left:"250px"}}>Mantén tu bicicleta en excelente estado y disfruta de tus paseos al máximo.</p>
          <ItemList products = {products}/>
        </div>
      );
}

export default ItemListContainer
