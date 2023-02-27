import { getAPI } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const [email, setEmail ] = useState("");
  const [password, setPassword ]= useState("");
  const navigate = useNavigate();

  async function login(event) {
    event.preventDefault();

    try {
      const resp = await getAPI().post("/auth/signin", {
        email,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <form action="" onSubmit={login}>
        <input
          type="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />

        <button>Envoyer</button>
      </form>
    </div>
  );
}
export default Signin;
