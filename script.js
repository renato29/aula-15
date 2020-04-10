function contar (){  
    let ini = document.getElementById('txti') 
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0|| fim.value.length==0 ||passo.value.length ==0){
        window.alert('Erro de dados, preencher todos os campos')
    }    else {
        res.innerHTML = 'Contando...'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo invalido, Consis dera-se passo igual a 1')
            p =1
        }ddd
        if (i<f){
            //contagem crescente
        for(let c= i; c <= f; c+=p)
        {
            res.innerHTML += `${c} \u{1F449} `
        }
        
    } else {
        //contagem regressiva para negavito
        for(let c=i; c>=f; c-=p){
            res.innerHTML += `${c} \u{1F449}`
        }

    }
    res.innerHTML +='\u{1F3C1}'}
}
// a linha 8 faz um simples contagem dos campos preenchidos