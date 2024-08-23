import styles from "./Ingredients.module.css";

const RecipeIngredients = () => {
  const ingredients = [
    "1lb lean ground beef",
    ".5 cup finely chopped onion",
    "1 ½ teaspoons dried basil",
    "1 teaspoon dried oregano",
    "½ teaspoon garlic powder",
    "Pinch of dried thyme",
    "6 cups chicken broth",
    "1 (28-ounce) can crushed tomatoes",
    "1 (15-ounce) can tomato sauce",
    "8 ounces cream cheese",
    "8 ounces ditalini",
    "Freshly grated Parmesan",
  ];
  return (
    <div>
      <h3>Recipe Ingredients</h3>
      <ul className={styles.ingredientList}>
        <li>{ingredients[0]}</li>
        <li>{ingredients[1]}</li>
        <li>{ingredients[2]}</li>
        <li>{ingredients[3]}</li>
        <li>{ingredients[4]}</li>
      </ul>
    </div>
  );
};
export default RecipeIngredients;
