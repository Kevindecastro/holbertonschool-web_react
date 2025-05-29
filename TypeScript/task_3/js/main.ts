/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Création d’un objet RowElement
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

// Insertion de la ligne dans la "base de données"
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour avec l’ajout de l’âge
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Appels aux fonctions update et delete
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
