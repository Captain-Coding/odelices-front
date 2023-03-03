import { useState, useEffect, } from "react";
import { Link, useParams } from "react-router-dom";
import { getAPI } from '../../utils/api';

const Recipe = () => {
    const [recipe, setRecipe] = useState([]);
    
    let { id } = useParams(); 

    useEffect(() => {
        getAPI().get(`/recipes/${id}`)
            .then(response => setRecipe(response.data))
            .catch(error => console.log(error));
    }, []);


     return (
         <>
         <Link to={`/recipes/update/${id}`}>
            <button>Modifier la recette</button>
        </Link>

        <div className="commentaires">
            <p>Pseudo du membre</p>
            <textarea value="texte"> Votre commentaire...</textarea>
            <button type="submit">Ajouter votre commentaire</button>
        </div>
        
           <div className="recipe">                 
              <img src={recipe.picture} alt={recipe.name} />    
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
              <p>{recipe.steps}</p> 
        
            
         </div> 

        
</>
);
};

export default Recipe;

// import SearchBar from "../SearchBar";
// import { Link } from "react-router-dom";


// const Recipe = () => {
//     return (
//         <>
//     <div className="container">
//         <img src="https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="photo Poulet Roti" />
//             <div className="Ingrédients">
//             <h2>Poulet Roti</h2>
//             <h3>Ingrédients : </h3>
//             <ul className="ingredients">
//                 <li>Poulet</li>
//                 <li>Epices</li>
//                 <li>Patates</li>
//             </ul>
//             </div>
//         <div className="etapes">
//         <ul>
//             <li>
//                 <h4>Etape 1</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
//             </li>
//             <li>
//                 <h4>Etape 2</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
//             </li>
//             <li>
//                 <h4>Etape 3</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
//             </li>
//             <li>
//                 <h4>Etape 4</h4>
//                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo egestas odio, a pulvinar sapien.</p>
//             </li>   
//         </ul>
//         </div>

//         <Link to="/recipes/update/id">
//             <button>Modifier la recette</button>
//             </Link>

//         <div className="commentaires">
//             <p>Pseudo du membre</p>
//             <textarea value="texte"> Votre commentaire...</textarea>
//             <button type="submit">Ajouter votre commentaire</button>
//         </div>
// </div>
// </>
// );
// } ;
// export default Recipe;