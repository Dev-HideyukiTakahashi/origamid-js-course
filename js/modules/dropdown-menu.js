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
  this.classList.toggle('ative');
}