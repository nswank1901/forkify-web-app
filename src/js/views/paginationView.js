import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    // event delegation
    this._parentElement.addEventListener('click', function(e) {
      const btn = e.target.closest('.btn--inline');

      if(!btn) return;

      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    })
  }

  _generateMarkupButtonPrev(curPage) {
    return `<button data-goto="${curPage-1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
  </button>`;
  }

  _generateMarkupButtonNext(curPage) {
    return `<button data-goto="${curPage+1}" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}"></use>
    </svg>
    <span>Page ${curPage + 1}</span>
  </button>`;
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButtonNext(curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButtonPrev(curPage);
    }

    // Other page
    if (curPage < numPages) {
      return (
        this._generateMarkupButtonPrev(curPage) +
        this._generateMarkupButtonNext(curPage)
      );
     
    }

    // Page 1, and there are NO pages
    return '';
  }
}

export default new PaginationView();
