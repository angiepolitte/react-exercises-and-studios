export default function BookList() {
  let pageTitle = "Random popular books at the moment";
  const styles = {
    border: "2px solid black",
  };
  let book1 =
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS3j9tPPCLuet5ArO4YwbrRpzxn-o7mTyped8Vx70niDqffFE2Y-eHpzNcgI65Uw11rkz91nepp5xlqXWGWZfRsYuf0YiyEnUZ_nA4M-Yw&usqp=CAc";
  let book2 =
    "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-ka1YUrvpP8BsTywtqe2HubotMNID7gSdsLDJ5Az_-Qmm3NrpOsDiEFoFNZvBPRXRkiAD0XW2KHZ4jB2JNbASBPzhok_EF-n6dCvcAUQ1b3V_i3Wr8m9I3Q&usqp=CAc";
  let book3 =
    "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTYqHXH8TMtKUrBAb_xVJ0lfZptJ1zA6xKZJiJT5a4GKozly0RLM8Is7I0few5H5rpCUU8_9pUwos-8DVoTyGdad6779I_LgS5_NRKSz1E&usqp=CAc";

  return (
    <div>
      <h3 style={styles}>{pageTitle}</h3>
      <img src={book1} alt="How to hold a cockroach" />
      <img src={book2} alt="The courage to be disliked" />
      <img src={book3} alt="surrounded by idiots" />
    </div>
  );
}
