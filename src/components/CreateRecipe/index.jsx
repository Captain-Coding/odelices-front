import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getAPI, getToken } from '../../utils/api';
import jwt_decode from 'jwt-decode'
import {handleChange} from '../../utils/form';

const Recipe = () => {

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    steps: "",
    picture: "",
  });

  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate();


  const createRecipe = async (event) => {
    event.preventDefault();


    if (!recipe.name || !recipe.description || !recipe.steps || !recipe.picture) {
      setErrorMessage("Veuillez remplir tous les champs");
      return;
    }



    const token = getToken()
    const decodedToken = jwt_decode(token)

    // Api pour le create
    try {
      const result = await getAPI().post("/recipes", {
        name: recipe.name,
        description: recipe.description,
        steps: recipe.steps,
        picture: recipe.picture,
        member_id: decodedToken.id
      });
      console.log(result.data[0].id)

      const recipeId = result.data[0].id;
      navigate (`/recipes/${recipeId}`);
        //  window.location.href = `/recipes/${recipeId}`

    }catch (error) {console.log(error)}
  }
    return (
      <>
        <h1>Créer ta recette</h1>
        <form action="" onSubmit={createRecipe} className="formCreateRecipe">
          <label htmlFor="name"> Nom de la recette</label>
          <input type="text" id="name" value={recipe.name} onChange={(event) => handleChange(event, setRecipe)} />

          <label htmlFor="description"> Description de la recette</label>
          <textarea value={recipe.description} id="description" onChange={(event) => handleChange(event, setRecipe)} ></textarea>

          <label htmlFor="steps"> Les étapes de la recette</label>
          <textarea value={recipe.steps} id="steps" onChange={(event) => handleChange(event, setRecipe)} ></textarea>

          <label htmlFor="picture">Photo de la recette</label>
          <input type="text" id="picture" name="picture" value={recipe.picture} onChange={(event) => handleChange(event, setRecipe)} />
          <p>{errorMessage}</p>
          <input type="submit" value="Ajouter la recette" />
        </form>
      </>
    )
  };

export default Recipe;