soma1 = 0
soma2 = 0
soma3 = 0
soma4 = 0
soma5 = 0
totalRen = 0
totalGab = 0
totalOut = 0
totalFat = 0
regGab = ""
regRen = ""
regNos = ""
regOutros1 = ""
regOutros2 = ""

option = {
    id: 0,
    linha: ""
 }
 optionFaturas = {
    id: 0,
    linha: ""
 }
var saves = []
var faturas = []
var number = /([0-9]+[.][0-9]+)|([0-9]+)/g
a1 = 0
a2 = 0
a3 = 0
a4 = 0 
a5 = 0


// SOMA GABRIEL
const inputGab = document.getElementById('gabriel')
inputGab.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let gabElem = parseFloat(document.getElementById("gabriel").value)
    if(isNaN(gabElem)){
        gabElem = 0
    }
    let valor = document.getElementById("soma1")
    soma1 = parseFloat((soma1 + gabElem).toFixed(2))
    //Projeto para apagar cada item separadamente
    // if(a1 == 0) regGab += `R$ ${gabElem}<button class="item" onclick="a(this)" id="">-</button>`
    // else regGab += ` + R$ ${gabElem}<button class="item" onclick="a(this)" id="">-</button>`
    if(a1 == 0) regGab += `R$ ${gabElem}`
    else regGab += ` + R$ ${gabElem}`
    valor.innerHTML = `<p class ="paragItem">${regGab}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma1}</p><br><br>`
    document.getElementById("gabriel").value = null
    a1++
  }
})
    
function somar1(){

    let gabElem = parseFloat(document.getElementById("gabriel").value)
    if(isNaN(gabElem)){
        gabElem = 0
    }
    let valor = document.getElementById("soma1")
    soma1 = parseFloat((soma1 + gabElem).toFixed(2))
    if(a1 == 0) regGab += `R$ ${gabElem}`
    else regGab += ` + R$ ${gabElem}`
    valor.innerHTML = `<p>${regGab}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma1}</p><br><br>`
     document.getElementById("gabriel").value = null
     a1++
}

// SOMA RENATA
const inputRen = document.getElementById('renata')
inputRen.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let renElem = parseFloat(document.getElementById("renata").value)
    if(isNaN(renElem)){
        renElem = 0
    }
    let valor = document.getElementById("soma2")
    soma2 = parseFloat((soma2 + renElem).toFixed(2))
    if(a2 == 0) regRen += `R$ ${renElem}`
    else regRen += ` + R$ ${renElem}`
    valor.innerHTML = `<p>${regRen}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma2}</p><br><br>`
    document.getElementById("renata").value = null
    a2++
  }
})
    
function somar2(){

    let renElem = parseFloat(document.getElementById("renata").value)
    if(isNaN(renElem)){
        renElem = 0
    }
    let valor = document.getElementById("soma2")
    soma2 = parseFloat((soma2 + renElem).toFixed(2))
    if(a2 == 0) regRen += `R$ ${renElem}`
    else regRen += ` + R$ ${renElem}`
    valor.innerHTML = `<p>${regRen}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma2}</p><br><br>`
    document.getElementById("renata").value = null
    a2++
}

// SOMA NÓS
const inputNos = document.getElementById('nos')
inputNos.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let nosElem = parseFloat(document.getElementById("nos").value)
    if(isNaN(nosElem)){
        nosElem = 0
    }
    let valor = document.getElementById("soma3")
    soma3 = parseFloat((soma3 + nosElem).toFixed(2))
    if(a3 == 0) regNos += `R$ ${nosElem}`
    else regNos += ` + R$ ${nosElem}`
    valor.innerHTML = `<p>${regNos}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma3}</p><br><br>`
    document.getElementById("nos").value = null
    a3++
  }
})
    
function somar3(){
    let nosElem = parseFloat(document.getElementById("nos").value)
    if(isNaN(nosElem)){
        nosElem = 0
    }
    let valor = document.getElementById("soma3")
    soma3 = parseFloat((soma3 + nosElem).toFixed(2))
    if(a3 == 0) regNos += `R$ ${nosElem}`
    else regNos += ` + R$ ${nosElem}`
    valor.innerHTML = `<p>${regNos}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma3}</p><br><br>`
    document.getElementById("nos").value = null
    a3++
}

