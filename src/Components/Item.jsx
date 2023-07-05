const Item = ({id, nombre, categoria, ImagenURL, precio, stock, Descripcion}) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {nombre}
                </h2>
            </header>
            <picture>
                <img src={ImagenURL} alt="{nombre} className="ItemImg />
            </picture>
            <section>
                <p className="Info">
                    Detalle: {Descripcion}
                </p>
                <p className="Info">
                    Precio: ${precio}
                </p>
                <p className="Info">
                    Stock Disponible: {stock}
                </p>
            </section>
            <footer className="ItemFooter">
                <button className="Option"> Ver Más </button>
            </footer>
        </article>
    )
}