function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if ( hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/Dia.png'
        document.body.style.background = '#3C5E2D'
    } else if ( hora >= 12 && hora < 18) {
        // BOA TARDE
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#B24500'
    } else {
        // BOA NOITE
        img.src = 'imagens/noite.png'
        document.body.style.background = '#020305'
    }
}
