// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// console.log('Hello');



function Header() {
  const header = document.createElement('div');
  header.classList.add('header');

  const spanDate = document.createElement('span');
  spanDate.classList.add('date');
  spanDate.textContent = 'SMARCH 28, 2019';

  const h1 = document.createElement('h1');
  h1.textContent = 'Lambda Times';

  const spanTemp = document.createElement('span');
  spanTemp.classList.add('temp');
  spanTemp.textContent = '98°';

  header.appendChild(spanDate);
  header.appendChild(h1);
  header.appendChild(spanTemp);

  return header;
}
// console.log("header", Header());

const headerSelector = document.querySelector('.header-container');
// console.log('header container', headerSelector);
headerSelector.append(Header());

// topics.data.forEach(articles => headerSelector.append(Header(articles)));

