import SearchBar from "../components/SearchBar"
import { Card, Icon, Image } from 'semantic-ui-react'

const Homepage = () => {
  const ListRecipes = [
    {
      name: "Poulet roti",
      average_rating: 4.5,
      author: "Jeanne Dupont",
      image: <img src="./Integration/images/poulet_roti.jpg" alt="Poulet-roti" />
    },
    {
      name: "Lasagne",
      average_rating: 4.2,
      author: "Pierre Martin",
      image: <img src="./Integration/images/lasagne.jpg" alt="Lasagne" />
    },
    {
      name: "Ratatouille",
      average_rating: 4.7,
      author: "Marie Durand",
      image: <img src="./Integration/images/ratatouille.jpg" alt="Ratatouille" />
    },
    {
      name: "Tarte aux pommes",
      average_rating: 4.9,
      author: "Lucie Dubois",
      image: <img src="./Integration/images/tarte_aux_pommes.jpg" alt="Tarte_aux_pommes" />
    },
    {
      name: "Salade Caesar",
      average_rating: 4.3,
      author: "Thomas Moreau",
      image: <img src="./Integration/images/salade_cesar.jpg" alt="Salade Cesar" />
    },
    {
      name: "Salade mexicaine",
      average_rating: 4.9,
      author: "Lucie Moreau",
      image: <img src="./Integration/images/salade_mexicaine.jpg" alt="Salade Mexicaine" />
    }
  ];

  return (
    <>
      <SearchBar />
      {ListRecipes.map((recipe, index) => (

        <div key={index}>

          <Card>
            <Image src='/images/avatar/large/matthew.png' wrapped ui={false} />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className='date'>Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='user' />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </div>

      ))}
    </>
  );
};

{/* <h2>{recipe.name}</h2>
        <h2>{recipe.image}</h2>
        <h3>{recipe.average_rating}</h3>
        <h3>{recipe.author}</h3> */}

export default Homepage;
