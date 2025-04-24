import React from "react";
import img from "../../assets/purchase-sale-discount-fashion-style.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row gap-x-8">        
        <img
          src={img}
          alt="Product"
          className="w-full lg:w-2/3 max-h-[500px] object-contain rounded-lg shadow-2xl"
        />
        <div className="w-full lg:w-1/3">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800">
          Purches your Premium Winter Jacket
          </h1>
          <p className="py-6 text-gray-600">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/product" className="btn btn-primary">Purches product</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
