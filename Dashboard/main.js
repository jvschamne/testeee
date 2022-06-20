async function loadRestaurantes() {
    console.log("okok")
    const response = await fetch('../db/restaurantes.json');
    const restaurantes = await response.json();
    console.log(restaurantes);
    loadMarmitas(restaurantes)
}

async function loadMarmitas(restaurantes) {
    console.log("okok")
    const response = await fetch('../db/marmitas.json');
    const marmitas = await response.json();
    console.log(marmitas);
    main(restaurantes, marmitas)
}



loadRestaurantes();

function main(infoRestaurantes, marmitas) {
    console.log(marmitas)


    let cardsRestaurantes = document.getElementById("cardsRestaurantes")

    /*var requestURL = 'http://127.0.0.1:5555/db/restaurantes.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var restaurantes = request.response;
        var infoRestaurantes = restaurantes*/

    for (i = 0; i < infoRestaurantes.length; i++) {
        auxHref = infoRestaurantes[i][0]
        auxImg = infoRestaurantes[i][3]
        auxNome = infoRestaurantes[i][1]
        auxDistancia = infoRestaurantes[i][4]
        auxAvaliacao = infoRestaurantes[i][2]

        let secaoRestaurante = document.createElement("section")
        secaoRestaurante.classList.add("card")

        let divIcon = document.createElement("div")
        divIcon.classList.add("icon")
        let imgRestaurante = document.createElement("img")
        imgRestaurante.src = "../Dashboard/" + auxImg

        let titulo = document.createElement("h3")
        titulo.innerHTML = auxNome

        let descricao = document.createElement("a")
        descricao.classList.add("descricao")


        let iconAvaliacao = document.createElement("i")
        iconAvaliacao.classList.add("fas")
        iconAvaliacao.classList.add("fa-star")

        let iconDistancia = document.createElement("i")
        iconDistancia.classList.add("fas")
        iconDistancia.classList.add("fa-map-marker-alt")


        let botaoRest = document.createElement("a")

        botaoRest.href = auxHref
        botaoRest.classList.add("button")
        botaoRest.innerText = "Acessar Restaurante"

        descricao.appendChild(iconAvaliacao)
        descricao.innerHTML += auxAvaliacao
        descricao.appendChild(iconDistancia)
        descricao.innerHTML += auxDistancia
        divIcon.appendChild(imgRestaurante)


        secaoRestaurante.appendChild(divIcon)
        secaoRestaurante.appendChild(titulo)
        secaoRestaurante.appendChild(descricao)
        secaoRestaurante.appendChild(botaoRest)

        cardsRestaurantes.appendChild(secaoRestaurante)
    }

    console.log("MARMITAS", marmitas)
    console.log("tamanho", marmitas.length)
    for (i = 0; i < marmitas.length; i++) {
        var containerMarmitas = document.querySelector("#container-restaurantes")

        var divRestaurante = document.createElement("div")
        divRestaurante.classList.add("esconde")
        divRestaurante.id = marmitas[i][0]

        var nomeRest = document.createElement("h1")
        nomeRest.classList.add("titulo")
        nomeRest.innerHTML = marmitas[i][1]
        divRestaurante.appendChild(nomeRest)

        containerMarmitas.appendChild(divRestaurante)

        //inserindo marmitas
        for (j = 0; j < marmitas[i][2].length; j++) {

            console.log(marmitas[i][2])


            var mainMarmitas = document.createElement("main")
            mainMarmitas.classList.add("cards")
            var sectionCard = document.createElement("section")
            sectionCard.classList.add("card")

            mainMarmitas.appendChild(sectionCard)

            var iconMarmita = document.createElement("div")
            iconMarmita.classList.add("icon")

            var imgMarmita = document.createElement("img")
            imgMarmita.src = "../Dashboard/marmitas/m1.jpg"

            var nomeMarmita = document.createElement("h3")
            nomeMarmita.innerHTML = marmitas[i][2][j][1]
            iconMarmita.appendChild(imgMarmita)
            sectionCard.appendChild(iconMarmita)
            sectionCard.appendChild(nomeMarmita)


            var descricaoMarmita = document.createElement("a")
            descricaoMarmita.classList.add("descricao")

            var descricaoPed = document.createElement("span")
            descricaoPed.classList.add("descricao-pedido")
            descricaoPed.innerHTML = marmitas[i][2][j][4]
            descricaoPreco = document.createElement("span")
            descricaoPed.innerHTML = marmitas[i][2][j][3]

            descricaoMarmita.appendChild(descricaoPed)
            descricaoMarmita.appendChild(descricaoPreco)


            iconMarmita.appendChild(imgMarmita)
            sectionCard.appendChild(iconMarmita)
            sectionCard.appendChild(nomeMarmita)
            sectionCard.appendChild(descricaoMarmita)

            var addCarrinho = document.createElement("a")
            addCarrinho.href = marmitas[i][2][j][0]
            addCarrinho.classList.add("button")
            addCarrinho.innerHTML = "Adicionar ao carrinho"



            //spandescricao.appendChild(descricaoMarmita)
            //sectionCard.appendChild(spandescricao)
            sectionCard.appendChild(addCarrinho)
            mainMarmitas.appendChild(sectionCard)
            divRestaurante.appendChild(mainMarmitas)
        }

    }
    resto(infoRestaurantes, marmitas)
}
var ativo = null //verifica se tem menu ativo
var ativoAgora = null //verifica se tem restaurante ativo)
function resto(infoRestaurantes, marmitas) {

    console.log("2")
        //var ativo = null //verifica se tem menu ativo
        //var ativoAgora = null //verifica se tem restaurante ativo)

    let btn = document.querySelector("#btn")
    let botoesRestaurante = document.querySelectorAll(".button")

    let checkout = document.querySelector(".checkout")


    let container = document.querySelector(".container")

    let sidebar = document.querySelector(".sidebar")
    let palavras = document.querySelector(".nav_list_grid")
    let logo = document.querySelector(".logo")
    let nav_logo = document.querySelector(".nav_logo")

    let mostramenu = document.querySelectorAll(".nav_link")




    btn.onclick = function() {
        sidebar.classList.toggle("active")

        btn.classList.toggle("reduzido")
        nav_logo.classList.toggle("transicao")

        if (palavras.classList.contains("hidden") == true) {
            setTimeout(function() {
                logo.classList.toggle("hidden")
                palavras.classList.toggle("hidden")
            }, 205)
        } else {
            logo.classList.toggle("hidden")
            palavras.classList.toggle("hidden")
        }


        container.classList.toggle("vaiPraDireita")
    }


    function logOut() {
        window.location.href = "../Dashboard/index.html";
        console.log("logout")
    }





    mostramenu.forEach(item => {

        var id = item.getAttribute("href")
        var secao_para_mostrar = document.getElementById(id)

        if (secao_para_mostrar.className != 'esconde') {
            ativo = secao_para_mostrar
        }

        item.onclick = function() {
            console.log("MOSTRA MENU")
            console.log("Ativo=", ativo)
            console.log("Ativo agora=", ativoAgora)
            if (ativo != null) {
                id = item.getAttribute("href")
                secao_para_mostrar = document.getElementById(id)
                ativo.classList.add("esconde")
                secao_para_mostrar.classList.remove("esconde")
                ativo = secao_para_mostrar
            }

            if (ativoAgora != null) {
                ativoAgora.classList.add("esconde")
            }

        }
    });
    /*Abre a tela do restaurante que voce escolheu ou  do checkout*/

    var flag = 0


    botoesRestaurante.forEach(item => {


        console.log(item)
        var id = item.getAttribute("href")
        var secao_para_mostrar = document.getElementById(id)

        item.onclick = function() {
            //botao do restaurante
            console.log("teste")
            if (item.innerHTML == "Acessar Restaurante") {

                id = item.getAttribute("href")
                secao_para_mostrar = document.getElementById(id)

                if (secao_para_mostrar == ativoAgora && flag == 0) {
                    secao_para_mostrar.classList.add("esconde")
                    flag = 1
                } else {
                    if (ativoAgora == null) {
                        ativoAgora = secao_para_mostrar
                    }

                    ativoAgora.classList.add("esconde")
                    ativoAgora = secao_para_mostrar
                    ativoAgora.classList.remove("esconde")


                    ativo.classList.add("esconde")
                    flag = 0
                }

                //botao do pedido
            } else if (item.innerHTML == "Ir para o pagamento") {
                ativoAgora = document.getElementById("checkout")
                console.log("ativoagora2=", ativoAgora)
                console.log("chekcout")

                checkout.classList.remove("esconde")
                setInfoCheckout(id, marmitas)

            } else {
                if (ativoAgora != null) {
                    ativoAgora.classList.add("esconde")
                        //ativoAgora = secao_para_mostrar
                    console.log("ativoagora2=", ativoAgora)

                    if (id == '#opcao1') {
                        ativoAgora = document.getElementById("personalizar")

                        montaMarmita()
                    } else {
                        fazPedido(id, marmitas)
                        ativoAgora = document.getElementById("checkout")
                        console.log(id)

                        checkout.classList.remove("esconde")
                        setInfoCheckout(id, marmitas)
                    }
                }
            }
        }
    });


}
const personalizar = document.querySelector(".personalizar")
let listaPersonalizada = []

