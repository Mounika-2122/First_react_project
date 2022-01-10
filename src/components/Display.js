import React from "react"

function Display ({showFavorites, showCocktails}) {
    return(
        <div className="App">
        <h1> Cocktail Lists</h1>
        <section>
          <h1>Favorites</h1>
          <ul className="favorite-list">{showFavorites()}</ul>
        </section>
        <section>
          <h1>Cocktails</h1>
          <ul className="cocktail-list">{showCocktails()}</ul>
        </section>
      </div>
    )
}
export default Display