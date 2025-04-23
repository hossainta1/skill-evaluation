import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  const imageUrl = `https://admin.refabry.com/storage/product/${product.image}`;

  return (
    <div className="border p-4 rounded shadow hover:shadow-lg transition duration-200">
      <img
        src={imageUrl}
        alt={product.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700">Price: {product.price}</p>
      <Link
        to={`/product/${product.id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProductCart;
