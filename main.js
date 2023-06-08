const generateBtn = document.getElementById('generate-btn');
const schizoImage = document.getElementById('schizo-image');

const schizoImages = [
    './schizophrenia/_1.jpg',
    './schizophrenia/_2.jpg',
    './schizophrenia/_3.jpg',
    './schizophrenia/_4.jpg',
    './schizophrenia/_5.jpg',
    './schizophrenia/_6.jpg',
    './schizophrenia/_7.jpg',
    './schizophrenia/_8.jpg',
    './schizophrenia/_9.jpg',
    './schizophrenia/_10.jpg',
    './schizophrenia/_11.jpg',
    './schizophrenia/_12.jpg',
    './schizophrenia/_13.jpg',
    './schizophrenia/_14.jpg',
    './schizophrenia/_15.jpg',
    './schizophrenia/_16.jpg',
    './schizophrenia/_17.jpg',
    './schizophrenia/_18.jpg',
    './schizophrenia/_19.jpg',
    './schizophrenia/_20.jpg',
    './schizophrenia/_21.jpg',
    './schizophrenia/_22.jpg',
    './schizophrenia/_23.jpg',
    './schizophrenia/_24.jpg',

];

function generateRandomCat() {
    const randomIndex = Math.floor(Math.random() * schizoImages.length);
    const randomSchizoImage = schizoImages[randomIndex];
    schizoImage.src = randomSchizoImage;
}

generateBtn.addEventListener('click', generateRandomCat);
