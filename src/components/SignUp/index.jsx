import { getAPI } from "../../utils/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <>

    <h1>Création de compte</h1>
    
    <div className="signupForm">
      <form action="" onSubmit={register}>
        <h2>Email</h2>
        <input
          type="email"
          name="email"
          placeholder="Entrez votre émail"
          onChange={(event) => setEmail(event.target.value)}
        />
        <h2>Mot de passe</h2>
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />
        <h2>Confirmer votre mot de passe</h2>
        <input
          type="password"
          name="password"
          placeholder="Entrez votre mot de passe"
          onChange={(event) => setPassword(event.target.value)}
        />

        <input
          type="text"
          name="name"
          placeholder="Entrez votre pseudo"
          onChange={(event) => setPseudo(event.target.value)}
        />

        <button>Créer un compte</button>
      </form>
    </div>
  </>
  );
}

export default Signup;
