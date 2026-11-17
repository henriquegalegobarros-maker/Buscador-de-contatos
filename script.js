const contacts = [
    { name: "Henrique", number: "67999999999" },
    { name: "Maria", number: "67988888888" },
    { name: "João", number: "67977777777" },
    { name: "Carlos", number: "67996655443" },
    { name: "Ana", number: "67995544332" },
    { name: "Pedro", number: "67994433221" },
    { name: "Juliana", number: "67993322110" },
    { name: "Lucas", number: "67992211009" },
    { name: "Fernanda", number: "67991100998" },
    { name: "Rafael", number: "67990099887" },
    { name: "Camila", number: "67998877665" },
    { name: "Gabriel", number: "67997766554" },
    { name: "Mariana", number: "67996655432" },
    { name: "Bruno", number: "67995544321" },
    { name: "Beatriz", number: "67994433210" },
    { name: "Felipe", number: "67993322109" },
    { name: "Larissa", number: "67992211098" },
    { name: "Thiago", number: "67991100987" },
    { name: "Amanda", number: "67990099876" },
    { name: "Ricardo", number: "67998877654" }
]

const input = document.querySelector("input")
const buttonProcurar = document.querySelector(".search-button")
const resultado = document.querySelector(".resultado")
const formulario = document.querySelector(".formulario")
const inputNome = document.querySelector("#nome")
const inputNumero = document.querySelector("#numero")

const buttonAdicionar = document.querySelector(".add-button")
const buttonSalvar = document.querySelector(".salvar-button")
const buttonFechar = document.querySelector(".fechar-button")
const buttonLimpar = document.querySelector(".limpar-button")

function procurarContato() {

    const valorDigitado = input.value.toLowerCase()

    const contatoEncontrado = contacts.find(contact =>
        contact.name.toLowerCase() === valorDigitado ||
        contact.number === valorDigitado
    )

    if (contatoEncontrado) {

        resultado.innerHTML = `
            <h3>${contatoEncontrado.name}</h3>
            <p>${contatoEncontrado.number}</p>
        `

    } else {

        resultado.innerHTML = "<p>Contato não encontrado!</p>"

    }
}

buttonProcurar.addEventListener("click", procurarContato)

// Abrir formulário
buttonAdicionar.addEventListener("click", function() {
    formulario.style.display = "flex"
})

// Fechar formulário
buttonFechar.addEventListener("click", function() {
    formulario.style.display = "none"
})

// Salvar contato
buttonSalvar.addEventListener("click", function() {

    const nome = inputNome.value
    const numero = inputNumero.value

    if (nome === "" || numero === "") {
        alert("Preencha todos os campos!")
        return
    }

    contacts.push({
        name: nome,
        number: numero
    })

    alert("Contato adicionado com sucesso!")

    inputNome.value = ""
    inputNumero.value = ""

    formulario.style.display = "none"
})

buttonLimpar.addEventListener("click", function() {
    input.value = ""
    resultado.innerHTML = ""
})