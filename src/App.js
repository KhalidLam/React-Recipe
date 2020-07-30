import React, { useState } from "react";
import axios from "axios";
import { api } from "./components/Helper";
import Header from "./components/header/Header";
import Results from "./components/results/Results";
import Recipe from "./components/recipe/Recipe";
import Shopping from "./components/shopping/Shopping";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);

  const getSearchResults = async (query) => {
    setLoading(true);

    const url = `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}&from=${api.from}&to=${api.to}`;

    try {
      const res = await axios(url);
      console.log(res.data);
      const result = res.data.hits.map((curr) => curr.recipe);
      setLoading(false);
      setRecipes(result);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const getRecipe = async (e) => {
    const recipeUri = e.currentTarget.dataset.uri;
    if (recipeUri) {
      const url = `${api.proxy}https://api.edamam.com/search?r=${api.r}${recipeUri}&app_id=${api.id}&app_key=${api.key}`;

      try {
        const res = await axios(url);
        console.log(res);
        setRecipe(res.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    console.log(recipeUri);
  };

  return (
    <div className='container'>
      <Header getSearchResults={getSearchResults} />

      <Results loading={loading} recipes={recipes} getRecipe={getRecipe} />

      <Recipe recipe={recipe} loading={loading} />

      <Shopping />
    </div>
  );
}

export default App;
