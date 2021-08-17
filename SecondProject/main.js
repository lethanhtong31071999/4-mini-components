const sliderContainer = document.querySelector(".slider-container");
const rightSlide = document.querySelector(".right-slide-container");
const leftSlide = document.querySelector(".left-slide-container");
const upBtn = document.querySelector(".up-button");
const downBtn = document.querySelector(".down-button");

const slideLength = rightSlide.querySelectorAll(".right-slide-img").length;

let currentIndex = 0;
leftSlide.style.top = `-${slideLength - 1}00vh`;
const currentLeftSlideTop = leftSlide.style.top;

const handleOnClickBtnUp = () => {
  console.log("index: ", currentIndex);

  if (currentIndex < slideLength - 1) {
    currentIndex++;
    const currentLeftSlideTop = leftSlide.style.top;
    console.log("top: ", currentLeftSlideTop);
    leftSlide.style.top = `calc(${currentLeftSlideTop} + 100vh)`;
    rightSlide.style.transform = `translateY(-${currentIndex}00vh)`;
  } else {
    currentIndex = 0;
    rightSlide.style.transform = `translateY(0)`;
    leftSlide.style.top = `-${slideLength - 1}00vh`;
  }
};

upBtn.addEventListener("click", handleOnClickBtnUp);

const handleOnClickBtnDown = () => {
  if (currentIndex > 0) {
    currentIndex--;
    const currentLeftSlideTop = leftSlide.style.top;
    console.log("top: ", currentLeftSlideTop);
    rightSlide.style.transform = `translateY(-${currentIndex}00vh)`;

    leftSlide.style.top = `calc(${currentLeftSlideTop} - 100vh)`;
  } else if (currentIndex === 0) {
    currentIndex = slideLength - 1;
    rightSlide.style.transform = `translateY(-${slideLength - 1}00vh)`;
    leftSlide.style.top = `00vh`;
  }
};

downBtn.addEventListener("click", handleOnClickBtnDown);

setInterval(handleOnClickBtnUp, 2000);
