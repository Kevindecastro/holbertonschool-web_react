// Définition de l'interface Student avec les propriétés requises
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création de deux objets étudiants conformes à l'interface Student
const student1: Student = {
  firstName: 'Kevin',
  lastName: 'Castro',
  age: 40,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Noam',
  lastName: 'Travert',
  age: 19,
  location: 'Le Mans',
};

// Stockage des étudiants dans un tableau typé Student[]
const studentsList: Student[] = [student1, student2];

// Création d'une table HTML pour afficher les informations des étudiants
const table: HTMLTableElement = document.createElement('table');
table.border = "1";
table.style.borderCollapse = 'collapse';
table.style.marginTop = '20px';
table.style.textAlign = 'left';
table.style.width = '50%';

// Création de l'en-tête de la table
const headerRow: HTMLTableRowElement = document.createElement('tr');
const headerFirstName: HTMLTableCellElement = document.createElement('th');
const headerLocation: HTMLTableCellElement = document.createElement('th');

headerFirstName.textContent = 'First Name';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Parcours du tableau d'étudiants pour ajouter chaque étudiant à la table
studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Ajout de la table au corps du document HTML
document.body.appendChild(table);
