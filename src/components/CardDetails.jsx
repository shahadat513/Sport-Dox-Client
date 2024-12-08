import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CardDetails = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`) // Fetch data for the specific product
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((err) => console.error("Failed to fetch product:", err));
    }, [id]);

    if (loading) {
        return <p className="text-center text-xl font-bold">Loading...</p>;
    }

    if (!product) {
        return <p className="text-center text-xl font-bold">Product not found.</p>;
    }

    const { name, category, price, image, stock, description, delivery, customization, rating } = product;

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-8">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/2">
                        <img src={image} alt={name} className="w-full h-96 object-cover" />
                    </div>
                    <div className="lg:w-1/2 p-6">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">{name}</h2>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Category:</span> {category}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Price:</span> ${price}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Stock:</span> {stock}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Delivery:</span> {delivery}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Customization:</span> {customization}
                        </p>
                        <p className="text-gray-600 text-lg mb-4">
                            <span className="font-semibold">Rating:</span> {rating} <span className="text-yellow-500">★★★★★</span>
                        </p>
                        <p className="text-gray-600">
                            <span className="font-semibold">Description:</span> {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;
