function logar(){
    var login = document.getElementById('inputUm').value;
    var senha = document.getElementById('inputDois').value;
    if (login == "caique_barbosa" && senha == "Patasso10"){
        alert('Sucesso');
        location.href = "site.html";
    }else {
        alert('Usuário ou senha incorretos');
    }

    if (login == "quintoandar" && senha == "quintoandar"){
        alert('Sucesso')
        location.href = "site.html";
    }else{}
 }

 function aoSelecionarInput (event) {
    const inputClicado = event.target
  
    function removeSelecao () {
        inputClicado.checked = false
    }
  
    inputClicado.addEventListener('click', removeSelecao, { once: true })
  }
