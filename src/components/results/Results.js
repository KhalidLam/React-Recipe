import React from "react";
import Loader from "../Loader";
import { getIdFromUrl, limitRecipeTitle } from "../Helper";

const RecipeRow = ({ recipe, getRecipe }) => (
  <li>
    <a
      className='results__link results__link--active'
      href={"#" + getIdFromUrl(recipe.uri)}
      data-uri={getIdFromUrl(recipe.uri)}
      onClick={getRecipe}
    >
      <figure className='results__fig'>
        <img src={recipe.image} alt={recipe.label} />
      </figure>
      <div className='results__data'>
        <h4 className='results__name'>{limitRecipeTitle(recipe.label)}</h4>
        <p className='results__author'>{recipe.source}</p>
      </div>
    </a>
  </li>
);

// const PageButton = (page, type) => {
//   const classname = `btn-inline results__btn--${type}`;
//   const goTo = type === "prev" ? page - 1 : page + 1;
//   const svgHref = `img/icons.svg#icon-triangle-${
//     type === "prev" ? "left" : "right"
//   }`;

//   return (
//     <button className={classname} data-goto={goTo}>
//       <span>Page {goTo}</span>
//       <svg className='search__icon'>
//         <use href={svgHref}></use>
//       </svg>
//     </button>
//   );
// };

export default function Results({ loading, recipes, getRecipe }) {
  const getRecipesPerPage = (recipes, page = 1, resPerPage = 10) => {
    const start = [page - 1] * resPerPage;
    const end = page * resPerPage;
    return recipes.slice(start, end);
  };

  if (loading) return <Loader />;

  return (
    <div className='results'>
      <ul className='results__list'>
        {recipes &&
          getRecipesPerPage(recipes).map((recipe, index) => (
            <RecipeRow key={index} recipe={recipe} getRecipe={getRecipe} />
          ))}
      </ul>

      <div className='results__pages'>
        {/* <button className='btn-inline results__btn--prev'>
          <svg className='search__icon'>
            <use href='img/icons.svg#icon-triangle-left'></use>
          </svg>
          <span>Page 1</span>
        </button>
        <button className='btn-inline results__btn--next'>
          <span>Page 3</span>
          <svg className='search__icon'>
            <use href='img/icons.svg#icon-triangle-right'></use>
          </svg>
        </button> */}
      </div>
    </div>
  );
}
