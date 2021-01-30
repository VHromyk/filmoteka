// ============ Bootstrap ===================
const current = document.querySelector(".current")
current.classList.add("active")

const pageItem = document.querySelectorAll('.page-item');

pageItem.forEach(itemList => {
    itemList.addEventListener("click", event => {
      event.preventDefault();
      current.classList.remove("active")
    if (event.target.nodeName !== "A" && event.target.nodeName !== "SPAN") {
    return
  }
    const activeRef = document.querySelector(".active")
    if (activeRef) {
    activeRef.classList.remove("active")
  }
    itemList.classList.add("active")
  })
})

let array = document.querySelectorAll(".link-dark")
let buttonNext = document.querySelector('[aria-label="Next"]')
buttonNext.addEventListener("click", event => {
  array.forEach(item => console.log(item.dataset.index))
}
)

// ============ Tui-pagination ===================

import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
require('tui-pagination')

const container = document.getElementById('tui-pagination-container');
const options = { // below default value of options
     totalItems: 500,
     itemsPerPage: 9,
     visiblePages: 8,
     page: 1,
     centerAlign: false,
     firstItemClassName: 'tui-first-child',
     lastItemClassName: 'tui-last-child',
     template: {
         page: '<a href="#" class="tui-page-btn">{{page}}</a>',
         currentPage: '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
         moveButton:
             '<a href="#" class="tui-page-btn tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</a>',
         disabledMoveButton:
             '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
                 '<span class="tui-ico-{{type}}">{{type}}</span>' +
             '</span>',
         moreButton:
             '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
                 '<span class="tui-ico-ellip">...</span>' +
             '</a>'
     }
};
const pagination = new Pagination(container, options);
pagination.getCurrentPage();


