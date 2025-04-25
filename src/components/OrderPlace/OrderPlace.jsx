import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";
import SectionTitle from "../SectionTitle/SectionTitle";

const PlaceOrder = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      product_ids: data.product_ids,
      s_product_qty: data.s_product_qty,
      c_phone: data.c_phone,
      c_name: data.c_name,
      courier: data.courier,
      address: data.address,
      advance: data.advance || null,
      cod_amount: data.cod_amount,
      discount_amount: data.discount_amount || null,
      delivery_charge: data.delivery_charge,
    };

    try {
      const response = await axios.post(
        "https://admin.refabry.com/api/public/order/create",
        payload
      );

      if (response.data) {
        Swal.fire({
          title: "Order Placed!",
          text: "Your order has been placed successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
        reset();
      }
    } catch (error) {
      console.error("Order placement failed:", error);
      Swal.fire({
        title: "Error!",
        text: "Failed to place the order. Please check your inputs.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-4xl mt-4 mb-3 bg-white p-8 rounded-xl shadow-lg">
        
        <SectionTitle heading="Place Order" subHeading="Fill the form below" />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-4"
        >
          <div>
            <label className="block font-medium mb-1">
              Product IDs (comma-separated)
            </label>
            <input
              type="text"
              {...register("product_ids", { required: true })}
              placeholder="1,2"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Quantities (comma-separated)
            </label>
            <input
              type="text"
              {...register("s_product_qty", { required: true })}
              placeholder="2,1"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Customer Name</label>
            <input
              type="text"
              {...register("c_name", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Customer Phone</label>
            <input
              type="text"
              {...register("c_phone", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Courier</label>
            <input
              type="text"
              {...register("courier", { required: true })}
              placeholder="steadfast"
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Address</label>
            <textarea
              {...register("address", { required: true })}
              className="textarea textarea-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Cash on Delivery amount </label>
            <input
              type="number"
              {...register("cod_amount", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Delivery Charge</label>
            <input
              type="number"
              {...register("delivery_charge", { required: true })}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Advance (optional)</label>
            <input
              type="number"
              {...register("advance")}
              className="input input-bordered w-full"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">
              Discount (optional)
            </label>
            <input
              type="number"
              {...register("discount_amount")}
              className="input input-bordered w-full"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full mt-4">
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
