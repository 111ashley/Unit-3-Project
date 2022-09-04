import React from 'react'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const RecipeCard = ({recipe}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }
  return (
    <div className="recipe-card">
      <div>
        <div className="recipe-img-container">
          <img src="img src" />
          {/* <img src="https://www.atablefullofjoy.com/wp-content/uploads/2020/02/German-Chocolate-Cake-Recipe-SQUARE.jpg" /> */}
        </div>
        <h3>{recipe.recipe_name}</h3>
      </div>
      <button className="check-it-out-btn" onClick={handleClick}>See More</button>
    </div>
    );
  };
  
  export default RecipeCard;
  