const content     = document.querySelector('.js-content');
const spinner     = content.querySelector('.js-loading-spinner');
const button      = content.querySelector('.js-spinner-button');
const copy        = content.querySelector('.js-loading-spinner-copy');
const pauseClass  = '-paused';
const loadingCopy = 'Content is loading.';
const loadedCopy  = 'Content has loaded.';

button.addEventListener('click', () => {
    if(spinner.classList.contains(pauseClass)) {
        spinner.classList.remove(pauseClass); 
        copy.innerHTML = loadingCopy;
        button.innerHTML = 'Pause spinner';
    } else {
        spinner.classList.add(pauseClass);    
        copy.innerHTML = loadedCopy;
        button.innerHTML = 'Play spinner';
    }
});

Resources