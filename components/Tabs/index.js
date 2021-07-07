// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function tabCreator() {
  // console.log('info', info);
  const tab = document.createElement('div');
  tab.classList.add('tab');
  // tab.textContent = info.topic;

  return tab;
}

// console.log('tab creator', tabCreator(info));

const tabSelector = document.querySelector('.topics');
tabSelector.append(tabCreator());

axios.get('https://lambda-times-backend.herokuapp.com/topics')
.then((tabsRes) => {
  console.log('Response from tabs', tabsRes);
  tabsRes.data.topics.forEach((tabs) => {
    const topic = tabCreator(tabs)
    tabSelector.appendChild(topic);

    // console.log('tab', topic);
    // console.log('data',tabsRes.data.topics);
  });
})

.catch((tabsErr) => {
  console.log('Error from tabs', tabsErr);
})





