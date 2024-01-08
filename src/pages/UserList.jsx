import { useLoaderData } from "react-router-dom";

const UserList = () => {
  const USERS = useLoaderData();

  return (
    <>
      {USERS.map((user) => (
        <div className="card" key={user.id}>
          <h3 className="title">Name . {user.name}</h3>
          <h4>Email . {user.email}</h4>
        </div>
      ))}
    </>
  );
};

export default UserList;

export const loader = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw json({ message: "Can't get posts now." });
  } else {
    const users = await response.json();
    return users;
  }
};
