soma1 = 0
soma2 = 0
soma3 = 0
soma4 = 0
soma5 = 0
totalRen = 0
totalGab = 0
totalOut = 0
totalFat = 0
counter = 1
option = {
    id: 0,
    linha: ""
 }
var number = /([0-9]+[.][0-9]+)|([0-9]+)/g
var saves = []


// SOMA GABRIEL
const inputGab = document.getElementById('gabriel')
inputGab.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let gabElem = parseFloat(document.getElementById("gabriel").value)
    let valor = document.getElementById("soma1")
    soma1 = soma1 + gabElem
    valor.innerHTML = `<p>Soma: R$ ${soma1}</p><br><br>`
    document.getElementById("gabriel").value = null
  }
})
    
function somar1(){

    let gabElem = parseFloat(document.getElementById("gabriel").value)
    let valor = document.getElementById("soma1")
    soma1 = soma1 + gabElem
    valor.innerHTML = `<p>Soma: R$ ${soma1}</p><br><br>`
     document.getElementById("gabriel").value = null
}

// SOMA RENATA
const inputRen = document.getElementById('renata')
inputRen.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let renElem = parseFloat(document.getElementById("renata").value)
    let valor = document.getElementById("soma2")
    soma2 = soma2 + renElem
    valor.innerHTML = `<p>Soma: R$ ${soma2}</p><br><br>`
    document.getElementById("renata").value = null
  }
})
    
function somar2(){

    let renElem = parseFloat(document.getElementById("renata").value)
    let valor = document.getElementById("soma2")
    soma2 = soma2 + renElem
    valor.innerHTML = `<p>Soma: R$ ${soma2}</p><br><br>`
    document.getElementById("renata").value = null
}

// SOMA NÓS
const inputNos = document.getElementById('nos')
inputNos.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let nosElem = parseFloat(document.getElementById("nos").value)
    let valor = document.getElementById("soma3")
    soma3 = soma3 + nosElem
    valor.innerHTML = `<p>Soma: R$ ${soma3}</p><br><br>`
    document.getElementById("nos").value = null
  }
})
    
function somar3(){
    let nosElem = parseFloat(document.getElementById("nos").value)
    let valor = document.getElementById("soma3")
    soma3 = soma3 + nosElem
    valor.innerHTML = `<p>Soma: R$ ${soma3}</p><br><br>`
    document.getElementById("nos").value = null
}

// SOMA CATEGORIA 1
const inputOutros1 = document.getElementById('outros1')
inputOutros1.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros1Elem = parseFloat(document.getElementById("outros1").value)
    let valor = document.getElementById("soma4")
    soma4 = soma4 + outros1Elem
    valor.innerHTML = `<p>Soma: R$ ${soma4}</p><br><br>`
    document.getElementById("outros1").value = null
  }
})
    
function somar4(){
    let outros1Elem = parseFloat(document.getElementById("outros1").value)
    let valor = document.getElementById("soma4")
    soma4 = soma4 + outros1Elem
    valor.innerHTML = `<p>Soma: R$ ${soma4}</p><br><br>`
    document.getElementById("outros1").value = null
}

// SOMA CATEGORIA 2
const inputOutros2 = document.getElementById('outros2')
inputOutros2.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros2Elem = parseFloat(document.getElementById("outros2").value)
    let valor = document.getElementById("soma5")
    soma5 = soma5 + outros2Elem
    valor.innerHTML = `<p>Soma: R$ ${soma5}</p><br><br>`
    document.getElementById("outros2").value = null
  }
})
    
function somar5(){
    let outros2Elem = parseFloat(document.getElementById("outros2").value)
    let valor = document.getElementById("soma5")
    soma5 = soma5 + outros2Elem
    valor.innerHTML = `<p>Soma: R$ ${soma5}</p><br><br>`
    document.getElementById("outros2").value = null
}

// BOTÃO CALCULAR FATURA
function calcular(){
    let resultado = document.getElementById("resultado")
    let cartao = document.getElementById("card").value
    let categoria1 = document.getElementById("cat1").value
    let categoria2 = document.getElementById("cat2").value
    resultado.innerHTML = `<h2>Cartão ${cartao} </h2><br>`
    resultado.innerHTML += `<p class="result">Gabriel: R$ ${soma1 + soma3/2}</p><br>`
    resultado.innerHTML += `<p class="result">Renata: R$ ${soma2 + soma3/2}</p><br>`
    resultado.innerHTML += `<p class="result">Nós: R$ ${soma3}</p><br>`
    if(categoria1 != ""){
        resultado.innerHTML += `<p class="result">${categoria1}: R$ ${soma4}</p><br>`
    }
    if(categoria2 != ""){
        resultado.innerHTML += `<p class="result">${categoria2}: R$ ${soma5}</p><br>`
    }
    resultado.innerHTML += `<p class="result">Total da Fatura: R$ ${soma1+soma2+soma3+soma4+soma5}</p><br>`
}

