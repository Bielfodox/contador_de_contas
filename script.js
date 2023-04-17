soma1 = 0
soma2 = 0
soma3 = 0
soma4 = 0
soma5 = 0
soma6 = 0
soma7 = 0
totalRen = 0
totalGab = 0
totalOut = 0
totalFat = 0

optionSaves = {
    id: 0,
    linha: ""
 }
 optionFaturas = {
    id: 0,
    linha: ""
 }
 option1 = {
    id: 0,
    linha: ""
 }
 option2 = {
    id: 0,
    linha: ""
 }
 option3 = {
    id: 0,
    linha: ""
 }
 option4 = {
    id: 0,
    linha: ""
 }
 option5 = {
    id: 0,
    linha: ""
 }
 option6 = {
    id: 0,
    linha: ""
 }
 option7 = {
    id: 0,
    linha: ""
 }

var saves = []
var faturas = []
var vet1 = []
var vet2 = []
var vet3 = []
var vet4 = []
var vet5 = []
var vet6 = []
var vet7 = []
var number = /([0-9]+[.][0-9]+)|([0-9]+)/g
a1 = 0
a2 = 0
a3 = 0
a4 = 0 
a5 = 0
a6 = 0
a7 = 0

// SOMA GABRIEL
const inputGab = document.getElementById('gabriel')
inputGab.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let gabElem = parseFloat(document.getElementById("gabriel").value)
    if(isNaN(gabElem)){
        gabElem = 0
    }

    let counter1 = localStorage.getItem("contador1")
    let vet1 = JSON.parse(localStorage.getItem('vet1'))
    if(vet1 == null){
        vet1 = []
    }
    if(counter1 == null){
        counter1 = 1
    }
    option1 = {
        id: counter1,
        linha: ""
    }
    let valor = document.getElementById("soma1")
    soma1 = parseFloat((soma1 + gabElem).toFixed(2))

    if(a1 == 0) option1.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item1(this)" id="${counter1}">R$ ${gabElem}</button> </p>`
    else option1.linha += `<p class ="paragItem">+ <button class="item" onclick="apagar_item1(this)" id="${counter1}">R$ ${gabElem}</button></p>`
    
    vet1.push(option1)

    valor.innerHTML += option1.linha
    let total = document.getElementById("total1")
    total.innerHTML = `<p class="total">Soma: R$ ${soma1}</p><br><br>`
    counter1++
    document.getElementById("gabriel").value = null
    localStorage.setItem("valor1",valor.innerHTML)
    localStorage.setItem("vet1", JSON.stringify(vet1))
    localStorage.setItem("contador1",counter1)
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
    // INÍCIO DA EDIÇÃO(depois do soma1)
    let counter1 = localStorage.getItem("contador1")
    let vet1 = JSON.parse(localStorage.getItem('vet1'))
    if(vet1 == null){
        vet1 = []
    }
    if(counter1 == null){
        counter1 = 1
    }
    option1 = {
        id: counter1,
        linha: ""
    }
    if(a1 == 0) option1.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item1(this)" id="${counter1}">R$ ${gabElem}</button></p>`
    else option1.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item1(this)" id="${counter1}">R$ ${gabElem}</button></p>`
    
    vet1.push(option1)

    valor.innerHTML += option1.linha
    let total = document.getElementById("total1")
    total.innerHTML = `<p class="total">Soma: R$ ${soma1}</p><br><br>`
    counter1++
    document.getElementById("gabriel").value = null
    localStorage.setItem("valor1",valor.innerHTML)
    localStorage.setItem("vet1", JSON.stringify(vet1))
    localStorage.setItem("contador1",counter1)
    a1++
    //FIM da edição
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
    // INÍCIO DA EDIÇÃO(depois do soma1)
    let counter2 = localStorage.getItem("contador2")
    let vet2 = JSON.parse(localStorage.getItem('vet2'))
    if(vet2 == null){
        vet2 = []
    }
    if(counter2 == null){
        counter2 = 1
    }
    option2 = {
        id: counter2,
        linha: ""
    }
    if(a2 == 0) option2.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item2(this)" id="${counter2}">R$ ${renElem}</button></p>`
    else option2.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item2(this)" id="${counter2}">R$ ${renElem}</button></p>`
    
    vet2.push(option2)

    valor.innerHTML += option2.linha
    let total = document.getElementById("total2")
    total.innerHTML = `<p class="total">Soma: R$ ${soma2}</p><br><br>`
    counter2++
    localStorage.setItem("valor2",valor.innerHTML)
    localStorage.setItem("vet2", JSON.stringify(vet2))
    localStorage.setItem("contador2",counter2)
    //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
    // INÍCIO DA EDIÇÃO(depois do soma1)
    let counter2 = localStorage.getItem("contador2")
    let vet2 = JSON.parse(localStorage.getItem('vet2'))
    if(vet2 == null){
        vet2 = []
    }
    if(counter2 == null){
        counter2 = 1
    }
    option2 = {
        id: counter2,
        linha: ""
    }
    if(a2 == 0) option2.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item2(this)" id="${counter2}">R$ ${renElem}</button></p>`
    else option2.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item2(this)" id="${counter2}">R$ ${renElem}</button></p>`
    
    vet2.push(option2)

    valor.innerHTML += option2.linha
    let total = document.getElementById("total2")
    total.innerHTML = `<p class="total">Soma: R$ ${soma2}</p><br><br>`
    counter2++
    localStorage.setItem("valor2",valor.innerHTML)
    localStorage.setItem("vet2", JSON.stringify(vet2))
    localStorage.setItem("contador2",counter2)
    //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
    // INÍCIO DA EDIÇÃO(depois do soma1)
    let counter3 = localStorage.getItem("contador3")
    let vet3 = JSON.parse(localStorage.getItem('vet3'))
    if(vet3 == null){
        vet3 = []
    }
    if(counter3 == null){
        counter3 = 1
    }
    option3 = {
        id: counter3,
        linha: ""
    }
    if(a3 == 0) option3.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item3(this)" id="${counter3}">R$ ${nosElem}</button></p>`
    else option3.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item3(this)" id="${counter3}">R$ ${nosElem}</button></p>`
    
    vet3.push(option3)

    valor.innerHTML += option3.linha
    let total = document.getElementById("total3")
    total.innerHTML = `<p class="total">Soma: R$ ${soma3}</p><br><br>`
    counter3++
    localStorage.setItem("valor3",valor.innerHTML)
    localStorage.setItem("vet3", JSON.stringify(vet3))
    localStorage.setItem("contador3",counter3)
    //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
    // INÍCIO DA EDIÇÃO(depois do soma1)
    let counter3 = localStorage.getItem("contador3")
    let vet3 = JSON.parse(localStorage.getItem('vet3'))
    if(vet3 == null){
        vet3 = []
    }
    if(counter3 == null){
        counter3 = 1
    }
    option3 = {
        id: counter3,
        linha: ""
    }
    if(a3 == 0) option3.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item3(this)" id="${counter3}">R$ ${nosElem}</button></p>`
    else option3.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item3(this)" id="${counter3}">R$ ${nosElem}</button></p>`
    
    vet3.push(option3)

    valor.innerHTML += option3.linha
    let total = document.getElementById("total3")
    total.innerHTML = `<p class="total">Soma: R$ ${soma3}</p><br><br>`
    counter3++
    localStorage.setItem("valor3",valor.innerHTML)
    localStorage.setItem("vet3", JSON.stringify(vet3))
    localStorage.setItem("contador3",counter3)
    //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter4 = localStorage.getItem("contador4")
   let vet4 = JSON.parse(localStorage.getItem('vet4'))
   if(vet4 == null){
       vet4 = []
   }
   if(counter4 == null){
       counter4 = 1
   }
   option4 = {
       id: counter4,
       linha: ""
   }
   if(a4 == 0) option4.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item4(this)" id="${counter4}">R$ ${outros1Elem}</button></p>`
   else option4.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item4(this)" id="${counter4}">R$ ${outros1Elem}</button></p>`
   
   vet4.push(option4)

   valor.innerHTML += option4.linha
   let total = document.getElementById("total4")
   total.innerHTML = `<p class="total">Soma: R$ ${soma4}</p><br><br>`
   counter4++
   localStorage.setItem("valor4",valor.innerHTML)
   localStorage.setItem("vet4", JSON.stringify(vet4))
   localStorage.setItem("contador4",counter4)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter4 = localStorage.getItem("contador4")
   let vet4 = JSON.parse(localStorage.getItem('vet4'))
   if(vet4 == null){
       vet4 = []
   }
   if(counter4 == null){
       counter4 = 1
   }
   option4 = {
       id: counter4,
       linha: ""
   }
   if(a4 == 0) option4.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item4(this)" id="${counter4}">R$ ${outros1Elem}</button></p>`
   else option4.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item4(this)" id="${counter4}">R$ ${outros1Elem}</button></p>`
   
   vet4.push(option4)

   valor.innerHTML += option4.linha
   let total = document.getElementById("total4")
   total.innerHTML = `<p class="total">Soma: R$ ${soma4}</p><br><br>`
   counter4++
   localStorage.setItem("valor4",valor.innerHTML)
   localStorage.setItem("vet4", JSON.stringify(vet4))
   localStorage.setItem("contador4",counter4)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter5 = localStorage.getItem("contador5")
   let vet5 = JSON.parse(localStorage.getItem('vet5'))
   if(vet5 == null){
       vet5 = []
   }
   if(counter5 == null){
       counter5 = 1
   }
   option5 = {
       id: counter5,
       linha: ""
   }
   if(a5 == 0) option5.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item5(this)" id="${counter5}">R$ ${outros2Elem}</button></p>`
   else option5.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item5(this)" id="${counter5}">R$ ${outros2Elem}</button></p>`
   
   vet5.push(option5)

   valor.innerHTML += option5.linha
   let total = document.getElementById("total5")
   total.innerHTML = `<p class="total">Soma: R$ ${soma5}</p><br><br>`
   counter5++
   localStorage.setItem("valor5",valor.innerHTML)
   localStorage.setItem("vet5", JSON.stringify(vet5))
   localStorage.setItem("contador5",counter5)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
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
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter5 = localStorage.getItem("contador5")
   let vet5 = JSON.parse(localStorage.getItem('vet5'))
   if(vet5 == null){
       vet5 = []
   }
   if(counter5 == null){
       counter5 = 1
   }
   option5 = {
       id: counter5,
       linha: ""
   }
   if(a5 == 0) option5.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item5(this)" id="${counter5}">R$ ${outros2Elem}</button></p>`
   else option5.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item5(this)" id="${counter5}">R$ ${outros2Elem}</button></p>`
   
   vet5.push(option5)

   valor.innerHTML += option5.linha
   let total = document.getElementById("total5")
   total.innerHTML = `<p class="total">Soma: R$ ${soma5}</p><br><br>`
   counter5++
   localStorage.setItem("valor5",valor.innerHTML)
   localStorage.setItem("vet5", JSON.stringify(vet5))
   localStorage.setItem("contador5",counter5)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
    document.getElementById("outros2").value = null
    a5++
}

