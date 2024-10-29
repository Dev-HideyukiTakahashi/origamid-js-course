export default function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]');
  tooltips.forEach(item => item.addEventListener('mouseover', onMouseOver));

  function onMouseOver(event) {
    const tooltipBox = criarTooltipBox(this);
    tooltipBox.style.top = event.pageY + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);

  }

  // foi criado obj e não função
  const onMouseMove = {
    // Precisa ser esse nome de método para ser um callback
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }

  // foi criado obj e não função
  const onMouseLeave = {
    tooltipBox: '',

    // Precisa ser esse nome de método para ser um callback
    handleEvent() {
      this.tooltipBox.remove();
    }
  }

  function criarTooltipBox(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label')
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }
}

