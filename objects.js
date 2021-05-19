/* 1.Create an object that represents your favourite coffee. Please include coffee name, strength, flavour, milk, sugar, … everything you like! */


var coffeeBest = {
    name: "grand",
    strength: "strong",
    flavor: "hazelnuth",
    milk: false,
    sugar: true
};

/* 2. Create an object that represents your favourite movie. Please include title, actors, director, genre, popularity.  */

var bestMovie = {
    name: "Bad Boys",
    actors: ["will smith", "martin lawrence"],
    genre: "action-comedy",
    year: "2000",
    imdb: 9.98
}

/* 3.Write a function that creates an object that represents a project.Each project is described by: description, programming language, git repository, boolean status that says if the project is in development or not.Add a method that prints out the project's repository,  a method that checks if the project is written in JavaScript as well as a method that checks if the project is in development or not. */

function createProject() {
    var project = {
        description: "Vezba",
        language: "JavaScript",
        repo: "www.github.com/linkrepo",
        dev: true,
        printRepo: function () {
            console.log(project.repo);
        },
        isJs: function () {
            if (project.language === "JavaScript") return true;
            return false;
        },
        isDev: function () {
            return project.dev;
        }
    };
    return project;
}

var project = createProject();

project.printRepo();
console.log(project.isJs());
console.log(project.isDev());


/* 4.Write a function that creates an object that represents a culinary recipe. Each recipe is described by: name, type of cuisine, complexity (value from 1 to 5), list of ingredients, preparing time, preparing instruction.
Add a method that prints out all the ingredients necessary for the meal preparation. 
Add a method that checks if a meal can be prepared for 15 minutes. 
Add a method that changes the type of cuisine to the given value. 
Add a method that delete a given ingredient from the list of ingredients
  */


function createRecipe() {
    var recipe = {
        name: "Pek-Mek",
        typeOfCuisine: "American",
        complexity: 3,
        ingredients: ["ground beef", "cheese", "salt and pepper", "onions"],
        preparingTime: 45,
        preparingInst: ['cut', 'slice', 'grill'],
        printIngredients: function () {
            console.log(recipe.ingredients);

        },
        isFastFood: function () {
            if (recipe.preparingTime <= 15) return "The meal is fast food";
        },
        changeType: function (cuisine) {
            recipe.typeOfCuisine = cuisine;
        },
        deleteIngredient: function (ingredient) {
            var newList = [];
            for (var i = 0; i < recipe.ingredients.length; i++) {
                if (recipe.ingredients[i] !== ingredient) {
                    newList[newList.length] = recipe.ingredients[i]
                }
            } recipe.ingredients = newList;
        }
    }
    return recipe;
}

var createdMeal = createRecipe();
/* console.log(createdMeal.complexity);
createdMeal.printIngredients();
console.log(createdMeal.changeType("mediteranian"));
console.log(createdMeal.typeOfCuisine);
 */
createdMeal.deleteIngredient("cheese");
console.log(createdMeal.ingredients);