import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPI } from "../utils/api";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {handleChange} from '../utils/form';

console.log("salut")
const UpdateRecipe = () => { 
    const [recipeInfo, setRecipeInfo] = useState({});
    const [ingredients, setIngredients] = useState([]);
    const [recipeIngredients, setRecipeIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState({});
    const [quantity, setQuantity] = useState(1);
    const [units, setUnits] = useState("L");
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();

    let { id } = useParams();

    const getRecipe = () => {
        getAPI().get(`/recipes/${id}`)
            .then(response => {
                setRecipeInfo(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error));
    }

    useEffect(() => {
        getRecipe()
        getAPI().get("/ingredients")
            .then(response => {
                setIngredients(response.data)

            })
            .catch(error => console.log(error));
    }, []);

    const handleUpdateSubmit = (event) => {
        console.log("test");
        event.preventDefault();
        getAPI().put(`/recipes/${id}`, recipeInfo)
            // .then(response => navigate(`/recipes/${id}`))
            .catch(error => console.log(error));
    }


    const autocompleteOnChange = (event, ingredient) => {
        setNewIngredient(ingredient)
    }

    const handleSubmitIngredient = (event) => {
        event.preventDefault();
        getAPI().post(`/RecipeHasIngredient`, {
            units,
            quantity: parseInt(quantity, 10),
            // id de la recette créer
            recipe_id: recipeInfo.id,
            // id de l'ingredient à récupérer
            ingredient_id: newIngredient.id,
        })
            .then(response => {
                getRecipe()
                console.log(response.data)
            })
            .catch(error => console.log(error))
    };

    const ingredientDeleteHandler = (ingredient) => {
        return (e) => {
            getAPI().delete(`/RecipeHasIngredient/${ingredient.id}`)
                .then(response => {
                    getRecipe()
                    console.log(response.data)
                })
                .catch(error => console.log(error))
        };
    }
   
    return (
        <>
            <h1>Modifie ta recette</h1>

            <form onSubmit={handleSubmitIngredient}>
                <label htmlFor="name"> Nom de la recette</label>
                <input type="text" id="name" value={recipeInfo.name} onChange={(event) => handleChange(event, setRecipeInfo)} min="1" max="100" required />

                <label htmlFor="description"> Description de la recette</label>
                <textarea value={recipeInfo.description} id="description" onChange={(event) => handleChange(event, setRecipeInfo)} ></textarea>

                <label htmlFor="steps"> Les étapes de la recette</label>
                <textarea value={recipeInfo.steps} id="steps" onChange={(event) => handleChange(event, setRecipeInfo)} ></textarea>

                <label htmlFor="picture">Photo de la recette</label>
                <input type="text" id="picture" name="picture" value={recipeInfo.picture} onChange={(event) => handleChange(event, setRecipeInfo)} />
                <p>{errorMessage}</p>
                <Link to={`/recipes/${id}`}>
                  <button>Modifier la recette</button>
                </Link>
            </form>

            <form onSubmit={handleSubmitIngredient}>
                <Autocomplete
                    getOptionLabel={(option) => {
                        if (typeof option == 'string') return option
                        return option.name
                    }}
                    onChange={autocompleteOnChange}
                    disablePortal
                    id="combo-box-demo"
                    options={ingredients}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Ingrédient" />}
                />

                <input
                    name="quantity"
                    placeholder="Quantité"
                    id="quantity"
                    type="number"
                    min="1"
                    max="1000"
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
                <select name="units" id="units" placeholder="Unité"
                    value={units}
                    onChange={e => setUnits(e.target.value)}>
                    <option value="L">Litre</option>
                    <option value="Kg">Kilos</option>
                </select>
                <button>Ajouter l'ingrédient</button>
            </form>

            <table>
                <tr>
                    <th>Nom</th>
                    <th>Quantité</th>
                    <th>Units</th>
                    <th>Supprimer</th>
                </tr>
                {recipeInfo.ingredients?.map((ingredient) => {
                    return <tr>
                        <td>{ingredient.name}</td>
                        <td>{ingredient.quantity}</td>
                        <td>{ingredient.units}</td>
                        <td><button onClick={ingredientDeleteHandler(ingredient)}>Supprimer</button></td>
                    </tr>
                })}

            </table>
        </>
    )
}

export default UpdateRecipe;