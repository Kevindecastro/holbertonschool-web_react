## 📁 Tâche 4 — Namespace & Declaration Merging

### 📌 Description

Cette tâche met en œuvre les **namespaces TypeScript**, le **declaration merging** et l'**héritage de classes** pour organiser des matières scolaires et des professeurs.

### 📁 Arborescence

```
task_4/
├── js/
│   ├── main.ts
│   └── subjects/
│       ├── Cpp.ts
│       ├── Java.ts
│       ├── React.ts
│       ├── Subject.ts
│       └── Teacher.ts
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### ✅ Fonctionnalités

* Namespace `Subjects` contenant :

  * Interface `Teacher` avec `firstName`, `lastName`, et des propriétés optionnelles comme `experienceTeachingC`, `experienceTeachingReact`, etc.
  * Classe `Subject` avec un attribut `teacher` et un setter `setTeacher()`.
  * Classes `Cpp`, `Java`, `React` héritant de `Subject`, avec :

    * Méthode `getRequirements()` retournant les prérequis du cours.
    * Méthode `getAvailableTeacher()` qui retourne l'enseignant disponible selon son expérience.

### 🧪 Test

Lancer le build :

```bash
npm install
npm run build
```

Puis ouvrir le fichier `dist/index.html` dans le navigateur pour voir les résultats du fichier `main.ts`.
