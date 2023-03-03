import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getAPI } from "../utils/api";


const UpdateRecipe = () => {
    const [fields, setFields] = useState({})
    
    const navigate = useNavigate();

    let { id } = useParams(); 

    useEffect(() => {
        getAPI().get(`/recipes/${id}`)
            .then(response => setFields(response.data))
            .catch(error => console.log(error));
    }, []);

    const submit = (event) => {
        event.preventDefault();
        getAPI().patch(`/recipes/${id}`, fields)
        .then(response => navigate(`/recipes/${id}`))
        .catch(error => console.log(error));
    }

    return (
        <>
        <h1>Modifie ta recette</h1>

        <form action="submit" method="post" onSubmit={submit} className="updateRecipe">
        <label> Nom de la recette</label>
        <input 
        value={fields.name}
        type="text"/>

        <label>Entre les ingrédients de la recette</label>
            <ul>
                <li><input/></li>
                <li><input/></li>
                <li><input/></li>
                <li><input/></li>
                <li><input/></li>
            </ul>
        <label>Decrit les étapes</label> <br />

        <label>Etape 1</label> 
        <input/>
        <label>Etape 2</label> 
        <input/>
        <label>Etape 3</label> 
        <input/>
        <label>Etape 4</label> 
        <input/>
        <label>Photo de la recette</label>
        <input type="file" accept="image/*"/>
        <input type="submit" value="Ajouter la recette"/>
    </form>
        </>
    )
}

export default UpdateRecipe;