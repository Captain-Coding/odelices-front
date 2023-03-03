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
