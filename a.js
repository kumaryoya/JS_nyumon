const buttonAlert = document.getElementById("button")
const textarea = document.getElementById("textarea")
buttonAlert.addEventListener("click", () => {
  alert(textarea.value)
})