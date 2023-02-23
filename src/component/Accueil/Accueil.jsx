import "./style.css";

const Accueil = () => {
  return (
    <>
      <header>
        <img src="./images/logo_odelices.png" alt="Logo O'Delice" />
        <button type="button">S'inscrire</button>
        <button type="button">Se connecter</button>
      </header>

      <div>
        <h2>J'ai dans mon frigo...</h2>
        <form>
          <input type="text" placeholder="Ingrédients" />
        </form>
      </div>
      <article>
        <h3>Titre de la recette</h3>
        <p>Pseudo du membre</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          iaculis sem, et varius eros. Ut efficitur eleifend nulla sed
          ullamcorper. Duis malesuada vel purus id fringilla. Maecenas nec enim
          quam. Vestibulum fringilla est sit amet mauris interdum, et sagittis
          felis sagittis. Etiam vulputate ac nulla sed suscipit. Maecenas
          gravida.
        </p>
      </article>

      <article>
        <h3>Titre de la recette</h3>
        <p>Pseudo du membre</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          iaculis sem, et varius eros. Ut efficitur eleifend nulla sed
          ullamcorper. Duis malesuada vel purus id fringilla. Maecenas nec enim
          quam. Vestibulum fringilla est sit amet mauris interdum, et sagittis
          felis sagittis. Etiam vulputate ac nulla sed suscipit. Maecenas
          gravida.
        </p>
      </article>

      <article>
        <h3>Titre de la recette</h3>
        <p>Pseudo du membre</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          iaculis sem, et varius eros. Ut efficitur eleifend nulla sed
          ullamcorper. Duis malesuada vel purus id fringilla. Maecenas nec enim
          quam. Vestibulum fringilla est sit amet mauris interdum, et sagittis
          felis sagittis. Etiam vulputate ac nulla sed suscipit. Maecenas
          gravida.
        </p>
      </article>

      <article>
        <h3>Titre de la recette</h3>
        <p>Pseudo du membre</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at
          iaculis sem, et varius eros. Ut efficitur eleifend nulla sed
          ullamcorper. Duis malesuada vel purus id fringilla. Maecenas nec enim
          quam. Vestibulum fringilla est sit amet mauris interdum, et sagittis
          felis sagittis. Etiam vulputate ac nulla sed suscipit. Maecenas
          gravida.
        </p>
      </article>

      <footer>
        <h4>A propos</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc a
          lobortis magna. In augue sapien, tincidunt a lobortis ut, ullamcorper
          eu odio. Fusce tempor neque.{" "}
        </p>

        <p>CGU</p>

        <h5>Contact</h5>
        <p>mail?</p>
        <p>numero?</p>
      </footer>
    </>
  );
};

export default Accueil;
