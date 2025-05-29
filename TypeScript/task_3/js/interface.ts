// Définition du type RowID et de l'interface RowElement
export type RowID = number;

export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // champ optionnel
}