//BOTÃO SALVAR INFORMAÇÕES
let info = document.getElementById("info")
function mes(){
    let month = document.getElementById("month")
    let mes = document.getElementById("mes").value
    month.innerHTML =`Mês de ${mes}`
}
function salvar(){
    if(document.getElementById("mes").value == "padrao"){
        alert("Escolha o mês!")
    }
    else{
    let cartao = document.getElementById("card").value
    let info = document.getElementById("info")
    let resumo = document.getElementById("resumo")
    let categoria1 = document.getElementById("cat1").value
    let categoria2 = document.getElementById("cat2").value
    let somaGab = soma1 + soma3/2
    let somaRen = soma2 + soma3/2
    let somaCat1 = soma4
    let somaCat2 = soma5
    let somaTotal = soma1+soma2+soma3+soma4+soma5
    option = {
        id: counter,
        linha: ""
     }
    
    totalGab = totalGab + somaGab
    totalRen = totalRen + somaRen
    totalOut = totalOut + somaCat1 + somaCat2
    totalFat = totalFat + somaTotal
    
    if(categoria1 == "" && categoria2 == ""){
        option.linha +=`<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | Total: R$ ${somaTotal}</li>`
    }
    else{
        if(categoria1 != "" && categoria2 == ""){
            option.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria1}: R$ ${somaCat1} | Total: R$ ${somaTotal} </li>`
        }
        if(categoria1 == "" && categoria2 != ""){
            option.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria2}: R$ ${somaCat2} | Total: R$ ${somaTotal} </li>`
        } 
        if(categoria1 != "" && categoria2 != ""){
            option.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria1}: R$ ${somaCat1} | ${categoria2}: R$ ${somaCat2} | Total: R$ ${somaTotal} </li>`
        }   
    }
    option.linha += `<button onclick="apagar(this)" id="${counter}">Apagar</button>`
    info.innerHTML += option.linha

    saves.push(option)

    resumo.innerHTML = `<br><br><p>SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
    resumo.innerHTML += `<p>TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
    resumo.innerHTML += `<p>TOTAL PARA RENATA: R$ ${totalRen}</p>`
    resumo.innerHTML += `<p>TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`

    counter++
    }
}
//BOTÃO APAGAR
function apagar(e){
    saves = saves.filter(option => option.id != e.getAttribute("id"))
    totalGab = 0
    totalRen = 0
    totalFat = 0
    totalOut = 0
    let info = document.getElementById("info")
    let numeros
    let mes = document.getElementById("mes").value
    info.innerHTML =``
    for (var i in saves) {
        info.innerHTML += saves[i].linha
        numeros = saves[i].linha.match(number)
        for (var i in numeros) {
            if(i==1){
                totalGab += parseFloat(numeros[i])
            }
            if(i==2){
                totalRen += parseFloat(numeros[i])
            }
            if(i==(numeros.length-2)){
                totalFat += parseFloat(numeros[i])
            }
        }
    }
    totalOut = totalFat - totalGab - totalRen
    resumo.innerHTML = `<br><br><p>SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
    resumo.innerHTML += `<p>TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
    resumo.innerHTML += `<p>TOTAL PARA RENATA: R$ ${totalRen}</p>`
    resumo.innerHTML += `<p>TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`
}

function zerar(){
    soma1 = 0
    soma2 = 0
    soma3 = 0
    soma4 = 0
    soma5 = 0
    document.getElementById("soma1").innerHTML = ``
    document.getElementById("soma2").innerHTML = ``
    document.getElementById("soma3").innerHTML = ``
    document.getElementById("soma4").innerHTML = ``
    document.getElementById("soma5").innerHTML = ``
    document.getElementById("cat1").value = null
    document.getElementById("cat2").value = null
    document.getElementById("gabriel").value = null
    document.getElementById("renata").value = null
    document.getElementById("nos").value = null
    document.getElementById("outros1").value = null
    document.getElementById("outros2").value = null
    document.getElementById("resultado").innerHTML =''
}
function salvarFatura(){
    let fatura = document.getElementById("fatura")
    let info = document.getElementById("info").innerHTML
    let resumo = document.getElementById("resumo").innerHTML
    let mes = document.getElementById("mes").value
    fatura.innerHTML += `<h2 class="month">REGISTRO:<br><br>Mês de ${mes}</h2>`
    fatura.innerHTML += info + resumo
    localStorage.setItem("fatura",fatura.innerHTML)
}

function apagarRegistro(){
    let fatura = document.getElementById("fatura")
}

function zerarRegistro(){
    fatura.innerHTML = ''
    localStorage.removeItem("fatura")
}
onload = function(){
    let fatura = document.getElementById("fatura")
    let dados = localStorage.getItem("fatura")
    fatura.innerHTML = dados
}