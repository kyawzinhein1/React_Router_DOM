import { Link } from "react-router-dom";

const PRODUCTS = [
  {
    id: 1,
    title: "Apple",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil quis, totam, repellat, ipsam sunt quia provident consequatur vel hic repellendus velit amet beatae sint! Aliquam aperiam architecto ex voluptates?",
  },
  {
    id: 2,
    title: "Orange",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil quis, totam, repellat, ipsam sunt quia provident consequatur vel hic repellendus velit amet beatae sint! Aliquam aperiam architecto ex voluptates?",
  },
  {
    id: 3,
    title: "Mango",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nihil quis, totam, repellat, ipsam sunt quia provident consequatur vel hic repellendus velit amet beatae sint! Aliquam aperiam architecto ex voluptates?",
  },
];

const Products = () => {
  return (
    <>
      {PRODUCTS.map((product) => (
        <Link to={`/product/${product.title}`} key={product.id}>
          <div className="card">
            <h3>{product.title}</h3>
            <p>{product.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Products;
