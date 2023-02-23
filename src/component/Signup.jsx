const Signup = () => {
  return (
    <>
      <header class="header">
        <img
          src="../images/logo_odelices.png"
          class="header_logo"
          alt="Logo O'Delice"
        />
      </header>

      <main class="signup_form">
        <h1>O'délices - Création de compte</h1>

        <form method="POST" action="traitement_formulaire.php">
          <label for="email">Email :</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Entrez votre émail"
          />

          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            placeholder="Entrez votre mot de passe"
          />

          <label for="confirm_password">Confirmer le mot de passe :</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            required
            placeholder="Confirmez votre votre mot de passe"
          />

          <label for="pseudo">Pseudo :</label>
          <input
            type="text"
            id="pseudo"
            name="pseudo"
            required
            placeholder="Entrer votre pseudo"
          />

          <input type="submit" value="Créer un compte" />
        </form>
      </main>

      <footer class="footer">
        <h4>A propos</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
          lobortis magna. In augue sapien, tincidunt a lobortis ut, ullamcorper
          eu odio. Fusce tempor neque.{" "}
        </p>

        <p>CGU</p>

        <h5>Contact</h5>
        <p>mail</p>
      </footer>
    </>
  );
};
export default Signup;
