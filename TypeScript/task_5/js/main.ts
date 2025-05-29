// Définition d'un type nominal en utilisant une propriété unique "brand"

interface MajorCredits {
  credits: number;
  _brand: 'MajorCredits'; // propriété de marque pour un typage nominal
}

interface MinorCredits {
  credits: number;
  _brand: 'MinorCredits'; // propriété de marque pour un typage nominal
}

// Fonction pour additionner des crédits majeurs
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MajorCredits',
  };
}

// Fonction pour additionner des crédits mineurs
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    _brand: 'MinorCredits',
  };
}
