const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const text = loadText.firstChild;

let load = 0;

const resultNumber = (load, min, max, minOutput, maxOutput) => {
  return (maxOutput - minOutput) * ((load - min) / (max - min)) + minOutput;
};

const blurring = () => {
  load++;
  loadText.innerHTML = `<h1>${load}%</h1>`;
  loadText.style.opacity = resultNumber(load, 0, 100, 1, 0);
  const blur = resultNumber(load, 0, 100, 70, 0);
  bg.style.filter = `blur(${blur}px)`;
  if (load >= 100) {
    clearInterval(loadingInterval);
  }
};

let loadingInterval = setInterval(blurring, 30);

function scale(x, min, max) {
  return ((x - min) * (0 - 1)) / (max - min) + 1;
}
