import React from "react";

export default function Login() {
  console.log(process.env.REACT_APP_LOGIN);

  return (
    <div>
      <a href={process.env.REACT_APP_LOGIN}>
        <button>Login</button>
      </a>
    </div>
  );
}
