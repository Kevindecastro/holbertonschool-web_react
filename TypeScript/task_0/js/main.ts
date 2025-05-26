// Définition de l'interface Student
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Création de deux objets étudiants
const student1: Student = {
  firstName: 'Alice',
  lastName: 'Dupont',
  age: 22,
  location: 'Paris',
};

const student2: Student = {
  firstName: 'Bob',
  lastName: 'Martin',
  age: 24,
  location: 'Lyon',
};

// Tableau des étudiants
const studentsList: Student[] = [student1, student2];

// Création du tableau HTML
const table = document.createElement('table');
const headerRow = document.createElement('tr');

// En-têtes du tableau
const headers = ['Prénom', 'Lieu'];
headers.forEach((headerText) => {
  const header = document.createElement('th');
  header.textContent = headerText;
  headerRow.appendChild(header);
});
table.appendChild(headerRow);

// Remplissage du tableau avec les données des étudiants
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;
  row.appendChild(firstNameCell);

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;
  row.appendChild(locationCell);

  table.appendChild(row);
});

// Ajout du tableau au corps du document
document.body.appendChild(table);