function pedidoPersonalizado() {


    ativoAgora = document.getElementById("checkout")
    personalizar.classList.add("esconde")
    checkout.classList.remove("esconde")

    var descricaPedido = document.querySelector(".descricao-pedido-checkout")
    var precoPedido = document.querySelector(".preco-pedido-checkout")
    var textoPedido = ""

    let textoSeparado = ""
    let somaPrecos = 0

    for (i = 0; i < listaPersonalizada.length; i++) {
        textoSeparado = listaPersonalizada[i].split(',')
        textoPedido += textoSeparado[0]

        if (i < listaPersonalizada.length - 1)
            textoPedido += ", "

        somaPrecos += parseInt(textoSeparado[1])

    }

    descricaPedido.innerHTML = textoPedido
    precoPedido.innerHTML = "R$" + somaPrecos



    let popup = document.getElementById("popupPedido")
    popup.classList.remove("hidden")

    //addLocalPedido(pedido)

    const listaPedidos = document.querySelector(".carrinho")

    var divPedido = document.createElement("div");
    divPedido.classList.add("campo-pedido")

    var closeButton = document.createElement("a")
    closeButton.classList.add("excluirPedido")


    simboloX = document.createElement("i")
    simboloX.classList.add("fas")
    simboloX.classList.add("fa-times")

    closeButton.appendChild(simboloX)

    var nomePedido = document.createElement("p")
    var descricaoPedido = document.createElement("p")
    var precoPedido = document.createElement("p")
    var botaoPedido = document.createElement("a")
    botaoPedido.href = "#checkout"
    botaoPedido.classList.add("pedido-button")


    nomePedido.innerHTML = "Personalizado"
    descricaoPedido.innerHTML = textoPedido
    precoPedido.innerHTML = somaPrecos
    botaoPedido.innerHTML = 'Ir para o pagamento'

    divPedido.appendChild(closeButton)
    divPedido.appendChild(nomePedido)
    divPedido.appendChild(descricaoPedido)
    divPedido.appendChild(precoPedido)
    divPedido.appendChild(botaoPedido)
    console.log(divPedido)
    console.log(listaPedidos)
    listaPedidos.appendChild(divPedido)

    console.log("DEBUG")
    console.log(ativo)
    console.log(ativoAgora)

    closeButton.addEventListener('click', () => {
        console.log("okodkoas")
        pedido = divPedido
        pedido.remove()
    })
    botoesCarrinho = document.querySelectorAll(".pedido-button")
    botoesCarrinho.forEach(item => {
        var id = item.getAttribute("href")
        var secao_para_mostrar = document.getElementById(id)

        item.onclick = function() {
            ativoAgora = document.getElementById("checkout")
            ativoAgora.classList.remove("esconde")
            var carrinho = document.getElementById("#meusPedidos")
            carrinho.classList.add("esconde")

            //checkout.classList.remove("esconde")
            setInfoCheckout(id, marmitas)

        }
    });


}


