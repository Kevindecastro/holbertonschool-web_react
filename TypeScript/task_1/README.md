Voici le fichier `README.md` **complet, propre, commenté et traduit en 
# 📘 Projet TypeScript — Tâche 1

Ce projet démontre les concepts de base de TypeScript à travers l’utilisation d’interfaces, de types de fonctions et de classes. Le code se trouve dans `task_1/js/main.ts` et est compilé à l’aide de Webpack.

---

## ✅ Résumé des Tâches

### 1. Interface `Teacher`

- Création d’une interface `Teacher` avec les propriétés suivantes :
  - `firstName` : `string` (lecture seule)
  - `lastName` : `string` (lecture seule)
  - `fullTimeEmployee` : `boolean`
  - `yearsOfExperience` : `number` (optionnelle)
  - `location` : `string`
  - Possibilité d’ajouter des propriétés supplémentaires :
    - Type de la clé : `string`
    - Type de la valeur : `any`

#### ✅ Exemple :
```ts
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};
````

---

### 2. Interface `Directors`

* Création d’une interface `Directors` qui étend l’interface `Teacher`
* Ajout de la propriété obligatoire :

  * `numberOfReports` : `number`

#### ✅ Exemple :

```ts
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
```

---

### 3. Fonction `printTeacher`

* Création d’une interface `printTeacherFunction` pour typer la fonction
* Implémentation d’une fonction `printTeacher` :

  * Prend en argument `firstName` et `lastName`
  * Retourne la première lettre du prénom suivie du nom complet : `"F. Lastname"`

#### ✅ Exemple :

```ts
console.log(printTeacher('John', 'Doe')); // J. Doe
```

---

### 4. Classe `StudentClass`

* Création de deux interfaces :

  * `StudentConstructor` pour typer le constructeur
  * `StudentClassInterface` pour décrire les méthodes de la classe
* Création d’une classe `StudentClass` avec :

  * Propriétés : `firstName`, `lastName`
  * Méthode `workOnHomework()` : retourne `"Currently working"`
  * Méthode `displayName()` : retourne le `firstName`

#### ✅ Exemple :

```ts
const student = new StudentClass('Alice', 'Smith');
console.log(student.displayName()); // Alice
console.log(student.workOnHomework()); // Currently working
```

---

## 🛠️ Instructions d’installation

1. **Installation des dépendances**

```bash
cd task_1
npm install
```

2. **Compilation du projet**

```bash
npm run build
```

3. **Vérification**
   Consultez le fichier `dist/main.js` ou ajoutez des `console.log` dans `main.ts` pour afficher le résultat.

---

## 📁 Arborescence du projet

```
task_1/
├── js/
│   └── main.ts
├── dist/
│   ├── bundle.js
│   └── index.html
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md
```
