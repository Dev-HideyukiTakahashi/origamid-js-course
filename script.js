/* Navegacao por tabs */

function initTabiNav() {
  const tabMenu = document.querySelectorAll('.js-tab-menu li');
  const tabContent = document.querySelectorAll('.js-tab-content section');

  // deixando a primeira sessão com class 'ativo' ao carregar página
  tabContent[0].classList.add('ativo');

  // função callback
  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove('ativo');
    });
    tabContent[index].classList.add('ativo');
  }

  // ao clicar em determinada imagem traz a sessão respectiva
  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => {
      activeTab(index);
    });
  });
}
/* Navegacao por tabs FIM */
/* ------------------------------------------------------------------------------- */

/* Accordion list */

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');

  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }

  accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion);
  });
}

/* Accordion list FIM */
/* ------------------------------------------------------------------------------- */

/* Scroll suave */
// scroll suave do menu até a section correspondente

function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
  }

  linksInternos.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

/* Scroll suave FIM */
/* ------------------------------------------------------------------------------- */

/* INIT */
initTabiNav();
initAccordion();
initScrollSuave();