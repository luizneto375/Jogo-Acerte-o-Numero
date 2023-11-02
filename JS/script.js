let numeroParaEncontrar = 0;//Isso vai ser o palpite do número que o jogador vai estar tentando acertar

let tentativas = 0;// Isso é o número de tentativas 

function atualizar() {
    // Essa é a função responsavel por gerar um número aleatorio

    numeroParaEncontrar = parseInt(Math.random() * 100);//OBS: esse é um metodo nativo do JS, Ele faz gerar um número entre 0 e 1, então vamos usar ele para poder gerar esse número entre 0 a 100, apenas temos que multiplicar esse metodo por 100;
}

function verificarNumero() {
    let acerto = document.querySelector("#acertar").value;

    if(acerto > 100 || acerto < 1) {
        document.querySelector("h2").innerHTML = "Número invalido!!!";
        return;
    }

if(acerto > numeroParaEncontrar) {

    tentativas++;
    document.querySelector("h2").innerHTML = "&#128556; Tente um número MENOR!!";

} else if(acerto < numeroParaEncontrar) {
    tentativas++;
    document.querySelector("h2").innerHTML = "&#128550; tente um número MAIOR!!";
} else {
    document.querySelector("h2").innerHTML = "&#128526; Parabéns você Acertou!!!" + " Você errou " + tentativas + " vezes ";
}

}
atualizar();
