import { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";


const CardDetails = () => {
    const data = useLoaderData()
    const [single,setSingle]=useState([])
    const { name, category, price, image, stock, description } = single
    console.log(data);
    return (
        <>
        <div>
            <img src={image} alt="22" />
        </div>
        </>
    );
}

export default CardDetails;
