import './star-rating.css';

export class StarRatingWidget extends HTMLElement {
  static get selector() {
    return 'star-rating';
  }

  constructor() {
    super();
    this.value = null;
  }

  static get observedAttributes() {
    return ['value'];
  }

  connectedCallback() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(`<span data-value="${i}" class="star fa fa-star"></span>`);
    }

    this.innerHTML = stars.join('');
    this.elements = Array.from(this.querySelectorAll('.star'));
    this.setValue(this.value);
    this.classList.add(StarRatingWidget.selector);
    this.addEventListener('click', this.onClick);
  }

  disconnectedCallback() {
    this.elements = null;
  }

  attributeChangedCallback(name, _, newValue) {
    if (name === 'value') {
      this.setValue(newValue);
    }
  }

  onClick({ target }) {
    const value = target.dataset.value;
    this.setValue(value);
  }

  /**
   * sets the value of the ratings
   * @param {string|number} val
   */
  setValue(value) {
    if (value) {
      this.value = +value;
      if (this.elements) {
        this.elements.forEach((star, index) => {
          if (index + 1 <= this.value) {
            star.classList.add('checked');
          } else {
            star.classList.remove('checked');
          }
        });
      }
    }
  }
}

if (!customElements.get(StarRatingWidget.selector)) {
  customElements.define(StarRatingWidget.selector, StarRatingWidget);
}
