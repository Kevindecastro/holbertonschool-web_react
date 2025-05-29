// === Tâche 5: Interfaces Director et Teacher ===

// Interface pour les Directeurs
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Interface pour les Enseignants
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Classe Director qui implémente DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// Classe Teacher qui implémente TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// Fonction qui retourne une instance de Teacher ou Director selon le salaire
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// === Tâche 6: Fonctions spécifiques aux employés ===

// Type predicate : détermine si l'employé est un directeur
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Exécute le bon travail selon le type de l'employé
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// === Tâche 7: String literal types ===

// Type littéral: seules les valeurs 'Math' ou 'History' sont valides
type Subjects = 'Math' | 'History';

// Fonction qui retourne une phrase selon la matière enseignée
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

// === Exemples d’utilisation ===

console.log(createEmployee(200));          // Teacher {}
console.log(createEmployee(1000));         // Director {}
console.log(createEmployee('$500'));       // Director {}

console.log(executeWork(createEmployee(200)));    // Getting to work
console.log(executeWork(createEmployee(1000)));   // Getting to director tasks

console.log(teachClass('Math'));           // Teaching Math
console.log(teachClass('History'));        // Teaching History
