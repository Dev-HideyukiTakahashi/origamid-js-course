// const agora = new Date();

// agora.getDate() // dia
// agora.getDay() // dia da semana, ex 5 = FRI
// agora.getMonth() // número dia mês
// agora.getFullYear() // ano
// agora.getHours() // hora
// agora.getMinutes() // minutos
// agora.getTime() // ms desde 1970
// agora.getUTCHours() - 3 // horario Brasila


// function converterMilisegundosEmDias(time) {
//   return time / (24 * 60 * 60 * 1000);
// }


export default function initHorarioFuncionamento() {

}

const funcionamento = document.querySelector('[data-semana]');
// para converter de string para number em um array basta adicionar map(Number)
const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

const dataAgora = new Date();
const diaAgora = dataAgora.getDay();
const horarioAgora = dataAgora.getHours();

// no exemplo estava retornando '3' (quarta-feira), retorna -1 se não tiver no array
const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);

if (semanaAberto && horarioAberto) {
  funcionamento.classList.add('aberto');
}