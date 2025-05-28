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

// Stockage des étudiants dans un tableau
const studentsList: Student[] = [student1, student2];

// Création d'une table HTML pour afficher les informations des étudiants
const table = document.createElement('table');
const headerRow = document.createElement('tr');
const headerFirstName = document.createElement('th');
const headerLocation = document.createElement('th');

headerFirstName.textContent = 'First Name';
headerLocation.textContent = 'Location';

headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);

// Parcours du tableau d'étudiants pour ajouter chaque étudiant à la table
studentsList.forEach((student) => {
  const row = document.createElement('tr');
  const firstNameCell = document.createElement('td');
  const locationCell = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

// Ajout de la table au corps du document HTML
document.body.appendChild(table);
