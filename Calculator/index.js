const input = document.querySelector(".container__input");
const btn = document.querySelectorAll(".btn");
const ac = document.getElementById("ac");
const del = document.getElementById("del");
const igual = document.getElementById("igual");

let igualPresionado;

btn.forEach((button) => {
	button.addEventListener("click", () => {
		if (igualPresionado) {
			input.value = "";
			igualPresionado = false;
		}

		input.value += button.innerHTML;
	});
});

del.addEventListener("click", () => {
	let eliminar = input.value.slice(0, -1);
	input.value = eliminar;
});

ac.addEventListener("click", () => {
	input.value = "";
});

igual.addEventListener("click", () => {
	if (input.value.trim() !== "") {
		let resultado = eval(input.value);
		input.value = resultado;
		igualPresionado = true;
	}
});
