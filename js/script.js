// CAMPO DE NOME

let nome = document.querySelector("#nome")
let msgNome = document.querySelector("#validaNome")
nome.addEventListener("blur", ()=>{
    if(nome.value == ""){
        msgNome.textContent = "Por favor, insira um nome"
        msgNome.classList.remove("text-success")
        msgNome.classList.add("text-danger")
        nome.classList.remove("border-success")
        nome.classList.add("border", "border-danger")
    }
    else{
        msgNome.textContent = "Nome valido"
        msgNome.classList.remove("text-danger")
        msgNome.classList.add("text-success")
        nome.classList.remove("border-danger")
        nome.classList.add("border", "border-success")
    }
})

// CAMPO DE SOBRENOME

let sobrenome = document.querySelector("#sobrenome")
let msgSobrenome = document.querySelector("#validaSobrenome")
sobrenome.addEventListener("blur", ()=>{
    if(sobrenome.value == ""){
        msgSobrenome.textContent = "Por favor, insira um sobrenome"
        msgSobrenome.classList.remove("text-success")
        msgSobrenome.classList.add("text-danger")
        sobrenome.classList.remove("border-success")
        sobrenome.classList.add("border", "border-danger")
    }
    else{
        msgSobrenome.textContent = "Sobrenome valido"
        msgSobrenome.classList.remove("text-danger")
        msgSobrenome.classList.add("text-success")
        sobrenome.classList.remove("border-danger")
        sobrenome.classList.add("border", "border-success")
    }
})

// CAMPO NOME DE USUARIO

let nomeUsuario = document.querySelector("#usuario")
let msgNomeUsuario = document.querySelector("#validaNomeUsuario")
nomeUsuario.addEventListener("blur", ()=>{
    if(nomeUsuario.value.indexOf("@") == -1){
        msgNomeUsuario.textContent = "Por favor, insira um nome de usuario"
        msgNomeUsuario.classList.remove("text-success")
        msgNomeUsuario.classList.add("text-danger")
        nomeUsuario.classList.remove("border-success")
        nomeUsuario.classList.add("border", "border-danger")
    }
    else{
        msgNomeUsuario.textContent = "Usuario valido"
        msgNomeUsuario.classList.remove("text-danger")
        msgNomeUsuario.classList.add("text-success")
        nomeUsuario.classList.remove("border-danger")
        nomeUsuario.classList.add("border", "border-success")
    }
})

// CAMPO DE EMAIL

let email = document.querySelector("#email")
let msgEmail = document.querySelector("#validaEmail")
email.addEventListener("blur", ()=>{
    let minusculo = email.value.toLowerCase()
    if(minusculo.indexOf('@') == -1 || minusculo.indexOf('.com') == -1){
        console.log("Email invalido")
        msgEmail.textContent = "Este email é invalido"
        msgEmail.classList.remove("text-success")
        email.classList.remove("border-danger")
        msgEmail.classList.add("text-danger")
        email.classList.add("border", "border-danger")
    }
    else{
        console.log("Email valido")
        msgEmail.textContent = "Este email é valido"
        msgEmail.classList.remove("text-danger")
        email.classList.remove("border-danger")
        msgEmail.classList.add("text-success")
        email.classList.add("border", "border-success")
    }
})

// CAMPO DE ENDEREÇO

let endereco = document.querySelector("#endereco")
let msgEndereco = document.querySelector("#validaEndereco")
endereco.addEventListener("blur", ()=>{
    if(endereco.value == ""){
        msgEndereco.textContent = "Este endereço é invalido"
        msgEndereco.classList.remove("text-success")
        msgEndereco.classList.add("text-danger")
    }
    else{
        msgEndereco.textContent = "Endereço valido"
        msgEndereco.classList.remove("text-danger")
        msgEndereco.classList.add("text-success")
    }
})

// CAMPO DE ESTADO, CIDADE, CEP

let estado = document.querySelector("#estado")
let msgEstado = document.querySelector("#validaEstado")
estado.addEventListener("click", ()=>{
    if(estado.value == ""){
        msgEstado.textContent  = "Escolha um estado" 
        msgEstado.classList.remove("text-success")
        estado.classList.remove("border-success")
        msgEstado.classList.add("text-danger")
        estado.classList.add("border", "border-danger")
    }
    else{
        msgEstado.textContent = "Tudo certo"
        msgEstado.classList.remove("text-danger")
        estado.classList.remove("border-danger")
        msgEstado.classList.add("text-success")
        estado.classList.add("border", "border-success")
    }
})

let cidade = document.querySelector("#cidade")
let msgCidade = document.querySelector("#validaCidade")
cidade.addEventListener("click", ()=>{
    if(cidade.value == ""){
        msgCidade.textContent  = "Escolha uma cidade" 
        msgCidade.classList.remove("text-success")
        cidade.classList.remove("border-success")
        msgCidade.classList.add("text-danger")
        cidade.classList.add("border", "border-danger")
    }
    else{
        msgCidade.textContent = "Tudo certo"
        msgCidade.classList.remove("text-danger")
        cidade.classList.remove("border-danger")
        msgCidade.classList.add("text-success")
        cidade.classList.add("border", "border-success")
    }
})

