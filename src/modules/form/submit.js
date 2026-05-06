import dayjs from "dayjs"

const form = document.querySelector("form") 
const selectDate = document.getElementById("date")

// Data atual para formatar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual e defini a data mínima como sendo a atual.
selectDate.value = inputToday
selectDate.min = inputToday

form.onsubmit = (event) => {
  // Prevenir o comportamento padrão de carregar a página.
  event.preventDefault()
}