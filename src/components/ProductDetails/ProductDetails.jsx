import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://admin.refabry.com/api/all/product/get")
      .then((res) => {
        const allProducts = res.data.data.data;
        const found = allProducts.find((p) => p.id === parseInt(id));
        setProduct(found);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  const { name, price, image, short_desc, discount_amount, stock } = product;

  // Extract details from short_desc
  const call =
    short_desc.split("Call :")[1]?.split("WhatsApp")[0]?.trim() || "";
  const details =
    short_desc.split("Details:")[1]?.split("Available sizes:")[0]?.trim() || "";
  const sizes =
    short_desc.split("Available sizes:")[1]?.split("Visit us at:")[0]?.trim() ||
    "";
  const address = short_desc.split("Visit us at:")[1]?.trim() || "";

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="card bg-base-100 w-96 shadow-sm relative">
        <figure>
          <img
            src={`https://admin.refabry.com/images/product/${image}`}
            alt={name}
            className="max-h-60 object-contain p-4"
          />
        </figure>

        <div className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            {name}
          </h2>

          <p className="text-lg text-gray-700 font-semibold">
            Price: <span className="text-green-600 font-bold">{price} TK</span>
          </p>

          <p className="text-gray-700">
            <span className="font-bold">Call Us:</span> {call}
          </p>

          <p className="text-gray-700">
            <span className="font-bold">Details:</span> {details}
          </p>

          <p className="text-gray-700">
            <span className="font-bold">Available Sizes:</span> {sizes}
          </p>

          <p className="text-gray-700">
            <span className="font-bold">Address:</span> {address}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <span className="badge badge-secondary">Stock: {stock}</span>
            {discount_amount && (
              <span className="badge badge-accent">
                Discount: ৳{discount_amount}
              </span>
            )}
          </div>

          <div className="flex justify-end gap-x-4 pt-4">
            <Link to="" className="btn btn-primary">
              Place Order for Purches
            </Link>
            <Link to="/product" className="btn btn-outline">
              Back to product list
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
