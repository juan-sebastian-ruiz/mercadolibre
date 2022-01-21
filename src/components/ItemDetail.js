import React, { useState } from "react";
import ItemsAPI from "./ItemsAPI";
import { useParams } from "react-router-dom";
import Search from './Search';

export default function ItemDetail(props) {

    const { id } = useParams(); //MLA875518875

    const [item, setItem] = useState({})

    return (
        <>
            <Search/>
            <div className="container">
                <ItemsAPI fetchData={(data) => { setItem(data.item) }} />
                <div className="item-detail">
                    <img alt="" src={item.picture} />
                    <div className="item-detail-title">
                        <div className="condition-sold">
                            <p>{item.condition} - {item.sold_quantity} Vendidos</p>
                        </div>
                        <p className="title">{item.title}</p>
                        <p className="price">{item.price?.amount.toLocaleString("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 })}</p>
                        <button className="btn-default">Comprar</button>
                    </div>
                    <div className="item-detail-description">
                        <h3>Descripción del producto</h3>
                        <p>{item.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}