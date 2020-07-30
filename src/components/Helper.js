export const api = {
  proxy: "https://cors-anywhere.herokuapp.com/",
  key: "fd5090a8c989d352511fb38b306980ec",
  id: "f25f5d4c",
  r: "http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_",
  from: "0",
  to: "30",
};

export const getIdFromUrl = (url) => url.slice(url.indexOf("#recipe_") + 8);
export const limitRecipeTitle = (title, limit = 17) => {
  const newTitle = [];
  if (title.length > limit) {
    title.split(" ").reduce((acc, curr) => {
      if (acc + curr.length <= limit) {
        newTitle.push(curr);
      }
      return acc + curr.length;
    }, 0);

    return `${newTitle.join(" ")} ...`;
  }
  return title;
};

// Recipe
export const calcTime = (ingredients) => {
  // Assuming that we need 15 min for each 3 ingredients
  const numIng = ingredients.length;
  const periods = Math.ceil(numIng / 3);
  const time = periods * 15;
  return time;
};
