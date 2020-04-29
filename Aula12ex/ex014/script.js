function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var dataH = new Date()
    var hora =dataH.getHours()
    var dataM = new Date()
    var minutos = dataM.getMinutes()

    if(hora>=6 && hora<=12){
        //bom dia
        msg.innerHTML = "<strong>Bom dia!</strong>"
        msg.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'fotomanha.png'
        document.body.style.background = '#fed364'
    } else if(hora>12 && hora<18){
        //boa tarde
        msg.innerHTML = "<strong>Boa tarde!</strong>"
        msg.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'fototarde.png'
        document.body.style.background = '#ee9a46'
    } else if(hora>=18 && hora<=23){
        //boa noite
        msg.innerHTML = "<strong>Boa noite!</strong>"
        msg.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos.`
        img.src = 'fotonoite.png'
        document.body.style.background = '#6c539a'
    } else{
        //boa madrugada
        msg.innerHTML = "<strong>Boa madrugada!</strong>"
        msg.innerHTML += `<p>Agora são ${hora} horas e ${minutos} minutos.`
        msg.innerHTML += "Não vá dormir tarde, um bom sono pode melhorar seu dia!"
        img.src = 'fotomadrugada.png'
        document.body.style.background = '#244b7f'
    }

}
