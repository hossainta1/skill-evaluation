import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); // gets ID from route
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
      .catch((err) => {
        console.error("Error fetching products", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-base-200 p-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl">
        <figure>
          <img
            src={`https://admin.refabry.com/images/product/${product.image}`}
            alt={product.name}
            className="max-h-[300px] object-contain"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">{product.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: product.short_desc }}></p>

          <div className="flex flex-wrap gap-4 mt-4">
            <div className="badge badge-primary text-white">
              Price: ৳{product.price}
            </div>
            <div className="badge badge-secondary">Stock: {product.stock}</div>
            {product.discount_amount && (
              <div className="badge badge-accent">
                Discount: ৳{product.discount_amount}
              </div>
            )}
          </div>

          <div className="card-actions justify-end mt-6">
            <button className="btn btn-primary">Add to Cart</button>
            <button className="btn btn-outline">Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
