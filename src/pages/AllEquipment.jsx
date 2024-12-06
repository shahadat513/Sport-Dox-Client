import { useLoaderData } from "react-router-dom";
import Cards from "../components/Cards";

const AllEquipment = () => {
    const product = useLoaderData()

    return (
        <div>
            <h1 className="text-3xl font-bold text-center py-10">All Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-8 my-8">
                {
                    product?.map(product => <Cards key={product._id} product={product}></Cards>)
                }
            </div>
        </div>
    );
}

export default AllEquipment;
