import React from "react";
import RecipeView from "./RecipeView"

function RecipeList({recipes, handleDeleteRecipe}) {
const recipeList = recipes.map((recipe, index) => { 
const recipeType = recipe.type; 
const recipeContent = recipe.content;
  return <RecipeView recipe= {recipe} handleDeleteRecipe = {()=> handleDeleteRecipe(index)}/>
})
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipeList}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
