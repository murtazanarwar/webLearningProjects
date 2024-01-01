import { useState } from "react";

const UserChallenge = () => {
  const [user, setUser] = useState(null);
  const [login, setLogin] = useState(false);
  const handleClick = () => {
    setLogin(!login);
    setUser("murtaza");
  };
  return (
    <div>
      <h4>{!login ? "Please Login" : `Hello There, ${user}`}</h4>
      <button className="btn" onClick={handleClick}>
        {!login ? "login" : "logout"}
      </button>
    </div>
  );
};

export default UserChallenge;
