/*let total = 0;

        /*function mostrarFormulario() {
            const formulario = document.getElementById("formulario");
            formulario.style.display = "block";
        }

        function calcularValor() {
            total = 0;

            const manicureCheckbox = document.getElementById("manicure");
            const pedicureCheckbox = document.getElementById("pedicure");
            const manicurePedicureCheckbox = document.getElementById("manicure_pedicure");

            if (manicureCheckbox.checked) {
                total += 20;
            }

            if (pedicureCheckbox.checked) {
                total += 30;
            }

            if (manicurePedicureCheckbox.checked) {
                total += 45;
            }

            const totalSpan = document.getElementById("total");
            totalSpan.textContent = total.toFixed(2);
        }
*/

function mostrarFormulario() {
    const formulario = document.getElementById("formulario");
    formulario.style.display = "block";
}

const servicos = document.querySelectorAll(".servico");
const totalSpan = document.getElementById("total");

servicos.forEach(function (servico) {
    servico.addEventListener("change", function () {
        calcularValor();
    });
});

function calcularValor() {
    let total = 0;

    servicos.forEach(function (servico) {
        if (servico.checked) {
            total += parseFloat(servico.value);
        }
    });

    totalSpan.textContent = total.toFixed(2);
}