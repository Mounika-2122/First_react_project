import React from "react";
import CocktailCard from "./components/CocktailCard";
import Display from "./components/Display"
import "./App.css"

class App extends React.Component {
  state = {
    cocktails: [],
    favorites: [],
  };

  componentDidMount() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=gin")
      .then((response) => response.json())
      .then((response) =>
        this.setState({
          cocktails: response.drinks,
        })
      );
  }

  showCocktails = () => {
    return this.state.cocktails.map((cocktail) => (
      <CocktailCard key={cocktail.id} addToFavorites ={this.addToFavorites} cocktail={cocktail} />
    ));
  };

  showFavorites = () => {
    return this.state.favorites.map((cocktail) => (
      <CocktailCard key={cocktail.id} removeFromFavorites ={this.removeFromFavorites} cocktail={cocktail} />
    ));
  };

  addToFavorites =(cocktail)=>{
      if(!this.state.favorites.find(drink=>drink.idDrink === cocktail.idDrink))
      this.setState({
          favorites: [...this.state.favorites, cocktail]
      })
  }

  removeFromFavorites =(cocktail)=>{
    const filtered = this.state.favorites.filter(drink=>drink.idDrink !== cocktail.idDrink)
    this.setState({
        favorites: filtered
    })
}

  render() {
    return (
     <Display showCocktails ={this.showCocktails} showFavorites = {this.showFavorites}/>
    );
  }
}
export default App;