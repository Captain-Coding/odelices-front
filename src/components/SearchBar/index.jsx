// import { Form, Segment, Button, Label } from 'semantic-ui-react';
import React, { useState,useEffect } from 'react';
import axios from "axios";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('')
  const [ingredients, setIngredients] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const apiPath = "localhost:3000/api/";

  useEffect(()=>{
    axios.get(apiPath+"recipes")
    .then((res)=>{
      if(res.data) setRecipes(res.data);
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  
  // handleSubmit est la fonction qui est executer lorsque l'utilisateur soumet la recherche en cliquant sur le bouton Rechercher
  const handleSubmit = (event) =>{
  // annule le comportement par defaut du formulaire (evite le rechargement)
    event.preventDefault();
  // j'appelle la fonction onSearch et je lui passe en argument la liste des ingrédients sélectionnés
    onSearch(ingredients);
  };
  // handleInputChange est la fonction qui met à jour l'état searchValue avec la valeur entrée par l'utilisateur
  const handleChange = (event) => {
    setSearchValue(event.target.Value)
  };

  const handleAddIngredient =()  => {
    if (searchValue) {
      setIngredients([...ingredients,searchValue]);
      setSearchValue('');
    }
  };
    
  const handleRemoveIngredient = (ingredient) => {
    // j'utilise la méthode filter() pour créer un nouveau tableau qui supprime l'ingrédient 
    setIngredients(ingredients.filter((item) => item !== ingredient));
    setIngredients(newIngredients);
  };
    // handleSearchSubmit est la fonction qui appelle la fonction onSearchSubmit et passe en argument la liste des ingrédients sélectionnés
  const handleSearchSubmit =() =>{
    // j'appelle la fonction onSearchSubmit et je lui passe en argument la liste des ingrédient sélectionné
    onSearchSubmit(ingredients);
  };

  return()
  
}
  


export default SearchBar;
  


export default SearchBar;
