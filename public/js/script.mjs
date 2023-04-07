import data from "./data.mjs";

// Tableau pour stocker les excuses déjà utilisées
let usedExcuses = [];

/**
 * Choisi une excuse aléatoire dans le tableau data et vérifie qu'elle est différente de la dernière
 * @returns
 */
function getRandomExcuse() {
  let randomExcuse = null;
  do {
    // Permet de choisir une excuse aléatoire dans le tableau data
    randomExcuse = data[Math.floor(Math.random() * data.length)].message;
    // Continue de choisir une excuse aléatoire jusqu'à en trouver une qui ne sois pas la dernière utilisée
  } while (usedExcuses.includes(randomExcuse));
  return randomExcuse;
}

window.addEventListener("load", () => {
  /**
   * Animation des boutons et du titre
   */
  // Récupère les bouton et le titre
  var button = document.querySelectorAll(".hide");
  var title = document.querySelector("#title");

  // Change les class des boutons et du titre pour les animations
  setTimeout(function () {
    button[0].classList.remove("hide");
    button[0].classList.add("show");
    button[1].classList.remove("hide");
    button[1].classList.add("show");
    title.classList.add("move");
  }, 2000);

  // ////////////////////////////////////////////////////////////////////

  /**
   * Génère une excuse
   */
  let generateExcuse = document.querySelector("#generer");

  generateExcuse.addEventListener(
    "click",
    () => {
      // On récupère la div avec l'id "excuse" de la page html
      let excuseElement = document.getElementById("excuse");
      let excuse = getRandomExcuse();
      // Affiche l'excuse générée aléatoirement dans la page web
      excuseElement.innerHTML = excuse;
      // Ajouter l'excuse à la fin du tableau des excuses utilisées
      usedExcuses.push(excuse);
      if (usedExcuses.length > 1) {
        // Enlever la première excuse du tableau
        usedExcuses.shift();
      }
    },
    false
  );

  // ////////////////////////////////////////////////////////////////////

  /**
   * Ajoute une excuse personnalisée au tableau data
   */
  let addExcuseAndLoader = document.querySelector("#valider");

  addExcuseAndLoader.addEventListener(
    "click",
    () => {
      // On récupère l'input du modal
      const input = document.getElementById("excuseInput");
      // On récupère la valeur de l'input du modal
      const excuse = input.value;
      // On vérifie s'il y a une excuse
      if (excuse) {
        // On cherche le dernier élément du tableau data
        var lastElement = length - 1;
        // On ajoute les données au tableau data en reprenant son modèle
        var newExcuse = {
          // le http_code correspond au http_code du dernier élément du tableau data + 1
          http_code: data[lastElement]["http_code"] + 1,
          tag: "Custom",
          message: excuse,
        };
        // Ajoute l'excuse personnalisée à la fin du tableau
        data.push(newExcuse);
        // On vide l'input du modal
        input.value = "";

        /**
         * Le loader
         */
        // Prend un temps (en milliseconde) aléatoire entre 1 et 5 secondes
        const delay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;
        // Récupère la div loader-container
        var loader = document.querySelector(".loader-container");
        // On retire la classe hidden pour afficher le loader
        loader.classList.remove("hidden");
        // Après un temps on le cache de nouveau
        setTimeout(function () {
          loader.classList.add("hidden");
        }, delay);
      }
    },
    false
  );
});
