function enviar(){
    let usuario = document.getElementById('inputUm').value
    let senha = document.getElementById('inputDois').value
    let contato = document.querySelector("input[name='contato']:checked").value

    alert('Seu nome é: ' + usuario + '\n' + 'Vamos contatar via: ' + contato)

}