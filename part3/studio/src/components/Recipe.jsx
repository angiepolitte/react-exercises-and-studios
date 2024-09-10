import { useState } from "react";

const RecipeAuthor = () => {
  let authorLink = "https://smittenkitchen.com/about/";
  let authorPhoto =
    "https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2006/06/deb-perelman-headshot-2017.jpg?w=640&ssl=1";
  let authorName = "Deb Perelman";

  return (
    <div>
      <img
        src={authorPhoto}
        alt="Deb Perelman, author"
        style={{ objectFit: "contain", borderRadius: "50%" }}
      />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Smitten Kitchen</a>
      </div>
    </div>
  );
};

const RecipeIngredients = () => {
  const ingredients = [
    "2-3 artichokes",
    "1-2 lemons~halved",
    "2 pats of butter",
    "4 garlic cloves",
    "mayo, for dipping",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};

const RecipeDescription = () => {
  return (
    <div>
      <div>
        <h1>"Steamed Artichokes"</h1>
        <p>
          "Artichokes are my favorite vegetable. My favorite way to eat them is
          the way I have my whole life: cooked whole, each leaf dipped in a
          sharp lemony sauce until you get to the heart, whose choke you free
          with a butter knife then schmear with the sauce like you’re thickly
          buttering a piece of bread, and eat it while holding the stem like a
          lollipop, your eyes closed as you absorb the heady bliss of it all.";
        </p>
      </div>
      <div className="recipePhotoBlock">
        <RecipeIngredients />
        <RecipeAuthor />
      </div>
    </div>
  );
};

const RecipePhoto = () => {
  return (
    <img
      src="https://i0.wp.com/smittenkitchen.com/wp-content/uploads/2024/04/steamed-artichokes-10-scaled.jpg?resize=750%2C500&ssl=1"
      alt="steamed artichoke"
      className="imageUpdates"
    />
  );
};

export default function RecipeDisplay() {
  return (
    <div className="recipePhotoBlock">
      <RecipePhoto />
      <div>
        <RecipeDescription />
      </div>
    </div>
  );
}