let cep = document.querySelector("#cep")
let msgCep = document.querySelector("#validaCep")
cep.addEventListener("blur", ()=>{
    if(cep.value == ""){
        msgCep.textContent  = "Informe um cep" 
        msgCep.classList.remove("text-success")
        cep.classList.remove("border-danger")
        msgCep.classList.add("text-danger")
        cep.classList.add("border", "border-danger")
    }
    else{
        msgCep.textContent = "Tudo certo"
        msgCep.classList.remove("text-danger")
        cep.classList.remove("border-danger")
        msgCep.classList.add("text-success")
        cep.classList.add("border", "border-success")
    }
})

// CAMPO DE CHECKBOX

let info = document.querySelector("#salvarInfo")
info.addEventListener("click", ()=>{
    if(info.checked){
        alert("Escolha realizada com sucesso")
    }
    else{
        alert("Tem certeza que não quer salvar estas informações?")
    }
})

//  MOSTRAR FORMA DE PAGAMENTO E INFORMAÇÕES DO CARTÃO

let pagamento = document.querySelectorAll("input[name=pagamento]")
let btnPagamento = document.querySelector("#verificarPagamento")
let msgPagamento = document.querySelector("#tipoPagamento")
let cartao = document.querySelector("#cartao")
cartao.classList.add("d-none")
btnPagamento.addEventListener("click", (evento)=>{
    evento.preventDefault()
    let cont = 0
    for(elementos of pagamento){
        if(elementos.checked){
            msgPagamento.value = elementos.value
        }
        else{
            cont++
        }
    }
    if(cont==5){
        alert("É preciso escolher uma forma de pagamento para continuar")
    }
    if(msgPagamento.value == "Cartão de Crédito" || msgPagamento.value == "Cartão de Débito"){
        cartao.classList.remove("d-none")
        cartao.classList.add("d-block")
    }
    else{
        cartao.classList.remove("d-block")
        cartao.classList.add("d-none")
    }
})

// VALIDAÇÃO DAS INFORMAÇÕES DO CARTÃO

let nomeCartao = document.querySelector("#nomeCartao")
let msgNomeCartao = document.querySelector("#validaNomeCartao")
nomeCartao.addEventListener("blur", ()=>{
    if(nomeCartao.value == ""){
        msgNomeCartao.textContent = "Insira um nome para o cartão"
        nomeCartao.classList.remove("border-success")
        msgNomeCartao.classList.remove("text-success")
        nomeCartao.classList.add("border", "border-danger")
        msgNomeCartao.classList.add("text-danger")
    }
    else{
        msgNomeCartao.textContent = "Nome válido"
        nomeCartao.classList.remove("border-danger")
        msgNomeCartao.classList.remove("text-danger")
        nomeCartao.classList.add("border", "border-success")
        msgNomeCartao.classList.add("text-success")
    }
})

let numeroCartao = document.querySelector("#numeroCartao")
let msgNumeroCartao = document.querySelector("#validaNumeroCartao")
numeroCartao.addEventListener("keyup", ()=>{
    if(numeroCartao.value == ""){
        msgNumeroCartao.textContent = "Informe os numeros do cartão"
        numeroCartao.classList.remove("border-success")
        msgNumeroCartao.classList.remove("text-success")
        numeroCartao.classList.add("border", "border-danger")
        msgNumeroCartao.classList.add("text-danger")
    }
    else{
        msgNumeroCartao.textContent = "Numero de cartão valido"
        numeroCartao.classList.remove("border-danger")
        msgNumeroCartao.classList.remove("text-danger")
        numeroCartao.classList.add("border", "border-success")
        msgNumeroCartao.classList.add("text-success")
    }
})

let validadeCartao = document.querySelector("#validadeCartao")
let msgValidadeCartao = document.querySelector("#validadeMsgCartao")
validadeCartao.addEventListener("blur", ()=>{
    if(validadeCartao.value == ""){
        msgValidadeCartao.textContent = "Informe a validade do cartão"
        validadeCartao.classList.remove("border-success")
        msgValidadeCartao.classList.remove("text-success")
        validadeCartao.classList.add("border", "border-danger")
        msgValidadeCartao.classList.add("text-danger")
    }
    else{
        msgValidadeCartao.textContent = "Validade válida"
        validadeCartao.classList.remove("border-danger")
        msgValidadeCartao.classList.remove("text-danger")
        validadeCartao.classList.add("border", "border-success")
        msgValidadeCartao.classList.add("text-success")
    }
})

let cvv = document.querySelector("#cvv")
let msgCvv = document.querySelector("#validaCvv")
cvv.addEventListener("keyup", ()=>{
    if(cvv.value.length<3 || cvv.value.length == ""){
        msgCvv.textContent = "O CVV precisa ter 3 digitos"
        cvv.classList.remove("border-success")
        msgCvv.classList.remove("text-success")
        cvv.classList.add("border", "border-danger")
        msgCvv.classList.add("text-danger")
    }
    else{
        msgCvv.textContent = "CVV valido"
        cvv.classList.remove("border-danger")
        msgCvv.classList.remove("text-danger")
        cvv.classList.add("border", "border-success")
        msgCvv.classList.add("text-success")
    }
})