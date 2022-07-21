import React, { useContext } from "react";
import { cartContext } from "../../context/CartContext/CartContext";
import "./Cart.css"
import { Link } from "react-router-dom"
import imgPikachu from "../../assets/img/pikachu.jpg"

const Cart = () => {
    const { products, clear, calcularTotal } = useContext(cartContext)

    if (products.length === 0) {
        return (
            <>
                <div className="carritoVacio">
                    <h2>Tu carrito esta vacio, haz click <Link to={"/"}>AQUI</Link></h2>
                    <img className="pikachu" src={imgPikachu} alt="pikachu" />
                </div>
            </>
        )
    }

    return (
        <div>
            <h1 className="carritoh1">Carrito</h1>
            <div>
                {products.map((prod) => (
                    <div className="divCarrito" key={prod.id}>
                        <img className="imgCart" src={prod.img} alt="Carrito" />
                        <h3>Producto: {prod.name}</h3>
                        <h3>${prod.price}</h3>
                        <h4>Cantidad: {prod.qty}</h4>
                        <button className="delete" onClick={() => clear(prod.id)}>Eliminar</button>
                    </div>
                ))}
            </div>
            <div className="buttonYtotal">
                <h2 className="carritoh2">Total: ${calcularTotal()}</h2>
                <button className="buttonCarrito">Finalizar Compra</button>
            </div>
        </div>
    );
};

export default Cart;