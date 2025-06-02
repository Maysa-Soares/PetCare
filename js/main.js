/* Seleione todos os elementos com a classe "duvida" */
const elementosDuvida = document.querySelectorAll(".duvida");

elementosDuvida.forEach(function (duvida) {
  duvida.addEventListener("click", function () {
        /* Fecha as outras duvidas */
        elementosDuvida.forEach(function (outraDuvida) {
            if (outraDuvida !== duvida) {
              outraDuvida.classList.remove("ativa");
            }
        });
        /* Abre a duvida */
    duvida.classList.toggle("ativa");
  });
});