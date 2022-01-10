import React from "react";

function CocktailCard({ cocktail, addToFavorites, removeFromFavorites }) {
  const handleChange = () => {
    if (addToFavorites) {
      addToFavorites(cocktail);
    } else {
      removeFromFavorites(cocktail);
    }
  };
  return (
    <li className="card" onClick={handleChange}>
      <h3>{cocktail.strDrink}</h3>
      <img src={cocktail.strDrinkThumb} />
    </li>
  );
}
export default CocktailCard;