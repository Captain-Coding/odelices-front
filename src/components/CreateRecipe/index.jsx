import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAPI, getToken } from '../../utils/api';
import jwt_decode from 'jwt-decode'


const Recipe = () => {

  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    steps: "",
    picture: "",
  });

  const [errorMessage, setErrorMessage] = useState('')

  // fonction qui permet de modifier la valeur des inputs pour en faire des champs contrôlés.
  const handleChange = (event) => {
    setRecipe((previousValue) => {
      return {
        ...previousValue,
        [event.target.id]: event.target.value
      }
    })
  }

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
      
      console.log(result)
    } catch (error) { console.log(error) }
  }

  return (
    <>
      <h1>Créer ta recette</h1>
      <form action="" onSubmit={createRecipe} className="formCreateRecipe">
        <label htmlFor="name"> Nom de la recette</label>
        <input type="text" id="name" value={recipe.name} onChange={(event) => handleChange(event)} />

        <label htmlFor="description"> Description de la recette</label>
        <textarea value={recipe.description} id="description" onChange={(event) => handleChange(event)} ></textarea>

        <label htmlFor="steps"> Les étapes de la recette</label>
        <textarea value={recipe.steps} id="steps" onChange={(event) => handleChange(event)} ></textarea>

        {/* <label>Entre les ingrédients de la recette</label>
        <ul>
          <li><input /></li>
          <li><input /></li>
          <li><input /></li>
          <li><input /></li>
          <li><input /></li>
        </ul> */}

        {/* {cleanString(recipe.steps).map(step => (
          <input>{step}</input>
        ))}

        <h2>Decrit les étapes</h2>

        <label htmlFor="step 1">Etape 1</label>
        <input type="text" value={recipe.steps} onChange={(event) => setSteps({ ...recipe, steps: event.target.value })} />
        <label htmlFor="step 2">Etape 2</label>
        <input type="text" value={recipe.steps} onChange={(event) => setSteps({ ...recipe, steps: event.target.value })} />
        <label htmlFor="step 3">Etape 3</label>
        <input type="text" value={recipe.steps} onChange={(event) => setSteps({ ...recipe, steps: event.target.value })} />
        <label htmlFor="step 4">Etape 4</label>
        <input type="text" value={recipe.steps} onChange={(event) => setSteps({ ...recipe, steps: event.target.value })} /> */}

        <label htmlFor="picture">Photo de la recette</label>
        <input type="text" id="picture" name="picture" value={recipe.picture} onChange={(event) => handleChange(event)} />
        <p>{errorMessage}</p>
        <input type="submit" value="Ajouter la recette" />
      </form>
    </>
  )
};

export default Recipe;



