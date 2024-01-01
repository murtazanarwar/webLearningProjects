const url = "https://api.github.com/users";
import { useState, useEffect } from "react";

const FetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <div>
      {/* {["murtaza", "murtaza", "murtaza"]} */}
      {users.map((user) => {
        return (
          <div key={user.id}>
            <img src={user.avatar_url} alt={user.login} />
            <h1>{user.login}</h1>
            <h4>{user.url}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default FetchData;
