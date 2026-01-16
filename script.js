function campoNotvazio(){
    let campo = document.getElementById("campinho").value
    let erro = document.getElementById("erro")

    if(campo === ''){
        erro.textContent = 'o campo não pode estar vazio';
        return false;
    }
    erro.textContent = '';
    return true
}

function senhaNotvazio(){
    let senha = document.getElementById("senhazinha").value
    let erro2 = document.getElementById("erro2");

    if(senha === ''){
        erro2.textContent ='A senha precisa ser preenchida';
        return false;
    }
    erro2.textContent = '';
    return true;
}

function validarTudo() {
    if (campoNotvazio() === false) return false;
    if (senhaNotvazio() === false) return false;

    return true;
}

function toggleSenha(){
    let senhaInput = document.getElementById("senhazinha");
    let olho = document.querySelector(".olho");


    if(senhaInput.type === "password"){
        senhaInput.type = 'text';
        olho.textContent = "ocultar"
    }else{
        senhaInput.type = 'password';
        olho.textContent = "ver"
    }
}
