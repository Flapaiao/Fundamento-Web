let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let sugestoes = document.querySelector('#sugestoes');
let nomeOk = false
let emailOk = false
let sugestoesOk = false

function validarNome() {

    let txtNome = document.querySelector('#txtNome');
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {

    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail Inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validarSugestoes() {

    let txtSugestoes = document.querySelector('#txtSugestoes');
    if (sugestoes.value.length > 150) {
        txtSugestoes.innerHTML = 'Digite no máximo 150 caracteres'
        txtSugestoes.style.color = 'red'
        txtSugestoes.style.display = 'block'
    } else {
        txtSugestoes.style.display = 'none'
        sugestoesOk = true
    }
}

function enviar() {
    
    if(nomeOk == true && emailOk == true && sugestoesOk == true) {
        alert('Formulário enviado com sucesso')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}