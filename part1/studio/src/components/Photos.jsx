import styles from "./Description.module.css";

const RecipePhoto = () => {
  const recipePic =
    "https://www.melskitchencafe.com/wp-content/uploads/2023/01/beefy-tomato-soup6-640x960.jpg";
  return (
    <img src={recipePic} alt="recipe photo" className={styles.imageUpdates} />
  );
};

export default RecipePhoto;
