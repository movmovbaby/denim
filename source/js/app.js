/* for header dropdown menu */
const pageHeader = document.querySelector('.page-header');
const toggle = document.querySelector('.page-header__nav-toggle');
const navList = document.querySelector('.main-nav__list')

toggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header__nav--closed')) {
    navList.classList.remove('site-list--closed');
    navList.classList.add('site-list--opened');
    pageHeader.classList.remove('page-header__nav--closed');
    pageHeader.classList.add('page-header__nav--opened');
  }
  else if (pageHeader.classList.contains('page-header__nav--opened')) {
    navList.classList.remove('site-list--opened');
    navList.classList.add('site-list--closed');
    pageHeader.classList.remove('page-header__nav--opened');
    pageHeader.classList.add('page-header__nav--closed');
  }
});



/* for filter menu on catalog.html*/
const filter = document.querySelector('.catalog-filter');
const filterBy = document.querySelector('.catalog-filter__wrapper-top');
const filterByButton = document.querySelector('.catalog-filter__button-dropdown');
const filterBottom = document.querySelector('.catalog-filter__wrapper-bottom')
const filterList = document.querySelector('.catalog-filter__list');
const applyButton = document.querySelector('.apply-button');
const catalogFilter = document.querySelector('.catalog-filter');
const filterBottomCloseButton = document.querySelector('.catalog-filter__button-close');
const bottomClearAllButton = document.querySelector('.filter-clear-button');

const filterListWrapper = document.querySelector('.catalog-filter__list-wrapper');


filterByButton.addEventListener('click', function () {
  if (window.matchMedia('(min-width: 768px)').matches) {
    if (filterBy.classList.contains('closed')) {
      filterBy.classList.remove('closed');
      filterBy.classList.add('opened');
      filter.classList.remove('width-320');
      filterListWrapper.classList.remove('hide');
      bottomClearAllButton.classList.remove('hide');
    } else {
      if (filterBy.classList.contains('opened')) {
        filterBy.classList.remove('opened');
        filterBy.classList.add('closed');
        filterListWrapper.classList.add('hide');
        bottomClearAllButton.classList.add('hide');
      }
    }
  }
  else if (window.matchMedia('(min-width: 320px)').matches) {
    filter.classList.add('width-320');
    catalogFilter.style.border = 'none';
    filterBy.classList.add('hide');
    filterBy.classList.add('opened');
    filterBy.classList.remove('closed');
    filterBottom.classList.remove('hide');
    filterListWrapper.classList.remove('hide');
    applyButton.classList.remove('hide');
  }
});


filterBottomCloseButton.addEventListener('click', function () {
  filter.classList.remove('width-320');
  catalogFilter.style.borderWidth = '2px'
  catalogFilter.style.borderStyle = 'solid';
  catalogFilter.style.borderColor = '#151c22';
  filterBy.classList.remove('hide');
  filterBy.classList.remove('opened');
  filterBy.classList.add('closed');
  filterBottom.classList.add('hide');
  filterListWrapper.classList.add('hide');

});



/*for price filter*/
const filterItemPrice = document.querySelector('.filter-item--price');
const priceToggleButton = document.querySelector('.filter-item__price-button');
const priceContent = document.querySelector('.filter-item-price__content');

console.log(filterItemPrice);
console.log(priceToggleButton);
console.log(priceContent);

priceToggleButton.addEventListener('click', function () {
  if (priceToggleButton.classList.contains('closed')) {
    priceToggleButton.classList.add('opened');
    priceToggleButton.classList.remove('closed');
    priceContent.classList.remove('hide');
    filterItemPrice.classList.add('opened');
    filterItemPrice.classList.remove('closed');


  } else {
    priceToggleButton.classList.remove('opened');
    priceToggleButton.classList.add('closed');
    priceContent.classList.add('hide');
    filterItemPrice.classList.remove('opened');
    filterItemPrice.classList.add('closed');
  }

});


/*for color filter*/
const filterItemColor = document.querySelector('.filter-item--color');
const colorToggleButton = document.querySelector('.filter-item__color-button');
const colorContent = document.querySelector('.filter-item-color__content');

colorToggleButton.addEventListener('click', function () {
  if (colorToggleButton.classList.contains('closed')) {
    colorToggleButton.classList.add('opened');
    colorToggleButton.classList.remove('closed');
    colorContent.classList.remove('hide');
    filterItemColor.classList.add('opened');
    filterItemColor.classList.remove('closed');

  } else {
    colorToggleButton.classList.remove('opened');
    colorToggleButton.classList.add('closed');
    colorContent.classList.add('hide');
    filterItemColor.classList.remove('opened');
    filterItemColor.classList.add('closed');
  }

});



/*
for collection filter


*/
const filterItemCollection = document.querySelector('.filter-item--collection');
const collectionToggleButton = document.querySelector('.filter-item__collection-button');
const collectionContent = document.querySelector('.filter-item-collection__content');

collectionToggleButton.addEventListener('click', function () {
  if (collectionToggleButton.classList.contains('closed')) {
    collectionToggleButton.classList.add('opened');
    collectionToggleButton.classList.remove('closed');
    collectionContent.classList.remove('hide');
    filterItemCollection.classList.add('opened');
    filterItemCollection.classList.remove('closed');

  } else {
    collectionToggleButton.classList.remove('opened');
    collectionToggleButton.classList.add('closed');
    collectionContent.classList.add('hide');
    filterItemCollection.classList.remove('opened');
    filterItemCollection.classList.add('closed');
  }
});
