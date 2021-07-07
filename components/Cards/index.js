// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function cardCreator(article) {
  const card = document.createElement('div');
  card.classList.add('card');

  const divItems = [];
  for(let i = 0; i < 3; i++){
    divItems.push(document.createElement('div'));
  };

  divItems[0].classList.add('headline');
  divItems[0].textContent = article.headline;

  divItems[1].classList.add('author');
  divItems[1].textContent = article.authorName;

  const img = document.createElement('img');
  const imgSRC = article['authorPhoto'];
  img.setAttribute('src', imgSRC);
  img.textContent = imgSRC;
  divItems[2].appendChild(img);

  divItems[2].classList.add('img-container');

  const span = document.createElement('span');
  span.textContent = article.authorName;

  return card;
}

axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then((response) => {
    console.log('Response from card', response);
  })

  .catch((error) => {
    console.log('Error from card', error);
  })


