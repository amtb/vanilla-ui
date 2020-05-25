import './star-rating.css';

export class StarRatingWidget extends HTMLElement {
  // static selector = 'star-rating';
  constructor() {
    super();
    this.value = null;
  }

  connectedCallback() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(`<span data-value="${i}" class="star fa fa-star"></span>`);
    }
    this.innerHTML = stars.join('');
    this.elements = Array.from(this.querySelectorAll('.star'));

    this.classList.add('star-rating');
    this.addEventListener('click', this.onClick);
  }

  onClick({ target }) {
    const value = target.dataset.value;
    if (value) {
      this.value = +value;
      this.elements.forEach((star, index) => {
        if (index + 1 <= this.value) {
          star.classList.add('checked');
        } else {
          star.classList.remove('checked');
        }
      });
    }
    this.setAttribute('value', this.value);
  }
}

if (!customElements.get('star-rating')) {
  customElements.define('star-rating', StarRatingWidget);
}
