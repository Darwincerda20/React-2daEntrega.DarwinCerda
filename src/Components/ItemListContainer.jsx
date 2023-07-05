import { useState, useEffect } from "react";
import { getProducts } from '../Data'
import { ItemList } from'./ItemList'


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
        <div style={{ backgroundColor: 'lightgray', padding: '20px' }}>
          <br />
          <br />
          <h2 style={{position:"relative", left:"250px"}}>Bienvenidos a mi pagina Web</h2>
          <ItemList products= {products}/>
        </div>
      );
}

export default ItemListContainer
