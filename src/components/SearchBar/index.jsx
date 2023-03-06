import { Form } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from "axios";
import { getAPI } from "../../utils/api";



const SearchBar = ({recipeList, SetSearchResult}) => {
  const [searchValue, setSearchValue] = useState('')
  const [queriedIngredients, setQueriedIngredients] = useState([])
  const [filteredRecipe, setFilteredRecipe] = useState([])
  const [ListRecipes, setListRecipes] = useState()
  const handleChange = (event) => {
    setSearchValue(event.target.value);
  }

  useEffect(() => {
    getAPI().get(`/recipes`)
        .then(response => {
          setListRecipes(response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error));
}, []);

  // gére la recherche d'ingredient en mettant à jour la liste d'ingrédients rechecher grace à la methode
  // de recherche d'ingredient avec le nouveau tableau mis à jour.
  const handleSubmit = (event) =>{
    event.preventDefault();
    if(searchValue.trim() === ""){  // trim pour eviter les espaces entré et les entré vide
      return
    }
    const temp = [...queriedIngredients, searchValue]
    setSearchValue("")
    setQueriedIngredients([...queriedIngredients, searchValue]);
    handleIngredientSearch(temp);
  }
  const removeIngedient = (i) =>{
    let tempIngredients = [...queriedIngredients] // je fais une copie du tableau avec le spread opérator
    tempIngredients.splice(i,1) // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    setQueriedIngredients(tempIngredients);
    handleIngredientSearch(tempIngredients);
  }
  const handleIngredientSearch = (ingredientsFromFields) =>{
    const newList = ListRecipes.filter((recipe) => {
      const FindByIngredient = recipe.ingredients.find((ingredient) => {
         //return recipe.ingredients.find((ingredient) => { //!   écriture en ternaire : on return true ou false l'évaluation de l'éxpression plustot que de la stoquer dans une variable.
        for(let i = 0; i < ingredientsFromFields.length; i++) {
          if (ingredient.includes(ingredientsFromFields[i])){
            return true
          }
        }
      })
      //! ?true:false                                             Le return en question
      if (FindByIngredient) {
          return true
      }
    });
    setFilteredRecipe(newList);
    SetSearchResult(newList)
  }
  return (
    <>
      <Form className="form_container" onSubmit={handleSubmit}>
        <Form.Field width={10} >
          <label>Recherchez vos ingredients</label>
          <input value={searchValue} onChange={handleChange} placeholder="Entrez vos ingrédients ..." />
          <button type='submit'>Ajouter ingrédient</button>
        </Form.Field>
        {queriedIngredients &&
        <>
        <h2>liste des ingrédients</h2>
        <ul>
          {queriedIngredients.map((ingredient,i)=><li key={ingredient}>{ingredient} <button onClick={(event)=>removeIngedient(i)}>X</button></li>)}
        </ul>
        </>
      }
      </Form>
    </>
  )
}
export default SearchBar;