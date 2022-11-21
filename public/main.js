const displayRecipe = document.getElementById("display-recipe");
const viewRecipe = document.getElementById("view-recipe");
const closeBtn = document.getElementById("closeBtn");
const searchText = document.getElementById("search-text");
const searchBtn = document.getElementById("search-btn");

viewRecipe.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", clickOutside);
// searchBtn.addEventListener("click", getRecipeList);
// searchText.addEventListener("click", getRecipe);

function openModal() {
  displayRecipe.style.display = "block";
}

function closeModal() {
  displayRecipe.style.display = "none";
}
function clickOutside(e) {
  if (e.target == displayRecipe) {
    displayRecipe.style.display = "none";
  }
}

function getRecipeList() {
    // e.preventDefault();
    var meal = searchText.value;
    console.log(meal);
  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${meal}`)
    .then(response => response.json())
    .then((data) => {
      let html = "";
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
            <div
              class="shadow-md border border-almostBlack-200 bg-white rounded-md" data-id = "${meal.id}"
            >
              <img src="${meal.strMealThumb}" class="w-72 rounded-md rounded-b-none" />
              <h3 class="text-2xl text-center mt-2">${meal.strMeal}</h3>
              <div class="flex justify-end px-3">
                <button
                  id="view-recipe"
                  class="bg-darkPurple px-5 py-2 rounded-lg text-white mt-10 mb-2 hover:bg-lightPurple"
                >
                  View Recipe
                </button>
              </div>
            </div>
            `;console.log(meal.strMealThumb + meal.strMeal);
        });
      } else {
        html = `<h3 class="text-3xl text-center font-bold">Sorry, we didn't find ${searchText} </h3>`;
      }
      displayRecipe.innerHTML = html;
      
    });
    
}
