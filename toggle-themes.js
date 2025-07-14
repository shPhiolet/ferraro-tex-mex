const DEFAULT_THEME = 'dark'
// The button that toggles the theme.
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
// Make the buttons (if there are multiple) into an array so we can iterate
// through them more easilly later on.
const buttons = Array.from(document.getElementsByClassName('btn'));

// Returns the name of the other theme.
const getOppositeTheme = () => {
  return currentTheme === 'dark' ? 'light' : 'dark';
}

// Sets the theme to the targetTheme.
const setTheme = targetTheme => {
  htmlElement.setAttribute('data-bs-theme', targetTheme);
  themeToggle.src = `${targetTheme}-mode.svg`;
  buttons.forEach(button => {
    button.className = `btn btn-${getOppositeTheme()}`;
  });
}

// On page load: set the theme, and add an event listener to the toggle button
// so that we can toggle the theme.
let currentTheme = DEFAULT_THEME;
setTheme(currentTheme);

themeToggle.addEventListener('click', () => {
  currentTheme = getOppositeTheme();
  setTheme(currentTheme);
});


