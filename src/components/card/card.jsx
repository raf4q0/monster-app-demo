import { Link } from "react-router-dom";
import "./card.styles.css";

const Card = ({ user }) => {
  const { id, name, email } = user;
  return (
    <Link className="card-container" to={`/users/${id}`}>
      <img
        alt={`user ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </Link>
  );
};

export default Card;
