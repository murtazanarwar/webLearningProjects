import { useState } from "react";

const ToggleChallenge = () => {
  const [alert, setAlert] = useState(false);
  const handleClick = () => {
    setAlert(!alert);
  };
  return (
    <div>
      <button type="button" className="btn" onClick={handleClick}>
        toggle alert
      </button>
      {alert && <Alert />}
    </div>
  );
};
const Alert = () => {
  return <div className="alert alert-danger">hello world</div>;
};
export default ToggleChallenge;
