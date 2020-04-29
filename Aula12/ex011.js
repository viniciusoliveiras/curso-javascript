var idade = 56
if (idade<16){
    console.log(`Você tem ${idade} anos portanto não vota.`)
} else if (idade>=16 && idade<18 || idade>=65){
        console.log(`Você tem ${idade} anos, o voto é opcional.`)
} else{
        console.log(`Você tem ${idade} anos, o voto é OBRIGATÓRIO!`)
    }
