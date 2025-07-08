import React, { useState } from 'react';

const User = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const containerStyle = {
    alignItems: "center",
    display: 'flex',
    flexDirection: 'column',
    height: "200px",
    width: "200px",
    padding: "10px",
    paddingTop: "50px",
    margin: "17px",
    backgroundColor: "lightblue",
    borderRadius: "50% 50% 20% 20%",
    transform: isHovered ? "scale(1.05)" : "scale(1)",
    boxShadow: isHovered ? "0 8px 16px rgba(24, 125, 212, 0.3)" : "none",
    cursor: "pointer"
  };

  return (
    <div style={containerStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img style={{ width: "80%", borderRadius: "60% 60% 60% 60%" }} src={props.avatar_url} alt={props.login} title={props.login} />
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>{props.login.toUpperCase()}</p>
    </div>
  );
};

export default User;
