function timeToWait(ms = 0) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getRandomNumBetween(min = 50, max = 150, randomNumber = Math.random()) {
  return Math.floor(randomNumber * (max - min) + min);
}

// FUNCTIONALITY USING ASYNC 'FOR OF' LOOP
// async function draw(el) {
//   const text = el.textContent;
//   let soFar = '';
//   for (const letter of text) {
//     console.log(letter);
//     soFar += letter;
//     el.textContent = soFar;
//     // Wait for x amount of time
//     const { typeMin, typeMax } = el.dataset;
//     const pseudoTypingSpeed = getRandomNumBetween(typeMin, typeMax);
//     await timeToWait(pseudoTypingSpeed);
//   }
// }

// FUNCTIONALITY USING RECURSION
function draw(el) {
  let index = 1;
  const text = el.textContent;
  const { typeMin, typeMax } = el.dataset;
  async function drawLetter() {
    el.textContent = text.slice(0, index);
    index += 1;
    const pseudoTypingSpeed = getRandomNumBetween(typeMin, typeMax);
    await timeToWait(pseudoTypingSpeed);
    // Exit condition
    if (index <= text.length) {
      drawLetter();
      // Wait for x amount of time
    }
  }
  // When draw() runs, kick of drawLetter
  drawLetter();
}

// const els = document.querySelectorAll('[data-type]');
// els.forEach(el => draw(el));

// ABOVE 2 LINES REFACTORED:
// const els = document.querySelectorAll('[data-type]');
// els.forEach(draw);

// FURTHER REFACTORED
document.querySelectorAll('[data-type]').forEach(draw);
