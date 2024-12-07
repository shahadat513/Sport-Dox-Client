import { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';

const AddEquipment = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const category = form.category.value;
        const description = form.description.value;
        const price = form.price.value;
        const delivery = form.delivery.value;
        const stock = form.stock.value;
        const image = form.image.value;
        const customization = form.customization.value;

        const allProducts = { 
            name, 
            category, 
            description, 
            price, 
            delivery, 
            stock, 
            image, 
            customization,
            userName: user?.displayName,
            userEmail: user?.email 
        };

        // Send data to the server
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(allProducts),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Good job!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                    });
                    form.reset(); // Reset the form after submission
                }
            });
    };

    return (
        <>
            <div className="bg-base-300">
                <div className="w-11/12 mx-auto py-24">
                    <div>
                        <h1 className="text-3xl font-bold text-center pb-5">Add Product</h1>
                    </div>
                    <form onSubmit={handleSubmit}>
                        {/* 1st row */}
                        <div className="md:flex gap-8 pb-3">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Item Name</span>
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Product Name"
                                    className="input input-bordered w-full"
                                    readOnly // Prevent modification of this field
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Category</span>
                                </div>
                                <input
                                    type="text"
                                    name="category"
                                    placeholder="Enter Product Category"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        {/* 2nd row */}
                        <div className="md:flex gap-8 pb-3">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Description</span>
                                </div>
                                <input
                                    type="text"
                                    name="description"
                                    placeholder="Enter Product Description"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Price</span>
                                </div>
                                <input
                                    type="number"
                                    name="price"
                                    placeholder="Enter Product Price"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        {/* 3rd row */}
                        <div className="md:flex gap-8 pb-3">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Processing Time</span>
                                </div>
                                <input
                                    type="text"
                                    name="delivery"
                                    placeholder="Enter Product Delivery Time"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Stock Status</span>
                                </div>
                                <input
                                    type="number"
                                    name="stock"
                                    placeholder="Enter Product Quantity"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        {/* 4th row */}
                        <div className="md:flex gap-8 pb-3">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Image URL</span>
                                </div>
                                <input
                                    type="text"
                                    name="image"
                                    placeholder="Enter Product Image URL"
                                    className="input input-bordered w-full"
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">Customization</span>
                                </div>
                                <input
                                    type="text"
                                    name="customization"
                                    placeholder="Enter Product Customization"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        {/* User Details Row */}
                        <div className="md:flex gap-8">
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">User Name</span>
                                </div>
                                <input
                                    type="text"
                                    value={user?.displayName || ''}
                                    className="input input-bordered w-full"
                                    readOnly
                                />
                            </label>
                            <label className="form-control md:w-1/2">
                                <div className="label">
                                    <span className="label-text text-xl font-semibold">User Email</span>
                                </div>
                                <input
                                    type="email"
                                    value={user?.email || ''}
                                    className="input input-bordered w-full"
                                    readOnly
                                />
                            </label>
                        </div>
                        <input
                            className="w-full p-2 bg-gray-600 text-white mt-4"
                            type="submit"
                            value="Add Product"
                        />
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddEquipment;
