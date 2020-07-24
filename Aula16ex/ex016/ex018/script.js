let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

/* verifica se o nº está entre 1 e 100 */
function isNumero(n){
    if(Number(n)>=1 && Number(n)<=100){
        return true
    } else{
        return false
    }
}

/* verifica se o nº já está na lista. se retornar -1 é pq ainda não está */
function inLista(n, l){
    if(l.indexOf(Number(n))!= -1){
        return true
    } else{
        return false
    }
}

/* adiciona os números ao vetor e na tabela */
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''      
    } else{
        alert("[ERROR] Número inválido ou já na lista.")
    }  
    num.value = ""
    num.focus()
}

/* finaliza o processo mostrando diversas infos */
function finalizar(){
    if(valores.length == 0){
        alert("[ERROR] Adicione valores antes de finalizar.")
    } else{
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    
    for(let pos in valores){
        soma += valores[pos]
        if(valores[pos]>maior)
            maior = valores[pos]
        if(valores[pos]<menor)
            menor = valores[pos]
    }
    
    let media = soma/valores.length    

    res.innerHTML = ''
    if(valores.length == 1){
        res.innerHTML = `<p>Ao todo, temos ${valores.length} número cadastrado.</p>`
    } else{
        res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    }

    res.innerHTML += `<p>O maior número é ${maior}.</p>`
    res.innerHTML += `<p>O menor número é ${menor}</p>`
    res.innerHTML += `<p>A soma entre os números é ${soma}</p>`
    res.innerHTML += `<p>A média entre os números é ${media}</p>`
    }  
}

/* limpa todos os dados inseridos */
function limpar(){
    lista.innerHTML = ''
    res.innerHTML = ''
    valores = []
    
}