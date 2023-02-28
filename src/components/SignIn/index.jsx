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
      <h1>Connexion a votre compte</h1>
      <h2>Email</h2>
      <form action="" onSubmit={login}>
        <input
          type="email"
          name="email"
          placeholder="entrez votre email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h2>Mot de passe</h2>
        <input
          type="password"
          name="password"
          placeholder="entrez votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <p className="password">Mot de passe oublié?</p>

        <button>Connexion</button>
      </form>
      <p className="notEnregistred">Vous n'êtes pas encore inscrit?</p>
    </div>
  );
}
export default Signin;
