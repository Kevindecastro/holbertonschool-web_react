# TypeScript - Types Avancés (Tâches 5 à 7)

Ce projet explore des fonctionnalités avancées de TypeScript telles que les interfaces, l’implémentation de classes, les prédicats de type, et les types littéraux de chaînes de caractères.

## 📁 Structure du dossier

```

task\_2/
├── js/
│   └── main.ts
├── dist/
│   ├── bundle.js
│   └── index.html
├── package.json
├── tsconfig.json
├── webpack.config.js
└── README.md

````

---

## ✅ Tâche 5 - Types avancés - Partie 1

### Objectif :
Créer deux interfaces et les implémenter via les classes `Director` et `Teacher`, puis définir une fonction qui retourne une instance selon un salaire en entrée.

### Exigences :

- **`DirectorInterface`** :
  - `workFromHome()` → `Working from home`
  - `getCoffeeBreak()` → `Getting a coffee break`
  - `workDirectorTasks()` → `Getting to director tasks`

- **`TeacherInterface`** :
  - `workFromHome()` → `Cannot work from home`
  - `getCoffeeBreak()` → `Cannot have a break`
  - `workTeacherTasks()` → `Getting to work`

- Fonction **`createEmployee(salary: number | string): Director | Teacher`** :
  - Si `salary` est un nombre < 500 → retourne une nouvelle instance de `Teacher`
  - Sinon → retourne une instance de `Director`

### Exemple :
```ts
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')) // Director
````

---

## ✅ Tâche 6 - Prédicats de type et exécution des tâches

### Objectif :

Créer un prédicat de type pour identifier le type de l’employé et appeler la méthode appropriée.

### Fonctions :

* **`isDirector(employee): employee is Director`**

  * Retourne `true` si `employee` possède la méthode `workDirectorTasks`

* **`executeWork(employee: Director | Teacher): string`**

  * Appelle `workDirectorTasks` si c’est un Directeur
  * Appelle `workTeacherTasks` si c’est un Enseignant

### Exemple :

```ts
executeWork(createEmployee(200));   // Getting to work
executeWork(createEmployee(1000));  // Getting to director tasks
```

---

## ✅ Tâche 7 - Types littéraux de chaînes

### Objectif :

Créer un type littéral de chaîne de caractères et une fonction qui utilise ce type pour retourner un message contextuel.

### Type :

```ts
type Subjects = 'Math' | 'History';
```

### Fonction :

```ts
function teachClass(todayClass: Subjects): string
```

* Si `todayClass` vaut `'Math'` → retourne `'Teaching Math'`
* Si `'History'` → retourne `'Teaching History'`

### Exemple :

```ts
console.log(teachClass('Math'));     // Teaching Math
console.log(teachClass('History'));  // Teaching History
```

---

## 🚀 Instructions de compilation

Assurez-vous d’être dans le dossier `task_2`, puis exécutez :

```bash
npm install
npm run build
```

Cela compile le projet TypeScript avec Webpack. Aucune erreur TypeScript ne devrait apparaître.

---
