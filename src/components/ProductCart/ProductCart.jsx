import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    // <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
    //   <img
    //     src={imageUrl}
    //     alt={product.name}
    //     className="w-full h-48 object-cover rounded"
    //   />
    //   <h2 className="text-lg font-bold mt-2">{product.name}</h2>
    //   <p className="text-gray-700">Price: {product.price}</p>
    //   <Link
    //     to={`/product/${product.id}`}
    //     className="text-blue-500 hover:underline mt-2 inline-block"
    //   >
    //     View Details
    //   </Link>
    // </div>

    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-yellow-900 text-white">
        Tk {product.price}
      </p>
      <div className="card-body">
        <h2 className="card-title flex flex-col items-center">
          {product.name}
        </h2>

        <div className="card-actions justify-center">
          <Link to={`/product/${product.id}`} className="btn btn-primary">View product details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
