


```md
# 📊 Projet : Dashboard de gestion des stagiaires

Un tableau de bord interactif affichant diverses statistiques sous forme de graphiques et de tableaux dynamiques.

---

## 🔧 Modifications et améliorations apportées

### 📈 Graphique en anneaux (Doughnut Chart) - Stagiaires par genre

✅ **Ajout d'un graphique en anneaux à deux niveaux** :
   - **Anneau extérieur (bleu) ➝** Stagiaires masculins 👨‍🎓  
   - **Anneau intérieur (orange) ➝** Stagiaires féminins 👩‍🎓  

✅ **Autres améliorations** :
   - Ajout d'une légende personnalisée avec couleurs correctes 🎨  
   - Correction du centrage du graphique ⚖️  
   - Ajout d'un icône au centre du doughnut 🎯  

---

### 🎯 Graphique polaire (Polar Chart) - Dossiers par classe

✅ **Intégration d'un graphique de type polaire** 📊  
✅ **Représentation des dossiers traités selon les différentes classes** 🏫  
✅ **Personnalisation des couleurs et des animations** 🎨  

---

## 📊 Tableau des stagiaires et état des dossiers

✅ **Ajout d'un tableau interactif avec Bootstrap** 🖥️  
✅ **Icônes ajoutées aux lignes pour indiquer les statuts** 📌  

### 🎨 **Personnalisation des boutons d’action** :
- 🟠 **En cours** ➝ Bouton bleu `btn-outline-primary`  
- 🟢 **Validé** ➝ Bouton vert `btn-outline-success`  
- 🔴 **Refusé** ➝ Bouton rouge `btn-outline-danger`  

✅ **Autres améliorations** :
   - Centrage vertical des cellules pour un meilleur alignement 🔄  
   - Suppression de l’espace à droite de la colonne **"Action"** 📏  

---



# Rapport de travail - [10.03]

# Modifications et Améliorations du Tableau des Intervenants

## Ajout de la Classe 2-B
- Intégration de 10 nouveaux intervenants appartenant à la classe 2-B.
- Affichage des intervenants par ordre alphabétique.

## Amélioration de l'Affichage du Tableau
- Fusion des en-têtes du tableau (`<th>`) pour une meilleure lisibilité.
- Modification de l'en-tête de la colonne "Action" pour occuper deux colonnes (`colspan="2"`).
- Ajout d'une colonne pour afficher les professeurs.

## Ajout d'un Deuxième Bouton d'Action
- Chaque ligne du tableau possède désormais deux boutons d'action :
  - Icône "visible" pour afficher les détails de l'intervenant.
  - Icône "poubelle" pour supprimer l'intervenant.

## Alignement d'un Bouton sur la Droite
- Ajout d'un bouton "Primary" avec la classe `.btn-outline-primary`.
- Alignement à droite du bouton via `text-align: right;` sur le conteneur `.btnNewDossier`.
- Largeur du conteneur fixée à `width: 100%` pour garantir un bon positionnement.

## Structure Mise à Jour du Tableau
- Utilisation des classes Bootstrap (`table-striped`, `table-hover`, etc.).
- Maintien de la cohérence visuelle avec les nouvelles lignes ajoutées.

## Résumé du Projet et Défis Rencontrés

### Problèmes et Solutions

1. **Problèmes de Transition et de Couleur au Survol des Cartes**  
   - Ajustement des transitions CSS et du z-index pour une meilleure superposition.

2. **Conflits avec la Balise `<a>`**  
   - Utilisation de `color: inherit;` et `text-decoration: none;` pour résoudre les conflits de style.

3. **Problèmes avec les Colonnes Bootstrap**  
   - Correction de l'imbrication des divs et vérification de l'inclusion correcte de Bootstrap.

4. **Améliorations de la Structure HTML et CSS**  
   - Optimisation de la sémantique HTML et accessibilité.

### Leçons Apprises et Recommandations
- Utilisation de l'inspecteur du navigateur pour le débogage CSS.
- Prise en compte des conflits CSS et importance de bien vérifier l'imbrication des divs.
- Tests sur plusieurs navigateurs pour assurer la compatibilité.

## Technologies Utilisées
- **HTML / CSS / Bootstrap 5**
- **JavaScript (Chart.js)**
- **Icons8** (pour les icônes du tableau)





# Rapport de travail - [18.03]

## 📌 Objectifs de la journée
- Correction de l'affichage des cases à cocher dans la section `typeLate`.
- Mise en place d'un **date picker** avec **Flatpickr** pour la sélection d'une période d'absence.
- Amélioration de l'ergonomie avec Bootstrap.
- Ajout de validations et restrictions sur les dates (exclusion des dates passées, dépendance entre la date de début et de fin).
- Test et validation de la fonctionnalité de sélection des dates.

---

## 🔧 Modifications et améliorations
### ✅ **Correction de l'affichage des cases à cocher**
- Utilisation de `display: flex; flex-wrap: wrap;` pour aligner les options côte à côte.
- Amélioration du style des labels pour une meilleure lisibilité et interaction.

### ✅ **Ajout d'un date picker avec Flatpickr**
- Intégration de **Flatpickr** pour permettre la sélection d'une plage de dates.
- Configuration pour empêcher la sélection d'une date de fin avant la date de début.
- Désactivation des dates passées.

### ✅ **Amélioration UX/UI avec Bootstrap**
- Ajout d'icônes Bootstrap pour les champs de date.
- Utilisation de `input-group` pour un rendu plus élégant.
- Ajout d'un bouton de validation pour confirmer la sélection de la période d'absence.

---

## 📂 Fichiers modifiés
- `index.html` : Ajout des champs de sélection de dates et de leurs styles.
- `style.css` : Amélioration de l'affichage des cases à cocher.
- `script.js` : Ajout des fonctionnalités Flatpickr et des validations.

---

## 🚀 Prochaines étapes
- Ajouter une gestion des erreurs côté serveur pour la validation des dates.
- Implémenter un envoi des données via **AJAX** pour une mise à jour dynamique.
- Tester sur différents navigateurs et appareils.

---

🎯 **Résumé** : Journée productive avec des améliorations UX/UI et de nouvelles fonctionnalités pour la gestion des absences. ✅



## 🛠️ Technos et librairies utilisées

- **HTML / CSS / Bootstrap 5** 🎨  
- **JavaScript (Chart.js)** 📊  
- **Icons8** (pour les icônes dans le tableau) 🎭  
```
