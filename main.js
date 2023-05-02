/* function copiarRespuesta(respuestaId){
    let respuesta = document.getElementById('respuestaId');
    let btnRespuesta = document.getElementsByClassName('btn__copiar');

    navigator.clipboard.writeText(respuesta.textContent);
    btnRespuesta.textContent = 'copiado';
} */

function copiarRespuesta(respuestaId) {
    const respuesta = document.getElementById(respuestaId).textContent;
    navigator.clipboard.writeText(respuesta);
    
    const botonPresionado = event.target;
    botonPresionado.textContent = 'Copiado';
    botonPresionado.style.backgroundColor = 'orange';
    botonPresionado.style.color = 'black';
    setTimeout(() => {
        botonPresionado.textContent = 'Copiar respuesta';
        botonPresionado.style.backgroundColor = 'steelblue';
        botonPresionado.style.color = 'white';
      }, 2000);
  }