// SOMA CATEGORIA 3
const inputOutros3 = document.getElementById('outros3')
inputOutros3.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros3Elem = parseFloat(document.getElementById("outros3").value)
    if(isNaN(outros3Elem)){
        outros3Elem = 0
    }
    let valor = document.getElementById("soma6")
    soma6 = parseFloat((soma6 + outros3Elem).toFixed(2))
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter6 = localStorage.getItem("contador6")
   let vet6 = JSON.parse(localStorage.getItem('vet6'))
   if(vet6 == null){
       vet6 = []
   }
   if(counter6 == null){
       counter6 = 1
   }
   option6 = {
       id: counter6,
       linha: ""
   }

   // PAUSEI AQUIIIIIIIIIIIIIIIIIIII
   if(a6 == 0) option6.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item6(this)" id="${counter6}">R$ ${outros3Elem}</button></p>`
   else option6.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item6(this)" id="${counter6}">R$ ${outros3Elem}</button></p>`
   
   vet6.push(option6)

   valor.innerHTML += option6.linha
   let total = document.getElementById("total6")
   total.innerHTML = `<p class="total">Soma: R$ ${soma6}</p><br><br>`
   counter6++
   localStorage.setItem("valor6",valor.innerHTML)
   localStorage.setItem("vet6", JSON.stringify(vet6))
   localStorage.setItem("contador6",counter6)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
    document.getElementById("outros3").value = null
    a6++
  }
})
    
