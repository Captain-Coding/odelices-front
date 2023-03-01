import SearchBar from "../SearchBar";

const Recipe = () => {
    return (
        <>
    <div className="container">
        <img src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="photo Poulet Roti" />
            <div className="Ingrédients">
            <h2>Poulet Roti</h2>
            <h3>Ingrédients : </h3>
            <ul className="ingredients">
                <li>Poulet</li>
                <li>Epices</li>
                <li>Patates</li>
            </ul>
            </div>
        <div className="etapes">
        <ul>
            <li>
                <h4>Etape 1</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
            </li>

            <li>
                <h4>Etape 2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
            </li>

            <li>
                <h4>Etape 3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
            </li>

            <li>
                <h4>Etape 4</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
            </li>   
        </ul>
        </div>

        <div className="commentaires">
            <p>Pseudo du membre</p>
            <textarea value="texte"> Votre commentaire...</textarea>
            <button type="submit">Ajouter votre commentaire</button>
        </div>
</div>
</>
);
} ;

export default Recipe;
