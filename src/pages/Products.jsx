import { Link, json, useLoaderData } from "react-router-dom";
import User from "./User";

const Products = () => {
  const PRODUCTS = useLoaderData();

  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="card">
            <h3 className="title">{product.title}</h3>
            <div className="note">
              <User userId={product.userId} className="name" />
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;

export const loader = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  if (!response.ok) {
    throw json({ message: "Can't get posts now." }, { status: 500 });
  } else {
    const products = await response.json();
    return products;
  }
};