function montaMarmita() {
    console.log("monta marmita")

    personalizar.classList.remove("esconde")
}
/*Personalizar*/
const addButton = document.querySelector(".add-button")
const pedidosList = document.querySelector(".pedidos-list")
pedidosList.addEventListener("click", deleteCheck);
localStorage.clear();

function addTodo() {
    console.log("addTodo")
    const alimentoDiv = document.createElement('div')
    alimentoDiv.classList.add("alimento")
        //Create LI
    const novoAlimento = document.createElement('li')

    //colocando o texto
    const selecionado = document.querySelector('.opcoes-personalizadao')
    novoAlimento.innerText = selecionado.value

    novoAlimento.classList.add('alimento-item')
    alimentoDiv.appendChild(novoAlimento)

    //Trash Button
    const trashButton = document.createElement("button")
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add("trash-btn")
    alimentoDiv.appendChild(trashButton)

    pedidosList.appendChild(alimentoDiv)
    listaPersonalizada.push(novoAlimento.innerText)
    console.log(listaPersonalizada)
}

function arrayRemove(arr, value) {

    index = 0
    for (i = 0; i < arr.length; i++) {
        if (arr[i] == value)
            return index
        index += 1
    }
    return index
}

function deleteCheck(e) {
    console.log("delete")
    const item = e.target;

    let aux = item.parentElement.parentElement
    console.log(aux)
    console.log(aux.children)
    aux2 = aux.querySelector(".alimento-item")
    texto = aux2.innerHTML

    console.log(texto)
    console.log(listaPersonalizada)
    index = arrayRemove(listaPersonalizada, texto);
    listaPersonalizada.splice(index, 1)
    console.log(listaPersonalizada)

    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");

        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

}

