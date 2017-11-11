// Create new section on page and append to the body:
const animalsContainer = document.createElement('section');
animalsContainer.className = 'animals';
document.body.appendChild(animalsContainer);

// Create the figure tag for an individual animal and return it:
const createAnimalFigure = (animal) => {
  const figure = document.createElement('figure');
  figure.className = 'animal';

  // Create background div, insert each animals 'image' and append it to the figure you created above:
  const background = document.createElement('div');
  background.className = 'background';
  background.style.backgroundImage = `url('${animal.image}')`;
  figure.appendChild(background);

  return figure;
}

// Loop through the animals const (animals.js), call createAnimalFigure function and create a figure for each animal
animals.forEach(animal => {
  animalsContainer.appendChild(
    createAnimalFigure(animal)
  );
});
