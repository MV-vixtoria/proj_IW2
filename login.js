// JavaScript for calculating the total cost of services in services.html

/*const calculateButton = document.getElementById("calculateButton");
const manicureInput = document.getElementById("manicure");
const pedicureInput = document.getElementById("pedicure");
const totalInput = document.getElementById("total");

calculateButton.addEventListener("click", () => {
    const manicureCost = 30 * parseInt(manicureInput.value);
    const pedicureCost = 40 * parseInt(pedicureInput.value);
    const totalCost = manicureCost + pedicureCost;

    totalInput.value = "R$" + totalCost.toFixed(2);
});*/

// JavaScript para adicionar a classe "clicked" ao botão ao ser clicado

/*const nosConhecaBtn = document.getElementById("nosConhecaBtn");

nosConhecaBtn.addEventListener("click", () => {
    nosConhecaBtn.classList.add("clicked");
});*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});