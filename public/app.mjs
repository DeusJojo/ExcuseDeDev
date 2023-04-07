// Import des modules
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Réplication de la fonctionnalité __dirname dans un module ES
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Import du tableau data
import data from "./js/data.mjs";

/**
 * Défini le dossier racine du serveur pour servir des fichier statiques
 */
app.use(express.static(path.join(__dirname + "/")));

/**
 * Définition des routes
 */
// La route principale. Renvoie le fichier index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// La route lost. Renvoie le fichier lost.html
app.get("/lost", (req, res) => {
  res.sendFile(path.join(__dirname, "/lost.html"));
});

// Route dynamique pour les pages http_code
app.get("/:code", (req, res) => {
  // Converti le code reçu en int
  const code = parseInt(req.params.code);
  // Va chercher dans le tableau data le http_code correspondant au code reçu
  const item = data.find((element) => element.http_code === code);

  // Si un code correspond on affiche le message sinon on redirige vers la page d'erreur 404
  if (item) {
    res.send(item.message);
  } else {
    res.sendFile(path.join(__dirname, "/error404.html"));
  }
});

// Renvoie la page error404.html en cas de route inconnue
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "/error404.html"));
});

/**
 * Démarrage du serveur
 */
app.listen(3000, () => console.log("Le serveur est démarré sur le port 3000."));
