import { useState, useEffect } from "react";
import SearchBox from "../../components/search-box/search-box";
import CardList from "../../components/card-list/card-list";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchField, setSearchField] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const customUser = {
          id: 90,
          name: "Jhon Doe",
          email: "jhondoe@mail.com",
        };

        setUsers([...users, customUser]);
        console.log(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    });
    setFilteredUsers(newFilteredUsers);
  }, [users, searchField]);

  const onSearchChangeHandler = (event) => {
    setSearchField(event.target.value);
  };

  return (
    <div className="App" style={{ border: "2px solid red" }}>
      <SearchBox onSearchChange={onSearchChangeHandler} />
      <CardList users={filteredUsers} />
    </div>
  );
};

export default Home;
