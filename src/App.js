import React from 'react';

function Food({name,picture}) {
  return(
    <div>
      <h1>I love {name} </h1>
      <img src = {picture} />
    </div>
  );
}

const foodLike = [
  {
    name:'kimchi',
    image:'https://cdn.kormedi.com/wp-content/uploads/2024/12/gettyimages-a11200652.jpg.webp'
  },
  {
    name:'samgyeopsal',
    image:'https://i.namu.wiki/i/oFHlYDjoEh8f-cc3lNK9jAemRkbXxNGwUg7XiW5LGS6DF1P2x8GCeNQxbQhVIwtUS1u53YPw-uoyqpmLtrGNJA.webp'
  }
];

function App() {
  return (
  <div>
   {foodLike.map(dish => (<Food name={dish.name} picture={dish.image}/>))}

  </div> 
  );
}
export default App; 




 