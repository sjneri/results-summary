"use strict"

import data from './data.json' assert {type: 'json'};

const summary = data;

const summaryList = summary.reduce((listItem, item) => {
  listItem += `
    <div class="summary__item ${item.category}">
      <img src="/assets/images/icon-${item.category}.svg" alt="Reaction">
      <p class="summary__item-label">${item.category}</p>
      <p class="summary__item-score">
        ${item.score}
        <span>/ 100</span>
      </p>
    </div>
  `;

  return listItem;
}, '');


let sum = 0;
for(let i = 0; i < summary.length; i++) {
  let scores = summary[i].score;
  sum += parseInt(scores);
}

let avg = sum/summary.length;

document.getElementById('summaryCard').innerHTML = summaryList;
document.getElementById('result').innerHTML = Math.round(avg);