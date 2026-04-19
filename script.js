function cadastrar() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var idade = document.getElementById("idade").value;
    var senha = document.getElementById("senha").value;

    if (nome == "" || email == "" || idade == "" || senha == "") {
        alert("Preencha tudo!");
    } else {
        alert("Deu certo!");
    }
}