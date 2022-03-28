import React from "react"

function RecipeView({recipe, handleDeleteRecipe} ) {
  return (
    <tr className="recipe">
     <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td>{recipe.photo}<img src={recipe.photo}/>
      </td>
      <td>{recipe.ingredients}</td>
      <td>{recipe.preparation}</td>
     <td><button onClick= {handleDeleteRecipe} name= "delete">Delete</button></td>
    </tr>
  )
}
export default RecipeView