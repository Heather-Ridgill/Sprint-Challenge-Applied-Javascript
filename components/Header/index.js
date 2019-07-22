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

function header() {
  const headerDiv = document.createElement(`div`);
  headerDiv.classList.add(`header`);

  let date = document.createElement(`span`);
  date.classList.add(`date`);
  date.textContent = `SMARCH 28, 2019`;
  headerDiv.appendChild(date);

  let name = document.createElement(`h1`);
  name.textContent = `Lambda Times`;
  headerDiv.appendChild(name);

  let temp = document.createElement(`span`);
  temp.classList.add(`temp`);
  temp.textContent = `98°`;
  headerDiv.appendChild(temp);

  return headerDiv;
}

const everything = header();
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(everything);
