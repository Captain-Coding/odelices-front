import { useState, useEffect, } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getAPI, getTokenData } from '../../utils/api';
import "./style.scss";

const Recipe = () => {
    const [recipe, setRecipe] = useState({
        // je transforme l'objet par un tableau vide et une string vide
        ingredients: [],
        steps: "",
    });
    const [tokenData, setTokenData] = useState(getTokenData());

    let { id } = useParams();

    const navigate = useNavigate();
  
  
  
    useEffect(() => {
        getAPI().get(`/recipes/${id}`)
            .then(response => {
                setRecipe(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error));
    }, []);

    const handleDeleteRecipe = () => {
        const confirmed = window.confirm("Etes-vous sûr de vouloir supprimer votre recette ?");
        try {
          if (confirmed) {
            getAPI().delete(`/recipes/${id}`, { headers: { Authorization: `Bearer ${localStorage.token}` } })
              .then(response => {
                console.log(response.data)               
              })
            navigate("/profile");
          }
        } catch (error) {
          console.log("error", error);
        }
      }

    // je nettoie la string des /, {}, .,
    const cleanString = (steps) => {
        steps = steps.replaceAll('\"', '')
        steps = steps.replace('{', '')
        steps = steps.replace('}', '')
        steps = steps.split(',')
        
        console.log('steps : ',steps)
        return steps
    }

    return (
        <>

            {tokenData?.id== recipe.creator_id && <Link to={`/recipes/update/${id}`}>
                <button>Modifier la recette</button>
            </Link>}

            {tokenData?.id== recipe.creator_id && <button className='deleteRecipe' onClick={handleDeleteRecipe}>Suprrimer cette recette</button>}

            <div className="recipe">
                <h2>{recipe.name}</h2>
                <p>{recipe.description}</p>
                <img src={recipe.picture} alt={recipe.name} />

                <h2>Liste des ingrédients</h2>
                <ul>
                    {recipe.ingredients && recipe.ingredients.map(ingredient => {
                        return (
                            <li key={ingredient.name}>{ingredient.name} {ingredient.quantity} {ingredient.units}</li>

                        )
                    })}
                </ul>
                <h2>Etape de la recette :</h2>
                <ol className="steps">
                    {cleanString(recipe.steps).map((step, index) => (
                        <li key={step}>{index + 1}. {step}</li>
                    ))}
                </ol>

            </div>

            {/* <div className="commentaires">
                <p>Pseudo du membre</p>
                <textarea value="texte"> Votre commentaire...</textarea>
                <button type="submit">Ajouter votre commentaire</button>
            </div> */}

        </>
    );
};

export default Recipe;










