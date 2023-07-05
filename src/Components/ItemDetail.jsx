import ItemCount from "./ItemCount";

const ItemDetail = ({
  id,
  nombre,
  imagenURL,
  categoria,
  Descripcion,
  precio,
  stock,
}) => {
  return (
    <article className="CardItem">
      <header className="Header">
        <h2 className="ItemHeader">{nombre}</h2>
      </header>
      <picture>
        <img src={imagenURL} alt={nombre} className="ItemImg" />
      </picture>
      <section>
        <p className="Info">Categoria: {categoria}</p>
        <p className="Info">Descripción: {Descripcion}</p>
        <p className="Info">Precio: {precio}</p>
      </section>
      <footer className="ItemFooter">
        <ItemCount
          initial={1}
          stock={stock}
          onAdd={(quantity) => console.log("Cantidad Agregada")}
        />
      </footer>
    </article>
  );
};

export default ItemDetail;