function setInfoCheckout(idPedido, marmitas) {
    var descricaPedido = document.querySelector(".descricao-pedido-checkout")
    var precoPedido = document.querySelector(".preco-pedido-checkout")

    //descricaPedido.innerHTML = "batata"
    //precoPedido.innerHTML = "12"

    let marmitaBD = ''

    for (i = 0; i < marmitas.length; i++) {
        console.log(marmitas[i])

        for (j = 0; j < marmitas[i][2].length; j++) {
            if (idPedido == marmitas[i][2][j][0]) {
                marmitaBD = marmitas[i][2][j]
            }
        }
    }
    console.log(marmitaBD)
    pedido = [marmitaBD[3], marmitaBD[2]]

    console.log("Pedido realizado")

    let popup = document.getElementById("popupPedido")
    popup.classList.remove("hidden")

    addLocalPedido(pedido)

    const listaPedidos = document.querySelector(".carrinho")

    var divPedido = document.createElement("div");
    divPedido.classList.add("campo-pedido")

    var closeButton = document.createElement("a")
    closeButton.classList.add("excluirPedido")


    simboloX = document.createElement("i")
    simboloX.classList.add("fas")
    simboloX.classList.add("fa-times")

    closeButton.appendChild(simboloX)

    var nomePedido = document.createElement("p")
    var descricaoPedido = document.createElement("p")
    var precoPedido = document.createElement("p")
    var botaoPedido = document.createElement("a")
    botaoPedido.href = "#checkout"
    botaoPedido.classList.add("pedido-button")

    nomePedido.innerHTML = marmitaBD[1]
    descricaoPedido.innerHTML = marmitaBD[3]
    precoPedido.innerHTML = marmitaBD[2]
    botaoPedido.innerHTML = 'Ir para o pagamento'

    divPedido.appendChild(closeButton)
    divPedido.appendChild(nomePedido)
    divPedido.appendChild(descricaoPedido)
    divPedido.appendChild(precoPedido)
    divPedido.appendChild(botaoPedido)
    console.log(divPedido)
    console.log(listaPedidos)
    listaPedidos.appendChild(divPedido)

    console.log("DEBUG")
    console.log(ativo)
    console.log(ativoAgora)

    closeButton.addEventListener('click', () => {
        console.log("okodkoas")
        pedido = divPedido
        pedido.remove()
    })
    botoesCarrinho = document.querySelectorAll(".pedido-button")
    botoesCarrinho.forEach(item => {
        var id = item.getAttribute("href")
        var secao_para_mostrar = document.getElementById(id)

        item.onclick = function() {
            ativoAgora = document.getElementById("checkout")
            ativoAgora.classList.remove("esconde")
            var carrinho = document.getElementById("#meusPedidos")
            carrinho.classList.add("esconde")

            //checkout.classList.remove("esconde")
            //setInfoCheckout(item, marmitas)

        }
    });


}


