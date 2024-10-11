let listaArmazenar = [];

function adicionar() {
    let nomeAmigos = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (!isNaN(parseInt(nomeAmigos))) {
        nomeAmigos = parseFloat(nomeAmigos);
    } if (nomeAmigos == '' || typeof nomeAmigos !== 'string' || listaArmazenar.includes(nomeAmigos)) {
        alert('Confirme se está informando algum nome, e se esse nome já não faz parte da lista');
        document.getElementById('nome-amigo').value = '';
    } else {
        nomeAmigos = nomeAmigos.toLowerCase()
        listaArmazenar.push(nomeAmigos);
        listaAmigos.textContent = listaArmazenar.join(', ');
        document.getElementById('nome-amigo').value = '';
        console.log(listaArmazenar);
        return listaArmazenar;
    }

}

function sortear() {
    embaralhar(listaArmazenar);
    let sorteio = document.getElementById('lista-sorteio');

    if (listaArmazenar.length < 4) {
        alert('Nomes insuficientes. Utilize ao menos 4 nomes diferentes');
        return;
    }

    while (listaArmazenar.length == 0) {
        alert('Não é possível realizar o sorteio, por favor, digite os nomes a serem sorteados');
        break;
    }

    for (let i = 0; i < listaArmazenar.length; i++) {
        if (i == listaArmazenar.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + listaArmazenar[i] + ' -> ' + listaArmazenar[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + listaArmazenar[i] + ' -> ' + listaArmazenar[i + 1] + '<br>'
        }
    }
}

function reiniciar() {
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    listaArmazenar = [];
}

function embaralhar(listaArmazenar) {

    for (let indice = listaArmazenar.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [listaArmazenar[indice - 1], listaArmazenar[indiceAleatorio]] =
            [listaArmazenar[indiceAleatorio], listaArmazenar[indice - 1]];
    }
}




