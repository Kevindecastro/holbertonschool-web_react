# 📚 Holberton TypeScript Project

Ce projet couvre les fondamentaux de TypeScript à travers une série de tâches progressives. Chaque tâche aborde un concept clé du langage et met en pratique des fonctionnalités modernes de TypeScript.

---

## 📁 Structure du projet

```
TypeScript/
├── task_0/   # Configuration initiale de TypeScript et Webpack
├── task_1/   # Interfaces, fonctions typées
├── task_2/   # Interfaces, fonctions génériques
├── task_3/   # Manipulation du DOM, CRUD.js
├── task_4/   # Namespaces, Declaration merging
├── task_5/   # Typage nominal avec Brand convention
├── ...
```

---

## ✅ Tâche par tâche

### 🧩 Task 0 - Initial setup

**Objectif :** Initialiser un environnement TypeScript avec Webpack.

* `package.json`, `tsconfig.json`, `webpack.config.js`
* Compile le TypeScript en JavaScript via Webpack
* Point d'entrée `main.ts`

---

### 🧩 Task 1 - Let’s build a Teacher interface

**Objectif :** Créer une interface `Teacher`.

* Champs requis : `firstName`, `lastName`
* Champs optionnels : `fullTimeEmployee`, `location`, `yearsOfExperience`
* Utilisation d’un `Record` pour représenter le `directors` object
* Création d’une fonction `printTeacher(firstName, lastName)` retournant `F. Lastname`

---

### 🧩 Task 2 - Extending the Teacher class

**Objectif :** Étendre l'interface `Teacher` et créer une classe.

* Interface `Directors` qui hérite de `Teacher` avec `numberOfReports`
* Interface `Student` avec `firstName`, `lastName`, `workOnHomework`, `displayName`
* Implémentation de `StudentClass` selon cette interface

---

### 🧩 Task 3 - Namespaces

**Objectif :** Utiliser un namespace pour structurer le code.

* Namespace `Student` contenant une interface et une fonction `studentName`
* Compile vers le fichier de sortie avec `webpack`

---

### 🧩 Task 4 - Namespace & Declaration merging

**Objectif :** Utiliser les **namespaces** et le **declaration merging**.

* Namespace `Subjects`

  * Interface `Teacher` + propriétés optionnelles `experienceTeachingC`, `experienceTeachingReact`, `experienceTeachingJava`
  * Classe `Subject` avec `teacher` + méthode `setTeacher()`
  * Classes `Cpp`, `Java`, `React` héritant de `Subject` avec :

    * `getRequirements()`
    * `getAvailableTeacher()` (en fonction de l'expérience)

---

### 🧩 Task 5 - Brand convention & Nominal typing

**Objectif :** Simuler un typage nominal à l’aide de la Brand convention.

* Interfaces `MajorCredits` et `MinorCredits` avec un champ `_brand`
* Fonctions `sumMajorCredits()` et `sumMinorCredits()` qui additionnent des crédits du même type

---

### 🧩 Task 6 à 9

Ces tâches sont principalement des extensions et regroupements de logique autour des namespaces, des types personnalisés, de la déclaration ambiante (`.d.ts`) et de l'import de fichiers `.js`.

* Déclaration de namespace global dans des `.d.ts`
* Merging d’interfaces
* Utilisation de types pour contraindre les signatures des fonctions

---

## 🧩 Task 10 - Brand convention & Nominal typing (suite)

Même objectif que Task 5 mais en regroupant toute la logique dans un fichier unique :

* Interfaces `MajorCredits`, `MinorCredits`
* Fonctions `sumMajorCredits`, `sumMinorCredits`

---

## ⚙️ Build & Execution

```bash
# Installer les dépendances
npm install

# Compiler les fichiers TypeScript
npm run build

# Ouvrir le fichier dist/index.html (si défini) pour voir le résultat
```

---
