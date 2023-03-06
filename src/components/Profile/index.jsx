import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAPI } from "../../utils/api"; 

const Profile = () => {

    const [firstname, setFirstname]= useState ("");
    const [lastname, setLastname] = useState ("");
    const [pseudo, setPseudo] = useState ("");

    let { id } = useParams();

    useEffect (() => {
        getAPI().get(`/members/${id}`)
        .then(response => {
            setFirstname(response.data)
            setLastname (response.data)
            setPseudo (response.data)
            console.log(response.data)
        })
        .catch(error => console.log(error))
    })


    
    return (
        <>
        <div className="PictureProfil">
         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Photo de profil" />
        </div>
    
    <div className="informations">
    
        <h1>Mes informations</h1>
        <p>Nom : </p>
        <p>Prénom :  </p>
        <p>Pseudo :  </p>
        <button className="deconnexion" type="submit">Se déconnecter</button>
        <div className="myRecipe">
            <h2>Mes recettes</h2>
            <Link to={`/recipes/create`}>
            <button>Ajouter une recette</button>
            </Link>
            
        </div>
    </div>
    
    <div className="modification">
        <h2>Modifie tes informations</h2>
        <form action="" method="post">  
            <input type="text" placeholder="Saisissez votre Nom" />               
            <button type="submit">Modifier</button>                
            <input type="text" placeholder="Saisissez votre Prénom"/>                
            <button type="submit">Modifier</button> 
            <input type="text" placeholder="Saisissez votre Pseudo"/>              
            <button type="submit">Modifier</button>
        </form>
    </div>
    
    </>
    )
    
}
   

export default Profile;
