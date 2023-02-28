const createRecipe = () => {
    return (
        <>
        <h1>Créer ta recette</h1>
   <form action="submit" method="post" >
        <label> Nom de la recette</label> <br />
        <input/> <br/>

        <label>Entre les ingrdients de la recette</label>
            <ul>
                <li><input/><br /></li>
                <li><input/><br /></li>
                <li><input/><br /></li>
                <li><input/><br /></li>
                <li><input/><br /></li>
            </ul>
        <label>Decrit les étapes</label> <br />

        <label>Etape 1</label> <br/> 
        <input/><br/>
        <label>Etape 2</label> <br/>
        <input/><br/>
        <label>Etape 3</label> <br/>
        <input/><br/>
        <label>Etape 4</label> <br/>
        <input/><br/>
        <label>Photo de la recette</label>
        <input type="file" accept="image/*"/><br/>
        <input type="submit" value="Ajouter la recette"/>
    </form>
        </>
    )
}

export default createRecipe;