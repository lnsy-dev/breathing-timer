/*

  Custom HTML Elements

  For More information go to: https://lnsy.dev/blog/custom-html-components.html

 */

class BreathingTimer extends HTMLElement {
  connectedCallback(){
    const breathing_circle = document.createElement('div');
    breathing_circle.classList.add('breath-circle');
    this.appendChild(breathing_circle);

    const label = document.createElement('div');
    label.innerText = `Let's breath for 1 minute before we continue`;
    label.classList.add('breath-label');
    this.appendChild(label);
    setTimeout((e) => {
      this.classList.add('fade-out-div');
      setTimeout((t) => {
        this.remove();
      }, 5000);
    }, 60000);

  }

}

customElements.define('breathing-timer', BreathingTimer)