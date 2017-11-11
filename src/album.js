class Album {
  constructor(){
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    // classList gives you access to all classes on an element in more of an array format vs a list of classes in a string. Using add lets you "push" a new class on to the list.
    this.section.classList.add('active');

    
  }
}
