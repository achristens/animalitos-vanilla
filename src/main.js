// Initialize the player class (player.js):
const player = new Player();

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

  // Create caption with animal name under background image div:
  const caption = document.createElement('figcaption');
  caption.style.backgroundColor = animal.bgColor;
  caption.innerHTML = `
    <h2>${animal.name}</h2>
    <img src="${animal.icon}" alt="${animal.name}" class="animal-icon" />
    `;
  figure.appendChild(caption);

  // Pass event listeners what to listen for (a click) and which function to execute when that happens
  figure.addEventListener('click', (event) => {
    player.play(animal.sound);
  });
  return figure;
}

// Loop through the animals const (animals.js), call createAnimalFigure function and create a figure for each animal
animals.forEach(animal => {
  animalsContainer.appendChild(
    createAnimalFigure(animal)
  );
});
