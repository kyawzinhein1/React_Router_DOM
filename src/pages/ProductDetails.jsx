import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>ProductDetails</h1>
      <h1>Product Title - {title} </h1>
      <button onClick={navigateHandler}>Go Back to Products</button>
    </>
  );
};

export default ProductDetails;
