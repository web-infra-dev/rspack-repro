import { answer } from './answer';
function render() {
  document.getElementById(
    'root'
  ).innerHTML = `The answer to the universe is ${answer}.`;
}
render();