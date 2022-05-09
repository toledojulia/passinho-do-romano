
const selecioneMetodo = document.querySelector('#selecione') 
const ocultarIncremento = document.querySelector('#ocultarIncremento') 
const code = document.querySelector('#codificar') 
const decode = document.querySelector('#decodificar') 
const textoUsuario = document.querySelector('#escrever');  
const resultadoTexto = document.getElementById('resultado');
const button = document.querySelector('#button') 


selecioneMetodo.addEventListener("change", function (e) {        
    const metodoSelecionado = e.target.value;
  
    if (metodoSelecionado == "base64") {
        ocultarIncremento.style.display = "none";
        button.setAttribute("onclick", "base64()") 
    } else {
        ocultarIncremento.style.display = "block";
        button.setAttribute("onclick", "caesar()")   
    }
  });


codificar.addEventListener("click", function () {
    button.innerText = "Codificar 🌌";               
  });
  
 decodificar.addEventListener("click", function () {
    button.innerText = "Decodificar 🌠";             
  });

function base64(){
  const input = textoUsuario.value
  const escolha = code.checked
  resultadoTexto.value = base64Logic(input, escolha);
}

function base64Logic(input, escolha){
  return (escolha)? btoa(input) : atob(input);
}

function caesar()  {
  const input = textoUsuario.value.split("");
  const escolha = code.checked
  const numero =  parseInt(ocultarIncremento.value);
  if (escolha){
    resultadoTexto.value = caesarCodificando(input, numero);
  } 
  else {
    resultadoTexto.value = caesarDecodificando(input, numero);
  }
}

function caesarCodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return String.fromCharCode(((code - 65 + key) % 26) + 65)
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 + key) % 26) + 97)
      } else return c
  }).join('')
}

function caesarDecodificando(arr, key){
  return arr.map((c)=>{
      let code = c.charCodeAt();
      if(code >= 65 && code <= 90){
          return (code-65-key < 0)?String.fromCharCode(((code - 65 - key + 26)%26)+65):String.fromCharCode(((code - 65 - key)%26)+65) 
      } else if(code >= 97 && code <= 122){
          return String.fromCharCode(((code - 97 - key + 26) % 26) + 97)
      } else return c
  }).join('')
}