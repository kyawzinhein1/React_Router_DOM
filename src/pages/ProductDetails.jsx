import React from "react";
import { json, useLoaderData, useNavigate } from "react-router-dom";
import User from "./User";

const ProductDetails = () => {
  const post = useLoaderData();
  const {title, body, userId} = post;
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/products");
  };

  return (
    <>
      <h1>{title}</h1>
      <User userId = {userId}/>
      <p>{body}</p>
      <button onClick={navigateHandler}>Go Back to Posts</button>
    </>
  );
};

export default ProductDetails;

export const loader = async ({ request, params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postID}`
  );
  if (!response.ok) {
    throw json({ message: "Can't found your post!!!" });
  } else {
    const post = await response.json();
    return post;
  }
};
