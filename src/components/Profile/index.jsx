import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getAPI } from "../../utils/api";
import jwt_decode from "jwt-decode";




const Profile = () => {
    // const [Firstname, setFirstname] = useState()
    // const [Lastname, setLastname] = useState()
    // const [Pseudo, setPseudo] = useState()
    const [member, setMember] = useState({});
    
    const decoded = jwt_decode(localStorage.token);
    const id = decoded.id


    useEffect(() => {
        getAPI().get(`/members/${id}`)
            .then(response => {
                setMember(response.data)
                console.log(response.data)
            })
            .catch(error => console.log(error))
    }, [])



    return (
        <>
            <div className="PictureProfil">
                <img src={member.picture} alt={member.pseudo} />
            </div>

            <div className="informations">

                <button>Suprrimer votre profil</button>
                <h1>Mes informations</h1>
                <p>Nom : {member.lastname}</p>
                <p>Prénom : {member.firstname}</p>
                <p>Pseudo : {member.pseudo}</p>
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
                    <input type="text" placeholder="Saisissez votre Prénom" />
                    <button type="submit">Modifier</button>
                    <input type="text" placeholder="Saisissez votre Pseudo" />
                    <button type="submit">Modifier</button>
                </form>
            </div>

        </>
    )

}


export default Profile;