function somar6(){
    let outros3Elem = parseFloat(document.getElementById("outros3").value)
    if(isNaN(outros3Elem)){
        outros3Elem = 0
    }
    let valor = document.getElementById("soma6")
    soma6 = parseFloat((soma6 + outros3Elem).toFixed(2))
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter6 = localStorage.getItem("contador6")
   let vet6 = JSON.parse(localStorage.getItem('vet6'))
   if(vet6 == null){
       vet6 = []
   }
   if(counter6 == null){
       counter6 = 1
   }
   option6 = {
       id: counter6,
       linha: ""
   }
   if(a6 == 0) option6.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item6(this)" id="${counter6}">R$ ${outros3Elem}</button></p>`
   else option6.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item6(this)" id="${counter6}">R$ ${outros3Elem}</button></p>`
   
   vet6.push(option6)

   valor.innerHTML += option6.linha
   let total = document.getElementById("total6")
   total.innerHTML = `<p class="total">Soma: R$ ${soma6}</p><br><br>`
   counter6++
   localStorage.setItem("valor6",valor.innerHTML)
   localStorage.setItem("vet6", JSON.stringify(vet6))
   localStorage.setItem("contador6",counter6)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
    document.getElementById("outros3").value = null
    a6++
}

// SOMA CATEGORIA 4
const inputOutros4 = document.getElementById('outros4')
inputOutros4.addEventListener('keyup', function (e){
  var key = e.which || e.keyCode;
  if (key == 13) {
    let outros4Elem = parseFloat(document.getElementById("outros4").value)
    if(isNaN(outros4Elem)){
        outros4Elem = 0
    }
    let valor = document.getElementById("soma7")
    soma7 = parseFloat((soma7 + outros4Elem).toFixed(2))
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter7 = localStorage.getItem("contador7")
   let vet7 = JSON.parse(localStorage.getItem('vet7'))
   if(vet7 == null){
       vet7 = []
   }
   if(counter7 == null){
       counter7 = 1
   }
   option7 = {
       id: counter7,
       linha: ""
   }
   if(a7 == 0) option7.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item7(this)" id="${counter7}">R$ ${outros4Elem}</button></p>`
   else option7.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item7(this)" id="${counter7}">R$ ${outros4Elem}</button></p>`
   
   vet7.push(option7)

   valor.innerHTML += option7.linha
   let total = document.getElementById("total7")
   total.innerHTML = `<p class="total">Soma: R$ ${soma7}</p><br><br>`
   counter7++
   localStorage.setItem("valor7",valor.innerHTML)
   localStorage.setItem("vet7", JSON.stringify(vet7))
   localStorage.setItem("contador7",counter7)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
    document.getElementById("outros4").value = null
    a7++
  }
})
    
