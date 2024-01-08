import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  let title = "Unknown Error!!!";

  if(error.status === 500 ){
    title = error.data.message;
  }
  return (
    <section>
      <h3>{title}</h3>
      <Link to={"/"}>
        <button>Go Back Home...</button>
      </Link>
    </section>
  );
};

export default Error;
