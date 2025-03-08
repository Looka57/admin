


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

# Modifications et Améliorations du Tableau des Intervenants

## 1. Ajout de la Classe 2-B
- **10 nouveaux intervenants** ont été ajoutés, appartenant à la classe **2-B**.
- Les intervenants sont affichés **par ordre alphabétique**.

## 2. Amélioration de l'Affichage du Tableau
- Fusion des **en-têtes du tableau (`<th>`)** pour une meilleure lisibilité.
- Modification de l'en-tête de la colonne **"Action"** afin qu'il occupe **deux colonnes** avec `colspan="2"`.
- **Nouvelle colonne ajoutée** pour afficher les **professeurs**.

## 3. Ajout d'un Deuxième Bouton d'Action
- Chaque ligne du tableau possède désormais **deux boutons d'action** dans la colonne Action :
  - **Bouton 1** : Icône "visible" pour afficher les détails de l'intervenant.
  - **Bouton 2** : Icône "poubelle" pour supprimer l'intervenant.

## 4. Alignement d'un Bouton sur la Droite
- Un bouton **"Primary"** a été ajouté avec la classe `.btn-outline-primary`.
- Le bouton est aligné à droite grâce aux propriétés suivantes :
  - Le conteneur `.btnNewDossier` utilise `text-align: right;`.
  - La largeur du conteneur est définie à `width: 100%` pour garantir un bon positionnement.

## 5. Structure Mise à Jour du Tableau
- Le tableau est toujours structuré avec des **classes Bootstrap** telles que `table-striped`, `table-hover`, etc.
- Les nouvelles lignes ajoutées respectent le format et le design existants, garantissant ainsi une cohérence visuelle.

---

Ces améliorations rendent le tableau **plus lisible, ergonomique et fonctionnel**, avec une meilleure gestion des classes et des actions possibles. 🚀

# Résumé du Projet et Défis Rencontrés

Ce projet a consisté à développer une interface web avec des cartes de présentation d'étudiants et une section d'administration, en utilisant HTML, CSS et Bootstrap. Durant le développement, plusieurs défis ont été rencontrés et résolus :

## Défis Rencontrés et Solutions Apportées

1.  **Problèmes de Transition et de Couleur au Survol des Cartes :**
    * Au départ, les transitions et les couleurs de fond des cartes ne fonctionnaient pas comme prévu lors du survol.
    * Le problème a été résolu en ajustant les transitions CSS, en s'assurant que les couleurs de fond au survol alternaient correctement, et en modifiant le z-index des pseudo-éléments pour qu'ils ne masquent pas le texte.

2.  **Conflits avec la Balise `<a>` :**
    * La balise `<a>` a causé des conflits avec les styles des cartes, empêchant l'effet de couleur alternée.
    * Les solutions incluent l'utilisation de `color: inherit;` et `text-decoration: none;` pour éviter l'héritage des styles de lien, l'application des styles de couleur alternée aux éléments parents, et la réorganisation du HTML si necessaire.

3.  **Problèmes avec les Colonnes Bootstrap :**
    * Les colonnes Bootstrap (`col-lg-3` et `col-lg-9`) ne s'affichaient pas correctement.
    * Les causes possibles incluent des conteneurs manquants ou incorrects, des conflits CSS, des erreurs dans l'inclusion de Bootstrap, et des problèmes de cache du navigateur.
    * Les solutions ont été de vérifier l'intégration de bootstrap, de vérifier l'imbrication des div, et de vérifier qu'il n'y avait pas de conflits css.

4.  **Améliorations de la Structure HTML et CSS :**
    * Des suggestions ont été faites pour améliorer la sémantique HTML, utiliser des classes CSS personnalisées, organiser les informations de manière plus cohérente, et améliorer l'accessibilité.
    * Des exemples de code HTML et CSS améliorés ont été fournis pour illustrer ces suggestions.

## Leçons Apprises et Recommandations

* L'importance de l'inspecteur du navigateur pour le débogage CSS.
* La gestion des conflits CSS, en particulier avec les styles par défaut des éléments HTML.
* L'importance de la sémantique HTML et de l'accessibilité.
* L'importance de bien intégrer et de comprendre le fonctionnement de Bootstrap.
* L'importance de bien verifier l'imbrication des div.
* L'importance de tester sur plusieur navigateur.

## Ajouts Importants

* Il est crucial de vérifier régulièrement les conflits CSS potentiels, en particulier lors de l'utilisation de bibliothèques CSS comme Bootstrap.
* L'utilisation de l'inspecteur du navigateur est essentielle pour examiner les styles appliqués aux éléments et identifier les problèmes.
* Adopter une approche de développement itérative, en testant et en déboguant régulièrement, est crucial pour un développement efficace.


## 🛠️ Technos et librairies utilisées

- **HTML / CSS / Bootstrap 5** 🎨  
- **JavaScript (Chart.js)** 📊  
- **Icons8** (pour les icônes dans le tableau) 🎭  
```