function somar7(){
    let outros4Elem = parseFloat(document.getElementById("outros4").value)
    if(isNaN(outros4Elem)){
        outros4Elem = 0
    }
    let valor = document.getElementById("soma7")
    soma7 = parseFloat((soma7 + outros4Elem).toFixed(2))
   // INÍCIO DA EDIÇÃO(depois do soma1)
   let counter7 = localStorage.getItem("contador7")
   let vet7 = JSON.parse(localStorage.getItem('vet7'))
   if(vet7 == null){
       vet7 = []
   }
   if(counter7 == null){
       counter7 = 1
   }
   option7 = {
       id: counter7,
       linha: ""
   }
   if(a7 == 0) option7.linha += `<p class ="paragItem"><button class="item" onclick="apagar_item7(this)" id="${counter7}">R$ ${outros4Elem}</button></p>`
   else option7.linha += `<p class ="paragItem"> + <button class="item" onclick="apagar_item7(this)" id="${counter7}">R$ ${outros4Elem}</button></p>`
   
   vet7.push(option7)

   valor.innerHTML += option7.linha
   let total = document.getElementById("total7")
   total.innerHTML = `<p class="total">Soma: R$ ${soma7}</p><br><br>`
   counter7++
   localStorage.setItem("valor7",valor.innerHTML)
   localStorage.setItem("vet7", JSON.stringify(vet7))
   localStorage.setItem("contador7",counter7)
   //FIM da edição(ANTES do document.getElementById("renata").value = null)
    document.getElementById("outros4").value = null
    a7++
}
// BOTÃO CALCULAR FATURA
function calcular(){
    let resultado = document.getElementById("resultado")
    let cartao = document.getElementById("card").value
    let categoria1 = document.getElementById("cat1").value
    let categoria2 = document.getElementById("cat2").value
    let categoria3 = document.getElementById("cat3").value
    let categoria4 = document.getElementById("cat4").value
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
    if(categoria3 != ""){
        resultado.innerHTML += `<p class="result">${categoria3}: R$ ${soma6}</p><br>`
    }
    if(categoria4 != ""){
        resultado.innerHTML += `<p class="result">${categoria4}: R$ ${soma7}</p><br>`
    }
    resultado.innerHTML += `<p class="result">Total da Fatura: R$ ${soma1+soma2+soma3+soma4+soma5+soma6+soma7}</p><br>`
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
        let categoria3 = document.getElementById("cat3").value
        let categoria4 = document.getElementById("cat4").value
        let somaGab = soma1 + soma3/2
        let somaRen = soma2 + soma3/2
        let somaCat1 = soma4
        let somaCat2 = soma5
        let somaCat3 = soma6
        let somaCat4 = soma7
        let somaTotal = soma1+soma2+soma3+soma4+soma5+soma6+soma7
        let counter = localStorage.getItem("contadorInfo")
        let saves = JSON.parse(localStorage.getItem('vetSaves'))
        if(saves == null){
            saves = []
        }
        if(counter == null){
            counter = 1
        }
        optionSaves = {
            id: counter,
            linha: ""
        }
        
        totalGab = totalGab + somaGab
        totalRen = totalRen + somaRen
        totalOut = totalOut + somaCat1 + somaCat2+ somaCat3 + somaCat4
        totalFat = totalFat + somaTotal
        
        if(categoria1 == "" && categoria2 == "" && categoria3 == "" && categoria4 == ""){
            optionSaves.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | Total: R$ ${somaTotal} </li>`
        }
        else{
            optionSaves.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria1}: R$ ${somaCat1} | ${categoria2}: R$ ${somaCat2} | ${categoria3}: R$ ${somaCat3} | ${categoria4}: R$ ${somaCat4} | Total: R$ ${somaTotal} </li>`
            // if(categoria1 != "" && categoria2 == ""){
            //     optionSaves.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria1}: R$ ${somaCat1} | Total: R$ ${somaTotal} </li>`
            // }
            // if(categoria1 == "" && categoria2 != ""){
            //     optionSaves.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria2}: R$ ${somaCat2} | Total: R$ ${somaTotal} </li>`
            // } 
            // if(categoria1 != "" && categoria2 != ""){
            //     optionSaves.linha += `<li id="${counter}">Cartão ${cartao} | Gabriel: R$ ${somaGab} | Renata: R$ ${somaRen} | ${categoria1}: R$ ${somaCat1} | ${categoria2}: R$ ${somaCat2} | Total: R$ ${somaTotal} </li>`
            // }   
        }
        optionSaves.linha += `<button onclick="apagar(this)" id="${counter}">Apagar</button>`
        info.innerHTML += optionSaves.linha

        saves.push(optionSaves)

        resumo.innerHTML = `<p class="resum">SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
        resumo.innerHTML += `<p class="resum">TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
        resumo.innerHTML += `<p class="resum">TOTAL PARA RENATA: R$ ${totalRen}</p>`
        resumo.innerHTML += `<p class="resum">TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`
        
        counter++
        
        localStorage.setItem("info",info.innerHTML)
        localStorage.setItem("resumo",resumo.innerHTML)
        localStorage.setItem("contadorInfo",counter)
        localStorage.setItem("vetSaves", JSON.stringify(saves))
        localStorage.setItem("totalGab",totalGab)
        localStorage.setItem("totalRen",totalRen)
        localStorage.setItem("totalOut",totalOut)
        localStorage.setItem("totalFat",totalFat)
    }
}
//BOTÃO APAGAR INFORMAÇÃO
function apagar(e){
    let saves = JSON.parse(localStorage.getItem('vetSaves'))
    saves = saves.filter(optionSaves => optionSaves.id != e.getAttribute("id"))
    totalGab = 0
    totalRen = 0
    totalFat = 0
    totalOut = 0
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

    resumo.innerHTML = `<p class="resum">SOMA DE TODAS AS FATURAS: R$ ${totalFat}</p>`
    resumo.innerHTML += `<p class="resum">TOTAL PARA GABRIEL: R$ ${totalGab}</p>`
    resumo.innerHTML += `<p class="resum">TOTAL PARA RENATA: R$ ${totalRen}</p>`
    resumo.innerHTML += `<p class="resum">TOTAL EM OUTRAS CATEGORIAS: R$ ${totalOut}</p>`

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
    soma6 = 0
    soma7 = 0
    a1 = 0
    a2 = 0
    a3 = 0
    a4 = 0 
    a5 = 0
    a6 = 0 
    a7 = 0
    regGab = ""
    regRen = ""
    regNos = ""
    regOutros1 = ""
    regOutros2 = ""
    regOutros3 = ""
    regOutros4 = ""
    document.getElementById("soma1").innerHTML = ``
    document.getElementById("soma2").innerHTML = ``
    document.getElementById("soma3").innerHTML = ``
    document.getElementById("soma4").innerHTML = ``
    document.getElementById("soma5").innerHTML = ``
    document.getElementById("soma6").innerHTML = ``
    document.getElementById("soma7").innerHTML = ``
    document.getElementById("cat1").value = null
    document.getElementById("cat2").value = null
    document.getElementById("cat3").value = null
    document.getElementById("cat4").value = null
    document.getElementById("gabriel").value = null
    document.getElementById("renata").value = null
    document.getElementById("nos").value = null
    document.getElementById("outros1").value = null
    document.getElementById("outros2").value = null
    document.getElementById("outros3").value = null
    document.getElementById("outros4").value = null
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
    
    optionFaturas.linha += `<h2 class="register">REGISTRO:<br><br>Mês de ${mes}</h2>`
    optionFaturas.linha += info + resumo
    optionFaturas.linha += `<button class="calc" onclick="apagarFat(this)" id="${counterFat}">Apagar Fatura</button>`
    fatura.innerHTML += optionFaturas.linha
    
    faturas.push(optionFaturas)

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
    localStorage.removeItem("valor1")
    localStorage.removeItem("vet1")
    localStorage.removeItem("contador1")
    localStorage.removeItem("valor2")
    localStorage.removeItem("vet2")
    localStorage.removeItem("contador2")
    localStorage.removeItem("valor3")
    localStorage.removeItem("vet3")
    localStorage.removeItem("contador3")
    localStorage.removeItem("valor4")
    localStorage.removeItem("vet4")
    localStorage.removeItem("contador4")
    localStorage.removeItem("valor5")
    localStorage.removeItem("vet5")
    localStorage.removeItem("contador5")
    localStorage.removeItem("valor6")
    localStorage.removeItem("vet6")
    localStorage.removeItem("contador6")
    localStorage.removeItem("valor7")
    localStorage.removeItem("vet7")
    localStorage.removeItem("contador7")
}
// APAGAR ITENS DE GABRIEL
function apagar_item1(e){
    let valor = document.getElementById("soma1")
    let vet1 = JSON.parse(localStorage.getItem('vet1'))
    let total = document.getElementById("total1")
    vet1 = vet1.filter(option1 => option1.id != e.getAttribute("id"))
    
    soma1 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet1) {
        valor.innerHTML += vet1[i].linha
        numeros = vet1[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma1 = somaItens
    if(soma1 == 0) a1 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma1}</p><br><br>`
    localStorage.setItem("valor1",valor.innerHTML)
    localStorage.setItem('vet1', JSON.stringify(vet1))
}
// APAGAR ITENS DE RENATA
function apagar_item2(e){
    let valor = document.getElementById("soma2")
    let vet2 = JSON.parse(localStorage.getItem('vet2'))
    let total = document.getElementById("total2")
    vet2 = vet2.filter(option2 => option2.id != e.getAttribute("id"))
    
    soma2 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet2) {
        valor.innerHTML += vet2[i].linha
        numeros = vet2[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma2 = somaItens
    if(soma2 == 0) a2 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma2}</p><br><br>`
    localStorage.setItem("valor2",valor.innerHTML)
    localStorage.setItem('vet2', JSON.stringify(vet2))
}
// APAGAR ITENS DE NÓS
function apagar_item3(e){
    let valor = document.getElementById("soma3")
    let vet3 = JSON.parse(localStorage.getItem('vet3'))
    let total = document.getElementById("total3")
    vet3 = vet3.filter(option3 => option3.id != e.getAttribute("id"))
    
    soma3 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet3) {
        valor.innerHTML += vet3[i].linha
        numeros = vet3[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma3 = somaItens
    if(soma3 == 0) a3 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma3}</p><br><br>`
    localStorage.setItem("valor3",valor.innerHTML)
    localStorage.setItem('vet3', JSON.stringify(vet3))
}
// APAGAR ITENS DE CATEGORIA 1
function apagar_item4(e){
    let valor = document.getElementById("soma4")
    let vet4 = JSON.parse(localStorage.getItem('vet4'))
    let total = document.getElementById("total4")
    vet4 = vet4.filter(option4 => option4.id != e.getAttribute("id"))
    
    soma4 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet4) {
        valor.innerHTML += vet4[i].linha
        numeros = vet4[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma4 = somaItens
    if(soma4 == 0) a4 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma4}</p><br><br>`
    localStorage.setItem("valor4",valor.innerHTML)
    localStorage.setItem('vet4', JSON.stringify(vet4))
}
// APAGAR ITENS DE CATEGORIA 2
function apagar_item5(e){
    let valor = document.getElementById("soma5")
    let vet5 = JSON.parse(localStorage.getItem('vet5'))
    let total = document.getElementById("total5")
    vet5 = vet5.filter(option5 => option5.id != e.getAttribute("id"))
    
    soma5 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet5) {
        valor.innerHTML += vet5[i].linha
        numeros = vet5[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma5 = somaItens
    if(soma5 == 0) a5 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma5}</p><br><br>`
    localStorage.setItem("valor5",valor.innerHTML)
    localStorage.setItem('vet5', JSON.stringify(vet5))
}
// APAGAR ITENS DE CATEGORIA 3
function apagar_item6(e){
    let valor = document.getElementById("soma6")
    let vet6 = JSON.parse(localStorage.getItem('vet6'))
    let total = document.getElementById("total6")
    vet6 = vet6.filter(option6 => option6.id != e.getAttribute("id"))
    
    soma6 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet6) {
        valor.innerHTML += vet6[i].linha
        numeros = vet6[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma6 = somaItens
    if(soma6 == 0) a6 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma6}</p><br><br>`
    localStorage.setItem("valor6",valor.innerHTML)
    localStorage.setItem('vet6', JSON.stringify(vet6))
}
// APAGAR ITENS DE CATEGORIA 4
function apagar_item7(e){
    let valor = document.getElementById("soma7")
    let vet7 = JSON.parse(localStorage.getItem('vet7'))
    let total = document.getElementById("total7")
    vet7 = vet7.filter(option7 => option7.id != e.getAttribute("id"))
    
    soma7 = 0
    let somaItens = 0
    let numeros
    valor.innerHTML =``

    for (var i in vet7) {
        valor.innerHTML += vet7[i].linha
        numeros = vet7[i].linha.match(number)
        for (var i in numeros) {
            if(i==2){
                somaItens += parseFloat(numeros[i]) 
                somaItens = parseFloat(somaItens.toFixed(2))
            } 
        }
    }
    soma7 = somaItens
    if(soma7 == 0) a7 = 0 
    total.innerHTML = `<p class="total">Soma: R$ ${soma7}</p><br><br>`
    localStorage.setItem("valor7",valor.innerHTML)
    localStorage.setItem('vet7', JSON.stringify(vet5))
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
