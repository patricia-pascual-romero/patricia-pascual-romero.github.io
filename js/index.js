

/*
fetch('./components/header.html') 
.then(response => response.text())
.then(data => {
    document.querySelector('header').innerHTML = data; 
})
*/







// SECCIÓN FAQS (8º Bloque) - PÁGINA HOME 


document.addEventListener('DOMContentLoaded', function () {

    // Variable local (explicar)
    let desplegableItems = document.querySelectorAll('.desplegable-items');
  
    // Pasa sobre cada elemento 'desplegable-items' uno por uno (por eso se utiliza "forEach", para pasar por cada uno)
    desplegableItems.forEach(function (item) {
      
      item.addEventListener('click', function () { // Agrega un event listener para el clic en cada elemento  
        this.classList.toggle('active'); // Alterna la clase 'active' en el elemento clicado
      });
    });
});
  


function toggleIcon(iconContainer) {
    let faqItem = iconContainer.closest('.desplegable-items');
    faqItem.classList.toggle('active');
  
    // Alternar íconos dentro del contenedor de la pregunta
    let plusIcon = faqItem.querySelector('.plus-icon');
    let minusIcon = faqItem.querySelector('.minus-icon');
    
    plusIcon.classList.toggle('active');
    minusIcon.classList.toggle('active');
  }
  





//Botón Menú desplegable - Versión móvil y tablet MAIN HOME

let menu = document.querySelector("#popup-ov-menu");

function popup() {
    menu.classList.toggle("active"); 
}
