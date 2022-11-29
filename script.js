function carregar() {
    var msg = window.document.getElementById('msg') // var para carregar a mensagem
    var img = window.document.getElementById('imagem') // var para carregar a imagem
    var data = new Date() // variavel para chamar a data atual do sistema
    var hora = data.getHours() // variavel para chamar a hora atual
    msg.innerHTML = `Agora são ${hora} horas` // inserindo texto com innerHTML na 'msg'
    if (hora >= 0 && hora < 12) { // se: hora(atual) for maior ou igual a 0 e hora(atual) menor que 12
        // bom dia 
        img.src = 'fotomanha.png' // chamando imagem referente ao valor da condição
        document.body.style.background = '#c27c2e'
    } else if (hora >= 12 && hora <= 18) {  // senão se: a hora(atual) for maior ou igual a 12 e hora(atual) menor ou igual a 18
        // boa tarde
        img.src = 'fototarde.png'
        document.body.style.background = '#e85302'   
    } else { // senão: ...
        // boa noite
        img.src = 'fotonoite.png'
        document.body.style.background = '#4b3b61'
    }
}