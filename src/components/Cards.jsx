/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Cards = ({ product }) => {
    const { _id, name, category, price, image, stock, description } = product
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                    className="md:h-72 md:w-72 rounded-2xl"
                        src={image}
                        alt="Image Not Found" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary">Available</div>
                        <div className="badge badge-secondary">{stock}</div>
                    </h2>
                    <h3 className="text-green-500">{category}</h3>
                    <h4 className="text-2xl text-red-500 font-bold">{price}</h4>
                    <p>{description}</p>
                    <div className="card-actions justify-center py-2">
                        <NavLink to={`/cardDetails/${_id}`}><div className="btn text-blue-500 btn-outline">View Details</div></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
