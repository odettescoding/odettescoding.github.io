//CHANGER UN IMAGE A UN AUTRE
let myImage = document.querySelector('img');

myImage.addEventListener('click', function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'image/techno.jpg') {
      myImage.setAttribute('src', 'image/firefox2.PNG');
    } else {
      myImage.setAttribute('src', 'image/techno.jpg');
    }
});
// UTILISATION  DE CONDITION
let iceCream = 'chocolat';
if (iceCream === 'chocolat') {
  alert("J'adore la glace au chocolat !");
} else {
  alert("Ooooh, mais j'aurais préféré au chocolat.");
}
// UTILISATION DE FONCTION AFFICHER SUR UN CONSOLE

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }
  
 console.log( multiply(4, 7));
 console.log( multiply(20, 20));
 console.log( multiply(0.5, 3));
 document.querySelector('h5').addEventListener('click', function() {
    alert('Aïe, arrêtez de cliquer !!');
});
  //UTILISATION DE BOUTON CLICK POUR PERSONALISER LE MESSAGE D'ACCEUIL
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Veuillez saisir votre nom.');
    localStorage.setItem('nom', myName);
    myHeading.textContent = 'Mozilla est cool, ' + myName;
  }
  if (!localStorage.getItem('nom')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('nom');
    myHeading.textContent = 'Mozilla est cool, ' + storedName;
  }