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
        msgNome.textContent = "Nome válido"
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
        msgSobrenome.textContent = "Sobrenome válido"
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
        msgNomeUsuario.textContent = "Por favor, insira um nome de usuário válido utilizando o @"
        msgNomeUsuario.classList.remove("text-success")
        msgNomeUsuario.classList.add("text-danger")
        nomeUsuario.classList.remove("border-success")
        nomeUsuario.classList.add("border", "border-danger")
    }
    else{
        msgNomeUsuario.textContent = "Usuário válido"
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
 email.value.toLowerCase()
    if(email.value.indexOf('@') == -1 && email.value.indexOf('.com') == -1){
        msgEmail.textContent = "Este email é inválido, esta faltando o @ ou .com"
        msgEmail.classList.remove("text-success")
        email.classList.remove("border-danger")
        msgEmail.classList.add("text-danger")
        email.classList.add("border", "border-danger")
    }
    else{
        msgEmail.textContent = "Email válido"
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
        msgEndereco.textContent = "Este endereço é inválido"
        msgEndereco.classList.remove("text-success")
        endereco.classList.remove("border-success")
        msgEndereco.classList.add("text-danger")
        endereco.classList.add("border", "border-danger")
    }
    else{
        msgEndereco.textContent = "Endereço válido"
        msgEndereco.classList.remove("text-danger")
        endereco.classList.remove("border-danger")
        msgEndereco.classList.add("text-success")
        endereco.classList.add("border", "border-success")
    }
})

// CAMPO DE ESTADO, CIDADE, CEP

let estado = document.querySelector("#estado")
estado.addEventListener("click", ()=>{
    if(estado.value == ""){
        estado.classList.remove("border-success")
        estado.classList.add("border", "border-danger")
    }
    else{
        estado.classList.remove("border-danger")
        estado.classList.add("border", "border-success")
    }
})

let cidade = document.querySelector("#cidade")
cidade.addEventListener("click", ()=>{
    if(cidade.value == ""){
        cidade.classList.remove("border-success")
        cidade.classList.add("border", "border-danger")
    }
    else{
        cidade.classList.remove("border-danger")
        cidade.classList.add("border", "border-success")
    }
})

let cep = document.querySelector("#cep")
let msgCep = document.querySelector("#validaCep")
cep.addEventListener("blur", ()=>{
    if(cep.value == "" || cep.value.length<8){
        msgCep.textContent  = "O CEP precisa ter 8 digitos" 
        msgCep.classList.remove("text-success")
        cep.classList.remove("border-danger")
        msgCep.classList.add("text-danger")
        cep.classList.add("border", "border-danger")
    }
    else{
        msgCep.textContent = "CEP válido"
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
        alert("Informações salvas com sucesso")
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
numeroCartao.addEventListener("blur", ()=>{
    if(numeroCartao.value == "" || numeroCartao.value.length<13){
        msgNumeroCartao.textContent = "Os números do cartão devem conter no minimo 13 digitos"
        numeroCartao.classList.remove("border-success")
        msgNumeroCartao.classList.remove("text-success")
        numeroCartao.classList.add("border", "border-danger")
        msgNumeroCartao.classList.add("text-danger")
    }
    else{
        msgNumeroCartao.textContent = "Número de cartão valido"
        numeroCartao.classList.remove("border-danger")
        msgNumeroCartao.classList.remove("text-danger")
        numeroCartao.classList.add("border", "border-success")
        msgNumeroCartao.classList.add("text-success")
    }
})

let validadeCartao = document.querySelector("#validadeCartao")
validadeCartao.addEventListener("blur", ()=>{
    if(validadeCartao.value == ""){
        validadeCartao.classList.remove("border-success")
        validadeCartao.classList.add("border", "border-danger")
    }
    else{
        validadeCartao.classList.remove("border-danger")
        validadeCartao.classList.add("border", "border-success") 
    }
})

let cvv = document.querySelector("#cvv")
let msgCvv = document.querySelector("#validaCvv")
cvv.addEventListener("blur", ()=>{
    if(cvv.value.length<3 || cvv.value == ""){
        msgCvv.textContent = "O CVV precisa ter no minimo 3 digitos"
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