function fazPedido(idPedido, marmitas) {

    let marmitaBD = ''

    for (i = 0; i < marmitas.length; i++) {
        console.log(marmitas[i])

        for (j = 0; j < marmitas[i][2].length; j++) {
            if (idPedido == marmitas[i][2][j][0]) {
                marmitaBD = marmitas[i][2][j]
            }
        }
    }
    console.log("Pedido realizado")

    let popup = document.getElementById("popupPedido")
    popup.classList.remove("hidden")

    //addLocalPedido(pedido)

    const listaPedidos = document.querySelector(".carrinho")

    var divPedido = document.createElement("div");
    divPedido.classList.add("campo-pedido")

    var closeButton = document.createElement("a")
    closeButton.classList.add("excluirPedido")


    simboloX = document.createElement("i")
    simboloX.classList.add("fas")
    simboloX.classList.add("fa-times")

    closeButton.appendChild(simboloX)

    var nomePedido = document.createElement("p")
    var descricaoPedido = document.createElement("p")
    var precoPedido = document.createElement("p")
    var botaoPedido = document.createElement("a")
    botaoPedido.href = "#checkout"
    botaoPedido.classList.add("pedido-button")



    nomePedido.innerHTML = marmitaBD[1]
    descricaoPedido.innerHTML = marmitaBD[3]
    precoPedido.innerHTML = marmitaBD[2]
    botaoPedido.innerHTML = 'Ir para o pagamento'

    divPedido.appendChild(closeButton)
    divPedido.appendChild(nomePedido)
    divPedido.appendChild(descricaoPedido)
    divPedido.appendChild(precoPedido)
    divPedido.appendChild(botaoPedido)
    console.log(divPedido)
    console.log(listaPedidos)
    listaPedidos.appendChild(divPedido)

    console.log("DEBUG")
    console.log(ativo)
    console.log(ativoAgora)

    closeButton.addEventListener('click', () => {
        console.log("okodkoas")
        pedido = divPedido
        pedido.remove()
    })
    botoesCarrinho = document.querySelectorAll(".pedido-button")
    botoesCarrinho.forEach(item => {
        var id = item.getAttribute("href")
        var secao_para_mostrar = document.getElementById(id)

        item.onclick = function() {
            ativoAgora = document.getElementById("checkout")
            ativoAgora.classList.remove("esconde")
            var carrinho = document.getElementById("#meusPedidos")
            carrinho.classList.add("esconde")

            //checkout.classList.remove("esconde")
            setInfoCheckout(item)

        }
    });
}

function fazCompra() {

    pedidosCarrinho = document.querySelectorAll("campo-pedido")

    pedidosCarrinho.forEach(item => {
        item.remove()
    })

    console.log("Pedido realizado")

    let popup = document.getElementById("popupCompra")
    popup.classList.remove("hidden")
    const close = document.querySelectorAll('.close')
    const pedidoPopup = document.getElementById("popupPedido")

    close.forEach(c => {
        c.addEventListener('click', () => {
            pedidoPopup.classList.add('hidden')
        })
    })


}





function addLocalPedido(pedido) {
    let pedidos;
    if (localStorage.getItem('pedidos') === null) {
        pedidos = [];
    } else {
        pedidos = JSON.parse(localStorage.getItem('pedidos'));
    }
    pedidos.push(pedido);
    localStorage.setItem('pedidos', JSON.stringify(pedidos));
}




function removeLocalPedido(pedido) {
    let pedidos;
    if (localStorage.getItem("pedidos") === null) {
        pedidos = [];
    } else {
        pedidos = JSON.parse(localStorage.getItem("pedidos"));
    }
    const pedidoIndex = pedido.children[0].innerText;
    pedidos.splice(pedidos.indexOf(pedidoIndex), 1);
    localStorage.setItem("pedidos", JSON.stringify(pedidos));
}

const close = document.querySelectorAll('.close')
const pedidoPopup = document.getElementById("popupPedido")

close.forEach(c => {
    c.addEventListener('click', () => {
        pedidoPopup.classList.add('hidden')
    })
})