var categoryFilter = (function () {
  var filterContainer = document.querySelector('.js-category-filter-container');
  var filter = null;

  var classScrollableRight = 'is-scrollable-right';
  var classScrollableLeft = 'is-scrollable-left';

  var check = function () {
    if (filter.scrollLeft > 0) {
      filterContainer.classList.add(classScrollableLeft);
    } else {
      filterContainer.classList.remove(classScrollableLeft);
    }

    if (filter.scrollLeft + filter.offsetWidth < filter.scrollWidth) {
      filterContainer.classList.add(classScrollableRight);
    } else {
      filterContainer.classList.remove(classScrollableRight);
    }
  };

  var init = function () {
    if (filterContainer) {
      filter = filterContainer.querySelector('.js-category-filter');

      // Register events
      filter.addEventListener('scroll', check);

      // Init on load
      check();
    }
  };

  return {
    init: init,
  };
}());

window.addEventListener('load', function () {
  categoryFilter.init();
});
