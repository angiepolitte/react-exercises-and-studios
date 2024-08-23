import styles from "./Description.module.css";
import React from "react";

const RecipeAuthor = () => {
  const authorLink = "https://www.melskitchencafe.com/about/";
  const authorPhoto =
    "https://www.melskitchencafe.com/wp-content/uploads/2024/02/melheadshot2-2024smallblog.webp";
  const authorName = "Mel";
  return (
    <div className={styles.recipeAuthorBook}>
      <img src={authorPhoto} alt={authorName} className={styles.imageUpdates} />
      <div>
        <h3>{authorName}</h3>
        <a href={authorLink}>Mel's Kitchen Cafe</a>
      </div>
    </div>
  );
};

class RecipeDescription extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h1>Lasagna Soup</h1>
          <p>Creamy Beef and Tomato Soup</p>
        </div>
        <RecipeAuthor />
      </div>
    );
  }
}

export default RecipeDescription;
