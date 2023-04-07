=== Excuses de dev ===

DEV : JOHAN DELMOTTE

Excuses de dev est un générateur de phrases pour faire patienter les utilisateurs.

-- Technologies utilisées -- 

 Environnement : Nodejs
 Langages : HTML, CSS, JS
 Frameworks: Express.js, bootstrap, JQuery

-- Comment installer et exécuter le projet -- 

 Pour utiliser le projet il est nécessaire d'installer Nodejs et d'ajouter Express.js comme dépendance ("npm install express").
 Pour exécuter le projet il suffit de taper la commande "node app.mjs" dans le terminal.

-- Comment utiliser le projet --

Route principale "/":
Cliquer sur le bouton "Générer une excuse" génère une excuse aléatoire. La même excuse ne ressort jamais 2 fois de suites.
Cliquer sur le bouton "Nouvelle excuse" ouvre une fenêtre modal qui permet d'ajouter une nouvelle excuse à la liste des excuses
grâce à un champ de texte et un bouton "Valider". Le clic sur le bouton "Valider" déclenchera un loader qui dure entre 1 et 5
secondes et stockera la nouvelle excuse dans le tableau des excuses.
Les excuses sont stockées dans un tableau, elles seront donc réinitialisées si l'utilisateur quitte ou actualise la page.

Route "/lost" :
La page "/lost" affiche un titre et un gif. Au bout de 5 secondes l'utilisateur est redirigé vers la page principale "/".

Route "/$http_code":
L'utilisateur peut entrer un http_code correspondatn à une excuse. Le message correspondant au http_code s'affichera à l'écran.

Les autres routes :
Une page d'erreur 404 s'affiche si l'utilisateur se dirige vers une page non définie.


-- Les tests --

Pour vérifier qu'une excuse n'est jamais générée deux fois de suite il suffit de réduire le tableau à deux éléments et de tester 
l'application.

Pour vérifier qu'une nouvelle excuse est bien enregistrer dans le tableau lors de l'ajout vous pouvez faire un "console.log()"
du tableau.

