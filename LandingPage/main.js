let navBar = document.querySelector('#navbar')
let container = document.querySelector('#container1')
let loginPopup = document.querySelector('#login-popup')
const close = document.getElementById('close')

close.addEventListener('click', () => {
    navBar.classList.remove('borrado')
    container.classList.remove('borrado')
    loginPopup.classList.add('hidden')
})

function login() {
    navBar.classList.add('borrado')
    container.classList.add('borrado')
    loginPopup.classList.remove('hidden')
    loginPopup.classList.add('pop-up-animation')
}

let botaoEntrar = document.querySelector('#botao2')
let botaoCadastrar = document.querySelector('#botao3')

/*
async function loadUsuarios() {
    console.log("okok")
    const response = await fetch('/db/usuario.json');
    const usuario = await response.json();
    console.log(usuario);
    verificaLogin(usuario)
}
loadUsuarios()

function verificaLogin(usuario) {
*/

botaoEntrar.addEventListener('click', () => {
    console.log("test")
    let email = document.getElementById('e-mail').value
    let senha = document.getElementById('senha').value

    //var users = usuario["usuario"]
    //var emails = users["email"]
    //var senhas = users["senha"]

    var confereEmail = 0
    var confereSenha = 0

    pedidos = JSON.parse(localStorage.getItem('pedidos'));

    for (i = 0; i < pedidos.length; i++) {
        console.log(pedidos[i])
        if (email == pedidos[i][0]) {
            console.log("email ok")
            confereEmail = 1
        }
        if (confereEmail == 1 && senha == pedidos[i][1]) {
            console.log("senha ok")
            confereSenha = 1
        }
    }

    if (confereEmail + confereSenha == 2) {
        window.location.href = "../Dashboard/index.html";
    } else {
        alert("Informaões erradas")
    }

})

botaoCadastrar.addEventListener('click', () => {
        let email = document.getElementById('e-mail').value
        let senha = document.getElementById('senha').value

        info = [email, senha]
        let pedidos;
        if (localStorage.getItem('pedidos') === null) {
            pedidos = [];
        } else {
            pedidos = JSON.parse(localStorage.getItem('pedidos'));
        }
        pedidos.push(info);
        localStorage.setItem('pedidos', JSON.stringify(pedidos));
    })
    //}