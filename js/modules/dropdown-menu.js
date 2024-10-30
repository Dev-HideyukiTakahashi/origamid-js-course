// o dropdown foi resolvido apenas com css
// essa classe foi criada apenas para acessibilidade mobile
export default function initDropdownmenu() {

}


const dropdownMenus = document.querySelectorAll('[data-dropdown]');

dropdownMenus.forEach(menu => {
  menu.addEventListener('touchstart', handleClick);
  menu.addEventListener('click', handleClick);

})

function handleClick(event) {
  event.preventDefault();
  this.classList.toggle('active');
  outsideClick(this, () => {
    this.classList.remove('active')
  });
}

// para mobile, ao clicar fora do dropdown fechar
function outsideClick(element, callback) {
  const html = document.documentElement;
  const outside = 'data-outside'

  if (element.hasAttribute(outside)) {
    html.addEventListener('click', handleOutsideClick);
    element.setAttribute(outside, '')
  }
  function handleOutsideClick(event) {
    if (!element.contains(event.target)) {
      element.removeAttribute(outside, '')
      html.removeEventListener('click', handleOutsideClick);
      callback();
    }
  }
}