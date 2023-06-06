import React, { useRef } from "react";

const User = ({ setUser }) => {
  const inputRef = useRef();
  const handleUserName = () => {
    inputRef.current.value && setUser(inputRef.target.value);
  };
  return (
    <div className="start">
      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button className="start-btn" onClick={handleUserName}>
        Let's Start
      </button>
    </div>
  );
};

export default User;
