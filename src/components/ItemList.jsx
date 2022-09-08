import React, {useEffect, useState} from "react";
import Item from "./Item"
import customFetch from "../utils/customFetch";

const data = [
    {
        id: 1,
        title: "HeadSet",
        brand: "David&Clark",
        model: "H10",
        caracteristic: "Noise Canceling",
        price: "$$$",
        image: "./assets/img/HeadSet.png",   
    },
    {
        id: 2,
        title: "Captain Bars",
        brand: "HS-Flight",
        model: "Gold",
        caracteristic: "Washable",
        price: "$$$",
        image: "./assets/img/CaptainBars.png",
    },
];

function ItemList () {
    const [datos, setDatos] =useState([]);
    //ComponentDidMount
    useEffect(() => {
        customFetch(2000, data)
            .then(datos => setDatos(data))
            .catch(err => console.log(err))
    }, []);

        return (
        <div>
            {
                datos.map(item => (
                    <Item
                        start = {0}
                        title = {item.title}
                        brand = {item.brand}
                        model = {item.model}
                        caracteristic = {item.caracteristic}
                        price = {item.price}
                        image={item.image} />
                ))
            }
            </div>           
        )
};

export default ItemList;