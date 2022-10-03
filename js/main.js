function count() {
  let text = document.querySelector('.text');
  let words = document.querySelector('.words');
  let characters = document.querySelector('.characters');

  text.addEventListener('input', () => {
    characters.textContent = text.value.length;
    let word = text.value.trim();
    words.textContent = word.split(/\s+/).filter(item => item).length;
  });
}

count();


