import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((user) => setUserData(user));
  }, [userId]);

  return (
    <>
      <h1>Usuario con id: {userId}</h1>
      <img src={`https://robohash.org/${userId}?set=set2&size=180x180`} />
      {userData && (
        <>
          <p>Nombre: {userData.name}</p>
          <p>Email: {userData.email}</p>
          <p>Cel: {userData.phone}</p>
        </>
      )}
    </>
  );
};

export default User;
