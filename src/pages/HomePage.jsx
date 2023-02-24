import SearchBar from "../components/SearchBar";
import { Card, Image, Rating } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const Homepage = () => {
  const ListRecipes = [
    {
      name: "Poulet roti",
      average_rating: 4.5,
      author: "Jeanne Dupont",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Lasagne",
      average_rating: 4.2,
      author: "Pierre Martin",
      image:
        "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Poulet roti",
      average_rating: 4.5,
      author: "Jeanne Dupont",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Lasagne",
      average_rating: 4.2,
      author: "Pierre Martin",
      image:
        "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Poulet roti",
      average_rating: 2,
      author: "Jeanne Dupont",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Lasagne",
      average_rating: 4.2,
      author: "Pierre Martin",
      image:
        "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
    {
      name: "Poulet roti",
      average_rating: 0,
      author: "Jeanne Dupont",
      image:
        "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cm9hc3QlMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      name: "Lasagne",
      average_rating: 1.2,
      author: "Pierre Martin",
      image:
        "https://images.unsplash.com/photo-1619894991209-9f9694be045a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
  ];

  return (
    <>
      <SearchBar />
      {ListRecipes.map((recipe, index) => (
        <div key={index}>
          <Card>
            <Image src={recipe.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{recipe.name}</Card.Header>
              <Card.Description>{recipe.author}</Card.Description>
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
    </>
  );
};

export default Homepage;