// SOMA CATEGORIA 1
const inputOutros1 = document.getElementById('outros1')
inputOutros1.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros1Elem = parseFloat(document.getElementById("outros1").value)
    if(isNaN(outros1Elem)){
        outros1Elem = 0
    }
    let valor = document.getElementById("soma4")
    soma4 = parseFloat((soma4 + outros1Elem).toFixed(2))
    if(a4 == 0) regOutros1 += `R$ ${outros1Elem}`
    else regOutros1 += ` + R$ ${outros1Elem}`
    valor.innerHTML = `<p>${regOutros1}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma4}</p><br><br>`
    document.getElementById("outros1").value = null
    a4++
  }
})
    
function somar4(){
    let outros1Elem = parseFloat(document.getElementById("outros1").value)
    if(isNaN(outros1Elem)){
        outros1Elem = 0
    }
    let valor = document.getElementById("soma4")
    soma4 = parseFloat((soma4 + outros1Elem).toFixed(2))
    if(a4 == 0) regOutros1 += `R$ ${outros1Elem}`
    else regOutros1 += ` + R$ ${outros1Elem}`
    valor.innerHTML = `<p>${regOutros1}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma4}</p><br><br>`
    document.getElementById("outros1").value = null
    a4++
}

// SOMA CATEGORIA 2
const inputOutros2 = document.getElementById('outros2')
inputOutros2.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros2Elem = parseFloat(document.getElementById("outros2").value)
    if(isNaN(outros2Elem)){
        outros2Elem = 0
    }
    let valor = document.getElementById("soma5")
    soma5 = parseFloat((soma5 + outros2Elem).toFixed(2))
    if(a5 == 0) regOutros2 += `R$ ${outros2Elem}`
    else regOutros2 += ` + R$ ${outros2Elem}`
    valor.innerHTML = `<p>${regOutros2}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma5}</p><br><br>`
    document.getElementById("outros2").value = null
    a5++
  }
})
    
