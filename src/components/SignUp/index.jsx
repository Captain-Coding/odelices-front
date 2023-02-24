import { getAPI } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { name, setName } = useState("");
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  const navigate = useNavigate();

  async function register(event) {
    event.preventDefault();

    try {
      const resp = await getAPI().post("/auth/signup", {
        email,
        password,
        name,
      });
      navigate("/");
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div>
      <form action="" onSubmit={register}>
        <input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
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

export default Signup;