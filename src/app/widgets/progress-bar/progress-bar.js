// Import stylesheets
import './progress-bar.css';

export class ProgressBarWidget extends HTMLElement {
  static get selector() {
    return 'progress-bar';
  }

  constructor() {
    super();
    this.value = null;
  }

  connectedCallback() {
    const elements = [];
    for (let i = 0; i <= 100; i++) {
      elements.push(
        `<span class="progress-bar-item" data-value="${i}"></span>`
      );
    }

    this.innerHTML = elements.join('');
    this.elements = Array.from(
      this.getElementsByClassName('progress-bar-item')
    );
  }

  setValue(value) {
    this.value = +value;

    this.elements.forEach((item, index) => {
      if (index <= this.value) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
}

if (!customElements.get(ProgressBarWidget.selector)) {
  customElements.define(ProgressBarWidget.selector, ProgressBarWidget);
}
