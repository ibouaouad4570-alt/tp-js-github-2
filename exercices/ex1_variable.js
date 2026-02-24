function infoEtudiant(nom, note) {
    if (note >= 10) {
        return nom + " : Admis";
    } else {
        return nom + " : Ajourné";
    }
}

// Test
console.log(infoEtudiant("Nora", 14));
console.log(infoEtudiant("Sara", 8));