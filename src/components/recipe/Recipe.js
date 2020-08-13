import React from "react";
// import Loader from "../Loader";
import { calcTime } from "../Helper";

export default function Recipe({ loading, recipe }) {
  // const id = window.location.hash.replace("#", "");
  // console.log(id);
  if (recipe) {
    console.log(recipe);
    // const recepeInfo = {
    //   title: recipe.label,
    //   author: recipe.source,
    //   image: recipe.image,
    //   ingredients: recipe.ingredients,
    //   url: recipe.url,
    //   servings: recipe.yield,
    // };
  }

  // if (loading) return <Loader />;

  return (
    <div className='recipe'>
      {recipe && (
        <>
          <figure className='recipe__fig'>
            <img
              src={recipe.image}
              alt={recipe.label}
              className='recipe__img'
            />
            <h1 className='recipe__title'>
              <span>{recipe.label}</span>
            </h1>
          </figure>
          <div className='recipe__details'>
            <div className='recipe__info'>
              <svg className='recipe__info-icon'>
                <use href='img/icons.svg#icon-stopwatch'></use>
              </svg>
              <span className='recipe__info-data recipe__info-data--minutes'>
                {calcTime(recipe.ingredients)}
              </span>
              <span className='recipe__info-text'> minutes</span>
            </div>
            <div className='recipe__info'>
              <svg className='recipe__info-icon'>
                <use href='img/icons.svg#icon-man'></use>
              </svg>
              <span className='recipe__info-data recipe__info-data--people'>
                {recipe.yield}
              </span>
              <span className='recipe__info-text'> servings</span>

              <div className='recipe__info-buttons'>
                <button className='btn-tiny'>
                  <svg>
                    <use href='img/icons.svg#icon-circle-with-minus'></use>
                  </svg>
                </button>
                <button className='btn-tiny'>
                  <svg>
                    <use href='img/icons.svg#icon-circle-with-plus'></use>
                  </svg>
                </button>
              </div>
            </div>
            <button className='recipe__love'>
              <svg className='header__likes'>
                <use href='img/icons.svg#icon-heart-outlined'></use>
              </svg>
            </button>
          </div>

          <div className='recipe__ingredients'>
            <ul className='recipe__ingredient-list'>
              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1000</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'>g</span>
                  pasta
                </div>
              </li>

              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1/2</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'>cup</span>
                  ricotta cheese
                </div>
              </li>

              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'></span>
                  can of tomatoes, whole or crushed
                </div>
              </li>

              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'></span>
                  can tuna packed in olive oil
                </div>
              </li>

              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1/2</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'>cup</span>
                  grated parmesan cheese
                </div>
              </li>

              <li className='recipe__item'>
                <svg className='recipe__icon'>
                  <use href='img/icons.svg#icon-check'></use>
                </svg>
                <div className='recipe__count'>1/4</div>
                <div className='recipe__ingredient'>
                  <span className='recipe__unit'>cup</span>
                  fresh basil, chopped or torn
                </div>
              </li>
            </ul>

            <button className='btn-small recipe__btn'>
              <svg className='search__icon'>
                <use href='img/icons.svg#icon-shopping-cart'></use>
              </svg>
              <span>Add to shopping list</span>
            </button>
          </div>

          <div className='recipe__directions'>
            <h2 className='heading-2'>How to cook it</h2>
            <p className='recipe__directions-text'>
              This recipe was carefully designed and tested by
              <span className='recipe__by'>The Pioneer Woman</span>. Please
              check out directions at their website.
            </p>
            <a
              className='btn-small recipe__btn'
              href='http://thepioneerwoman.com/cooking/pasta-with-tomato-cream-sauce/'
              // target='_blank'
            >
              <span>Directions</span>
              <svg className='search__icon'>
                <use href='img/icons.svg#icon-triangle-right'></use>
              </svg>
            </a>
          </div>
        </>
      )}
    </div>
  );
}
