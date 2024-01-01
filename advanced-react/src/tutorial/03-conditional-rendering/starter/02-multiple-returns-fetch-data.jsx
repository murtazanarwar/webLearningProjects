import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setUser(data);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div>
      <img src={user.avatar_url} />
      <h1>{user.login}</h1>
      <h1>{user.url}</h1>
    </div>
  );
};
export default MultipleReturnsFetchData;
