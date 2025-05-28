// ========== TÂCHE 1 : Interface Teacher ==========

/**
 * Interface représentant un enseignant
 * - firstName et lastName sont en lecture seule
 * - yearsOfExperience est optionnel
 * - [propName: string]: any permet d'ajouter d'autres propriétés dynamiques
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any; // propriété dynamique
}

// Exemple d'utilisation
const teacher3: Teacher = {
  firstName: 'Axel',
  lastName: 'Goré',
  fullTimeEmployee: false,
  location: 'Laval',
  contract: false, // propriété dynamique ajoutée
};

console.log(teacher3);
// Output attendu :
// {
//   firstName: "Axel",
//   lastName: "Goré",
//   fullTimeEmployee: false,
//   location: "Laval",
//   contract: false
// }


// ========== TÂCHE 2 : Interface Directors ==========

/**
 * Interface représentant un directeur, qui hérite de Teacher
 * - Ajoute la propriété numberOfReports obligatoire
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

// Exemple d'utilisation
const director1: Directors = {
  firstName: 'Axel',
  lastName: 'Goré',
  location: 'Laval',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Output attendu :
// {
//   firstName: "Axel",
//   lastName: "Goré",
//   location: "Laval",
//   fullTimeEmployee: true,
//   numberOfReports: 17
// }


// ========== TÂCHE 3 : Fonction printTeacher ==========

/**
 * Interface pour une fonction prenant un prénom et un nom
 * et retournant une chaîne formatée sous forme "X. Nom"
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implémentation de la fonction
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Exemple d’utilisation
console.log(printTeacher("Axel", "Goré"));


// ========== TÂCHE 4 : Classe StudentClass ==========

/**
 * Interface représentant le constructeur de StudentClass
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Interface représentant les méthodes d’un étudiant
 */
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Classe représentant un étudiant
 * - Implémente StudentClassInterface
 */
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Méthode renvoyant une chaîne de travail
  workOnHomework(): string {
    return 'Currently working';
  }

  // Méthode renvoyant le prénom de l'étudiant
  displayName(): string {
    return this.firstName;
  }
}

// Exemple d'utilisation de la classe
const student = new StudentClass('Gwendal', 'Martin');
console.log(student.displayName());      // Gwendal
console.log(student.workOnHomework());   // Currently working
