import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCart from "../../components/ProductCart/ProductCart";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://admin.refabry.com/api/all/product/get")
      .then(res => {
        const productArray = res?.data?.data?.data;
        if (Array.isArray(productArray)) {
          setProducts(productArray);
        } else {
          console.error("Invalid Data",);
        }
      })
      .catch(err => console.error("Error occure in API", err));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
      {products.length === 0 ? (
        <p className="col-span-3 text-center text-gray-500">No products available</p>
      ) : (
        products.map((product) => (
          <ProductCart key={product.id} product={product} />
        ))
      )}
    </div>

  );
};

export default ProductList;

