### Tâche 8 : Espaces de noms ambiants (Ambient Namespaces)

---

#### 🎯 Objectif

L'objectif de cette tâche est d'utiliser les **types ambiants** dans TypeScript pour typer une bibliothèque externe JavaScript (fichier `crud.js`) qui simule des opérations CRUD (Create, Read, Update, Delete).

---

#### 📁 Structure du projet

```
task_3/
├── js/
│   ├── crud.js         # Bibliothèque externe JavaScript
│   ├── crud.d.ts       # Déclarations de type (fichier ambient)
│   ├── interface.ts    # Types et interfaces TypeScript
│   └── main.ts         # Code principal TypeScript
├── dist/
│   ├── bundle.js
│   └── index.html
├── tsconfig.json
├── webpack.config.js
├── package.json
└── README.md
```

---

#### 🛠️ Étapes réalisées

1. **Création de types et interface** dans `interface.ts` :

   * `RowID` : un alias pour `number`
   * `RowElement` : interface avec `firstName`, `lastName`, et `age?`

2. **Création d’un fichier JavaScript tiers** `crud.js` simulant :

   * `insertRow(row)`
   * `deleteRow(rowId)`
   * `updateRow(rowId, row)`

3. **Création du fichier de déclaration ambient `crud.d.ts`** :

   * Ce fichier importe les types de `interface.ts` et fournit des signatures TypeScript pour les fonctions JS externes.

4. **Utilisation dans `main.ts`** :

   * Importation des types et du module CRUD
   * Insertion d’un `RowElement`
   * Mise à jour de la ligne avec l’âge
   * Suppression de la ligne

---

#### ✅ Résultat attendu

```bash
Insert row { firstName: "Guillaume", lastName: "Salva" }
Update row 125 { firstName: "Guillaume", lastName: "Salva", age: 23 }
Delete row id 125
```

*(Note : les ID sont générés aléatoirement)*

---

#### 🧪 Tests & Compilation

```bash
npm install
npm run build
```

* ✅ Aucune erreur TypeScript ne doit apparaître.
* 🧠 Intellisense fonctionnel grâce au fichier `crud.d.ts`.
