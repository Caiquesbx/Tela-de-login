function logar(){
    var login = document.getElementById('inputUm').value;
    var senha = document.getElementById('inputDois').value;
    if (login == "" && senha == ""){
        alert('Sucesso');
        location.href = "site.html";
    }else {
        alert('Usuário ou senha incorretos');
    }

    if (login == "" && senha == ""){
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
