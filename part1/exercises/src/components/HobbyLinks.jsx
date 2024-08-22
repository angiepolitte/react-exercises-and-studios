export default function HobbyLinks() {
  const hobbyLinks = [
    "https://elinafrancine.com/",
    "https://cooking.nytimes.com/",
  ];
  const hobbyPics = [
    "https://img1.wsimg.com/isteam/ip/ba1b0b8c-7ab0-413d-9060-7498bf05835b/ols/20210314_124509.jpg/:/rs=w:391.5,h:250,cg:true,m/cr=w:1566,h:1000",
    "https://cook.fnr.sndimg.com/content/dam/images/cook/fullset/2014/3/11/0/CCTIFSP1_Brussels-Sprouts-recipe_s4x3.jpg.rend.hgtvcom.231.174.suffix/1394564827358.jpeg",
  ];
  return (
    <div>
      <p>
        <a href={hobbyLinks[0]}>Woodcraft business</a>
        <img src={hobbyPics[0]} alt="woodcraft" />
      </p>
      <p>
        <a href={hobbyLinks[1]}>Cooking</a>
        <img src={hobbyPics[1]} alt="food" />
      </p>
    </div>
  );
}
