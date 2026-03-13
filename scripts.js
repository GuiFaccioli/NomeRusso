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
  document.getElementById("cartaz1").src = "https://i.imgur.com/nRvAntK.jpeg";
  let digitado = document.getElementById("nomeDigitado").value;

  let sufixos = ["ov", "ev", "in", "sky", "nik", "vich"];

  let nomes = digitado.split(" ");

  let nomeRusso = nomes.map((nome) => {
    let ultimaLetra = nome.slice(-1).toLowerCase();

    if (ultimaLetra === "a") {
      return nome + "vich";
    }
    if (ultimaLetra === "e") {
      return nome + "merev";
    }
    if (ultimaLetra === "i") {
      return nome + "chencko";
    }
    if (ultimaLetra === "o") {
      return nome + "v";
    }
    if (ultimaLetra === "u") {
      return nome + "kov";
    }

    if (ultimaLetra === "r") {
      return nome + "ovich";
    }

    // se não cair em nenhuma regra
    let random = Math.floor(Math.random() * sufixos.length);
    return nome + sufixos[random];
  });

  document.getElementById("resultadoNome").innerText =
    `VOCÊ SE REGISTROU NO EXERCITO VERMELHO!
    Camarada ${nomeRusso.join(" ")} você receberá instruções de sua próxima missão em breve.`;
}

Teste;
