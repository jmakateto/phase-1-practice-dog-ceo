console.log('%c HI', 'color: firebrick');

// Challenge 1
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

fetch(imgUrl)
  .then(response => response.json())
  .then(data => {
    const dogImageContainer = document.getElementById('dog-image-container');
    
    data.message.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      dogImageContainer.appendChild(imgElement);
    });
  });

// Challenge 2
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

fetch(breedUrl)
  .then(response => response.json())
  .then(data => {
    const breeds = Object.keys(data.message);
    const dogBreedsList = document.getElementById('dog-breeds');
    
    breeds.forEach(breed => {
      const liElement = document.createElement('li');
      liElement.textContent = breed;
      dogBreedsList.appendChild(liElement);
    });
  });

// Challenge 3
const liElements = document.querySelectorAll('li');

liElements.forEach(li => {
  li.addEventListener('click', () => {
    li.style.color = 'red';
  });
});

// Challenge 4
const breedDropdown = document.getElementById('breed-dropdown');

breedDropdown.addEventListener('change', () => {
  const selectedLetter = breedDropdown.value;
  
  liElements.forEach(li => {
    if (li.textContent.startsWith(selectedLetter)) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
});
