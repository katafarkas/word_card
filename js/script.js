import { words } from "./words.js";

/* Kiválaszt egy random objectet (szót) a words tömbből */
function getRandomElement(arrayToRandom) {
  return arrayToRandom[Math.floor(Math.random() * arrayToRandom.length)];
}

/* Betölti a kiválasztott random szót a DOM-ba */
export function loadRandomWord() {
  const choosenWord = getRandomElement(words);
  document.getElementById("hu-span").innerHTML = choosenWord.hu;
  document.getElementById("eng-span").innerHTML = choosenWord.eng;
}

/* Átpasszoljuk a moduláris functiont a DOM-nak, hogy lehesen rá hivatkozni a html-ben */
window.loadRandomWord = loadRandomWord;

/* Az oldal betöltődésekor meg is hívjuk 1x a szó betöltést */
loadRandomWord();

