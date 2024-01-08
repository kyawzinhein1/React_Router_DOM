const User = ({userId}) => {
  let userName ;

  switch (userId) {
    case 1:
      userName = "John Doe";
      break;
    case 2:
      userName = "James";
      break;
    case 3:
      userName = "Mary";
      break;
    case 4:
      userName = "Alex";
      break;
    case 5:
      userName = "O'Henry";
      break;
  }

  return <h4>Post by - {userName}</h4>;
};

export default User;
