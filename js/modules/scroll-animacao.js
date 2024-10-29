// Se for exportar apenas 1, adicionar default
export default function initAnimaScroll() {

  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;

  function animaScroll() {
    sections.forEach((section) => {
      // pegando a distância em relação da section ao topo
      const sectionTop = section.getBoundingClientRect().top - windowMetade;
      if (sectionTop < 0) {
        section.classList.add('ativo');
      }
    });
  }

  // iniciando para não ficar nenhuma parte sem conteúdo
  animaScroll();

  window.addEventListener('scroll', animaScroll);
}
