
function validateFields(){
  // pegar o valor do campo de email
  const emailValid = isEmailValid();
  document.geteElemntById('recover-password-button').disabled = !emailValid;

  const password = isPasswordValid();
  document.getElementById('login-button').disabled
  

  // verificar se o email não é vazio e se o email é válido
  // se verdadeiro, então habilitar o botão de recuperar senha
  // se falso, entao desabilitar o botao de recuperar senha

}
function isEmailValid(){
    const email = document.getElementById("email").value;

    if(!email){
      return false;
    }
    return validateEmail(email);
}

function isPasswordValid(){
    const password = document.getElementById('password').value;
    if(!password){
      return false;
    }
    return true;
}

function validateEmail(email){
  return /\S+@\S+\.\S+/.test(email);
}
