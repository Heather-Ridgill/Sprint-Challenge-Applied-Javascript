// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const me = axios.get(` https://lambda-times-backend.herokuapp.com/topics`);

me.then(obj => {
  const topicsArray = obj.data.topics;

  topicsArray.forEach(topic => {
    const topicComponent = createTab(topic);
    const topicsContainer = document.querySelector(`.topics`);
    topicsContainer.appendChild(topicComponent);
  });
}).catch(err => {
  console.log("Could not find info: ", err);
});

console.log(me);

const createTab = tabName => {
  const tabDiv = document.createElement(`div`);
  tabDiv.classList.add(`tab`);
  tabDiv.textContent = tabName;

  return tabDiv;
};
