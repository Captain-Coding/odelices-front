// fonction qui permet de modifier la valeur des inputs pour en faire des champs contrôlés.
export const handleChange = (event, setRecipe) => {
  setRecipe((previousValue) => {
    return {
      ...previousValue,
      [event.target.id]: event.target.value
    }
  })
}
