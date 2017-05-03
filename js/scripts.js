var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var animal = 'Zielone słonie';
var animalUpperCase = animal.toUpperCase(animal);
var animalCharsAfter = text.replace('Papugi', animalUpperCase);
var partOftext = animalCharsAfter.slice(1, 45);
console.log(partOftext);

