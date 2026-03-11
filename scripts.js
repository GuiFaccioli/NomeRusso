const numbers = [1, 2, 3, 4, 5];
const numbersMultiplicado = numbers.map(function (number) {
  return number * 2;
});

console.log(numbersMultiplicado);

const pessoas = ["Guilherme", "Pedro", "João", "Jonas", "Bruno"];
const sobrenome = pessoas.map(function (nome) {
  return nome + " Faccioli";
});
console.log(sobrenome);

const numbersT = [1, 10, 100, 1000, 10000, 9, 90, 900, 9000, 90000];
const teste = numbersT.map(function (number) {
  return {
    Valor: number,
  };
});
console.log(teste);

const numberr = [1, 2, 3, 4, 5];
const resultado = numberr.map((number) => {
  return number * 5;
});

console.log(resultado);

const apelidos = ["Ze", "Ju", "Juju", "Leo", "Lu"];
const apelidosRussos = apelidos.map((elemento) => {
  return elemento + "nikov";
});
console.log(apelidosRussos);

function visualizarNome() {
  let digitado = document.getElementById("nomeDigitado").value;

  document.getElementById("resultadoNome").innerText = digitado;
}

function visualizarNome() {
  let digitado = document.getElementById("nomeDigitado").value;

  let sufixos = ["ov", "ev", "in", "sky", "nik", "vich"];

  let nomes = digitado.split(" ");

  let nomeRusso = nomes.map((nome) => {
    let random = Math.floor(Math.random() * sufixos.length);

    return nome + sufixos[random];
  });

  document.getElementById("resultadoNome").innerText = nomeRusso.join(" ");
}
