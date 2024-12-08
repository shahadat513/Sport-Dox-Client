import { useLoaderData } from "react-router-dom";
import AllCards from "../components/AllCards";

const AllEquipment = () => {
    const products = useLoaderData(); // Ensure this is named correctly (plural for multiple products)

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">All Products</h1>
            <div className="w-11/12 mx-auto my-4">
                <table className="table w-full text-left">
                    <thead>
                        <tr className="bg-gray-500 text-white">
                            <th>Cover</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => (<AllCards key={product._id} product={product} />))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
