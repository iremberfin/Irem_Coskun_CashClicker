// variabelen voor het spel //
let geld = 0;
let waardePerKlik = 1;
let upgradeGekocht = false;

// html elementen pakken//
const geldVeld = document.querySelector("#geld");
const cashAfbeelding = document.querySelector("#cashKnop");
const upgradeButton = document.querySelector("#upgradeButton");
const resetButton = document.querySelector("#resetButton");
const melding = document.querySelector("#melding");
const cashSound = document.querySelector("#cashSound");

function updateGeld() {
  geldVeld.textContent = "Geld: €" + geld;
}

function verdienGeld() {
  geld = geld + waardePerKlik; //geld bijwerken
  updateGeld();
  // geluid afspelen //
  cashSound.currentTime = 0; //zorgt dat het geluid telkens helemaal opnieuw begint
  cashSound.play(); //speelt het geluid af
}

function koopUpgrade() {
  if (upgradeGekocht == false && geld >= 10) {
    geld = geld - 10;
    waardePerKlik = 2;
    upgradeGekocht = true;
    melding.textContent = "Upgrade gekocht! Je verdient nu €2 per klik.";
    upgradeButton.classList.add ("gekocht"); //alleen de stijl en niet de tekst//
  } else if (upgradeGekocht == true) {
    melding.textContent = "Je hebt deze upgrade al gekocht.";
  } else {
    melding.textContent = "Je hebt minstens €10 nodig voor deze upgrade.";
  }
  updateGeld();
}

// Reset functie //
function resetSpel() {
  geld = 0;
  waardePerKlik = 1;
  upgradeGekocht = false;
  melding.textContent = "Spel is gereset.";
  upgradeButton.classList.remove ("gekocht");
  updateGeld();
}

// Hierdoor wordt de funtie aangeroepen //
cashAfbeelding.addEventListener("click", verdienGeld);
upgradeButton.addEventListener("click", koopUpgrade);
resetButton.addEventListener("click", resetSpel);  

// 