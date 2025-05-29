## 📁 Tâche 5 — Brand Convention & Nominal Typing

### 📌 Description

Cette tâche utilise des **propriétés de marque (brand)** pour simuler un **typage nominal** dans TypeScript. Elle permet de distinguer deux types de crédits (`MajorCredits` et `MinorCredits`) qui ont la même structure, mais ne doivent pas être confondus.

### 📁 Arborescence

```
task_5/
├── js/
│   └── main.ts
├── package.json
├── tsconfig.json
└── webpack.config.js
```

### ✅ Fonctionnalités

* Deux interfaces :

  * `MajorCredits` avec `credits: number` et `_brand: 'MajorCredits'`
  * `MinorCredits` avec `credits: number` et `_brand: 'MinorCredits'`
* Deux fonctions :

  * `sumMajorCredits()` pour additionner des `MajorCredits`
  * `sumMinorCredits()` pour additionner des `MinorCredits`

### 🧪 Test

Lancer le build :

```bash
npm install
npm run build
```
