const bodyElement = document.body;
const headerElement = document.querySelector('header');

bodyElement.style.backgroundColor = '#f0f0f0';
bodyElement.style.fontFamily = 'Arial, sans-serif';
headerElement.style.backgroundColor = '#333';
headerElement.style.color = 'white';
headerElement.style.textAlign = 'center';
headerElement.style.padding = '1em 0';

const enlaces = document.querySelectorAll('nav a');

enlaces.forEach(enlace => {
    enlace.style.color = 'white';
});