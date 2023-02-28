const Profile = () => {
    return (
        <>
        <div className="PictureProfil">
         <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="Photo de profil" />
        </div>
    
    <div className="informations">
        <h1>Mes informations</h1>
        <p>Nom : </p>
        <p>Prénom : </p>
        <p>Pseudo : </p>
    </div>
    
    <div className="modification">
        <h2>Modification</h2>
        <form action="" method="post">
            <label>Modifie tes informations</label>    
            <input type="text" placeholder="Saisissez votre Nom" />               
            <button type="submit">Modifier</button>                
            <input type="text" placeholder="Saisissez votre Prénom"/>                
            <button type="submit">Modifier</button> 
            <input type="text" placeholder="Saisissez votre Pseudo"/>              
            <button type="submit">Modifier</button>
        </form>
        <button type="submit">Se déconnecter</button>
    </div>
    
    </>
    )
    
}
   

export default Profile;
