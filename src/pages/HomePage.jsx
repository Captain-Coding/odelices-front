import SearchBar from "../components/SearchBar";
import { Card, Image, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { useState, useEffect } from 'react';
import '../App.css';
import {getAPI} from '../utils/api';

const HomePage = () => {
  const [recipeList, setRecipeList] = useState([])
  const [searchResult, SetSearchResult] = useState([])

  useEffect(() => {
    getAPI().get('/recipes')
      .then(response => setRecipeList(response.data))
      .catch(error => console.log(error));
  }, []);

  // const ListRecipes = [
  //   {
  //     id: 1,
  //     name: "Poulet roti",
  //     average_rating: 4.5,
  //     author: "Jeanne Dupont",
  //     ingredients: ["poulet", "creme-fraiche", "pomme-de-terre"],
  //     image:
  //       "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 2,
  //     name: "Lasagne",
  //     average_rating: 4.2,
  //     author: "Pierre Martin",
  //     ingredients: ["viande", "sauce-tomate", "fromage"],
  //     image:
  //       "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //   },
  //   {
  //     id: 3,
  //     name: "Couscous",
  //     average_rating: 4.2,
  //     author: "Pierre Martin",
  //     ingredients: ["merguez", "semoule", "courgette"],
  //     image:
  //       "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  //   }
  // ];
  return (
    <>
      <SearchBar recipeList={recipeList} SetSearchResult={SetSearchResult} />
    <div className="card_container" >
      {searchResult.length < 1 &&
        recipeList.map((recipe, index) => (
          <div key={index}>
            <Card>
              <Image src={recipe.picture} wrapped ui={false} />
              <Card.Content>
                <Card.Header>{recipe.name}</Card.Header>
                <Card.Description>{recipe.pseudo}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Rating
                  icon="star"
                  defaultRating={Math.round(recipe.avg_rate)}
                  maxRating={5}
                  disabled
                />
              </Card.Content>
            </Card>
          </div>
        ))
      }
      {searchResult && searchResult.map((recipe, index) => (
        <div key={index}>
          <Card>
            <Image src={recipe.picture} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{recipe.name}</Card.Header>
              <Card.Description>{recipe.pseudo}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating
                icon="star"
                defaultRating={Math.round(recipe.average_rating)}
                maxRating={5}
                disabled
              />
            </Card.Content>
          </Card>
        </div>

      ))}
  </div>
    </>
  );
};
export default HomePage;
