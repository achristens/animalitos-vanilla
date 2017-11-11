class Album {
  constructor(){
    this.section = document.createElement('section');
    this.section.className = 'album';
    document.body.appendChild(this.section);
  }

  show(animal) {
    // classList gives you access to all classes on an element in more of an array format vs a list of classes in a string. Using add lets you "push" a new class on to the list.
    this.section.classList.add('active');

    // This is your API key from your Unsplash dashboard:
    const clientID = '8ada5ee6cc856eed0670a3c10b66c19b1a8a1b341c9efb66c313c49597806e16';

    // This is one of many ways to call an API from javascript, this is where you add the end point - note the '.then' function the end, it's called a 'promise':
    fetch(`https://api.unsplash.com/search/photos?client_id=${clientID}&query=${animal.name}`).then((response) => {
      return response.json(); //Once you have the JSON, then...
    }).then(data => {
      this.displayImages(data.results); //data.results is from the JSON response - you can look at this in Postman or the console
    });
  }

  displayImages(images){
    const imageTags = images.map((image) => {
      return `<img src="${image.urls.regular}" alt="${image.description}" />`;
    });

    this.section.innerHTML = imageTags.join('');
  }

  hide(){
    this.section.classList.remove('active');
  }
}