function somar5(){
    let outros2Elem = parseFloat(document.getElementById("outros2").value)
    if(isNaN(outros2Elem)){
        outros2Elem = 0
    }
    let valor = document.getElementById("soma5")
    soma5 = parseFloat((soma5 + outros2Elem).toFixed(2))
    if(a5 == 0) regOutros2 += `R$ ${outros2Elem}`
    else regOutros2 += ` + R$ ${outros2Elem}`
    valor.innerHTML = `<p>${regOutros2}</p>`
    valor.innerHTML += `<p>Soma: R$ ${soma5}</p><br><br>`
    document.getElementById("outros2").value = null
    a5++
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

let info = document.getElementById("info")
function mes(){
    let month = document.getElementById("month")
    let mes = document.getElementById("mes").value
    month.innerHTML =`Mês de ${mes}`
    localStorage.setItem("mesInput",mes)
    localStorage.setItem("mesHtml",month.innerHTML)
}

//BOTÃO SALVAR INFORMAÇÕES
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
        let counter = localStorage.getItem("contador1")
        let saves = JSON.parse(localStorage.getItem('vetSaves'))
        if(saves == null){
            saves = []
        }
        if(counter == null){
            counter = 1
        }
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

        for (var i in saves) {
            console.log(saves[i].linha)
            console.log(saves[i].id)
        }

        resumo.innerHTML = `<br><br><p>SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
        resumo.innerHTML += `<p>TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
        resumo.innerHTML += `<p>TOTAL PARA RENATA: R$ ${totalRen}</p>`
        resumo.innerHTML += `<p>TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`
        
        counter++
        //PARA SALVAR AS INFORMAÇÕES AO RECARREGAR A PÁG: AINDA ESTÁ INCOMPLETO
        localStorage.setItem("info",info.innerHTML)
        localStorage.setItem("resumo",resumo.innerHTML)
        localStorage.setItem("contador1",counter)
        localStorage.setItem("vetSaves", JSON.stringify(saves))
        localStorage.setItem("totalGab",totalGab)
        localStorage.setItem("totalRen",totalRen)
        localStorage.setItem("totalOut",totalOut)
        localStorage.setItem("totalFat",totalFat)
    }
}
//BOTÃO APAGAR INFORMAÇÃO ESPECÍFICA
function apagar(e){
    let saves = JSON.parse(localStorage.getItem('vetSaves'))
    saves = saves.filter(option => option.id != e.getAttribute("id"))
    totalGab = 0
    totalRen = 0
    totalFat = 0
    totalOut = 0
    console.log(e.getAttribute("id"))
    let info = document.getElementById("info")
    let numeros
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
    for (var i in saves) {
        console.log(saves[i].linha)
        console.log(saves[i].id)
    }


    resumo.innerHTML = `<br><br><p>SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
    resumo.innerHTML += `<p>TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
    resumo.innerHTML += `<p>TOTAL PARA RENATA: R$ ${totalRen}</p>`
    resumo.innerHTML += `<p>TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`

    localStorage.setItem("totalGab",totalGab)
    localStorage.setItem("totalRen",totalRen)
    localStorage.setItem("totalOut",totalOut)
    localStorage.setItem("totalFat",totalFat)
    localStorage.setItem("info",info.innerHTML)
    localStorage.setItem("resumo",resumo.innerHTML)
    localStorage.setItem('vetSaves', JSON.stringify(saves))
}
//BOTÃO APAGAR FATURA
function apagarFat(e){
    let fatura = document.getElementById("fatura")
    let faturas = JSON.parse(localStorage.getItem('vetFaturas'))
    faturas = faturas.filter(optionFaturas => optionFaturas.id != e.getAttribute("id"))
    fatura.innerHTML = ''
    for (var i in faturas) {
        fatura.innerHTML += faturas[i].linha
    }
    localStorage.setItem("fatura",fatura.innerHTML)
    localStorage.setItem('vetFaturas', JSON.stringify(faturas))
}
//BOTÃO NOVO CARTÃO
function zerar(){
    soma1 = 0
    soma2 = 0
    soma3 = 0
    soma4 = 0
    soma5 = 0
    a1 = 0
    a2 = 0
    a3 = 0
    a4 = 0 
    a5 = 0
    regGab = ""
    regRen = ""
    regNos = ""
    regOutros1 = ""
    regOutros2 = ""
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
//BOTÃO SALVAR FATURA
function salvarFatura(){
    let fatura = document.getElementById("fatura")
    let info = document.getElementById("info").innerHTML
    let resumo = document.getElementById("resumo").innerHTML
    let mes = document.getElementById("mes").value
    let counterFat = localStorage.getItem("contadorFat")
    let faturas = JSON.parse(localStorage.getItem('vetFaturas'))
    if(faturas == null){
        faturas = []
    }
    if(counterFat == null){
        counterFat = 1
    }
    optionFaturas = {
        id: counterFat,
        linha: ""
     }
    
    optionFaturas.linha += `<h2 class="month">REGISTRO:<br><br>Mês de ${mes}</h2>`
    optionFaturas.linha += info + resumo
    optionFaturas.linha += `<button class="calc" onclick="apagarFat(this)" id="${counterFat}">Apagar Fatura</button>`
    fatura.innerHTML += optionFaturas.linha
    
    faturas.push(optionFaturas)
    for (var i in faturas) {
        console.log(faturas[i].id)
        console.log(faturas[i].linha)
    }
    counterFat++
    localStorage.setItem("fatura",fatura.innerHTML)
    localStorage.setItem("contadorFat",counterFat)
    localStorage.setItem('vetFaturas', JSON.stringify(faturas))
}
//BOTÃO ZERAR REGISTRO E APAGAR TODA MEMÓRIA DO SITE
function zerarRegistro(){
    fatura.innerHTML = ''
    localStorage.removeItem("fatura")
    localStorage.removeItem("contadorFat")
    localStorage.removeItem("vetFaturas")
    localStorage.removeItem("info")
    localStorage.removeItem("resumo")
    localStorage.removeItem("mesHtml")
    let mes = document.getElementById("mes")
    mes.value = "padrao"
    localStorage.setItem("mesInput",mes.value)
    totalGab = 0
    totalRen = 0
    totalFat = 0
    totalOut = 0
    localStorage.setItem("totalGab",totalGab)
    localStorage.setItem("totalRen",totalRen)
    localStorage.setItem("totalOut",totalOut)
    localStorage.setItem("totalFat",totalFat)
    localStorage.removeItem("info")
    localStorage.removeItem("resumo")
}
//ONLOAD
onload = function(){
    let fatura = document.getElementById("fatura")
    fatura.innerHTML = localStorage.getItem("fatura")
    let info = document.getElementById("info")
    info.innerHTML = localStorage.getItem("info")
    let resumo = document.getElementById("resumo")
    resumo.innerHTML = localStorage.getItem("resumo")

    let month = document.getElementById("month")
    let mes = localStorage.getItem("mesInput")
    document.getElementById("mes").value = mes
    month.innerHTML = localStorage.getItem("mesHtml")

    totalGab = parseFloat(localStorage.getItem("totalGab"))
    totalRen = parseFloat(localStorage.getItem("totalRen"))
    totalOut = parseFloat(localStorage.getItem("totalOut"))
    totalFat = parseFloat(localStorage.getItem("totalFat"))
}