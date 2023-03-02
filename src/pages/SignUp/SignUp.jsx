import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pseudo, setPseudo] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const register = async (event) => {
    event.preventDefault();

    // valide le formulaire (aucun input ne doit être vide et les mdp doivent correspondrent)
    if (!email || !password || !confirmPassword || !pseudo) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("les mots de passes ne correspondent pas");
      return;
    } else {
      setErrorMessage("");
    }

    // requête pour enregistrer l'utilisateur en BDD
    try {
      const resp = await axios("http://railway", {
        method: "POST",
        data: {
          email,
          password,
          pseudo,
        },
      });
    } catch (error) {
      console.log(error);
    }

    // redirection
    navigate("/signin");
  };

  return (
    <>
      <h1>Création de compte</h1>

      <form action="" onSubmit={register} className="signupForm">
        {errorMessage && <p>{errorMessage}</p>}

        <label htmlFor="name">Entrez votre prénom: </label>
        <input
          type="text"
          name="firstname"
          placeholder="Pierre"
          value={firstname}
          onChange={(event) => setFirstname(event.target.value)}
        />

        <label htmlFor="name">Entrez votre nom: </label>
        <input
          type="text"
          name="lastname"
          placeholder="Dupont"
          value={lastname}
          onChange={(event) => setLastname(event.target.value)}
        />

        <label htmlFor="name">Entrez votre email: </label>
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="name">Entrez votre mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="mot de passe"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <label htmlFor="name">Confirmez votre mot de passe :</label>
        <input
          type="password"
          name="password"
          placeholder="mot de passe"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
        />

        <label htmlFor="name">Entrez votre pseudo :</label>
        <input
          type="text"
          name="name"
          placeholder="JeanBon67"
          value={pseudo}
          onChange={(event) => setPseudo(event.target.value)}
        />

        <button type="submit">Créer un compte</button>
      </form>
    </>
  );
};

export default Signup;
