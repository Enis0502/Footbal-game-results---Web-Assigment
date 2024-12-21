let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
    //1. add class darkmode to the body
    document.body.classList.add('darkmode');
    //2. update darkmode in localstorage
    localStorage.setItem('darkMode', 'enabled');
    darkModeToggle.textContent = 'Light theme';
}

const disableDarkMode = () => {
    //1. add class darkmode to the body
    document.body.classList.remove('darkmode');
    //2. update darkmode in localstorage
    localStorage.setItem('darkMode', null);
    darkModeToggle.textContent = 'Dark theme';
    
}

if (darkMode === 'enabled'){
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
    // get their darkMode setting
    darkMode = localStorage.getItem('darkMode'); 
    // if it not current enabled, enable it
    if (darkMode !== 'enabled') {
      enableDarkMode();
      console.log(darkMode);
    // if it has been enabled, turn it off  
    } else {  
      disableDarkMode();
      console.log(darkMode);
    }
  });