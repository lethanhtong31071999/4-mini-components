const tagsEl = document.querySelector("#tags");
const textAreaEl = document.querySelector("#textarea");

const randomTag = () => {
  const tags = document.querySelectorAll(".tag");
  const randomIndex = Math.trunc(Math.random() * tags.length);
  return tags[randomIndex];
};

const randomSelect = () => {
  var setIntervalHighlight = setInterval(() => {
    const tag = randomTag();

    tag.classList.add("highlight");
    setTimeout(() => {
      tag.classList.remove("highlight");
    }, 100);
  }, 100);

  setTimeout(() => {
    clearInterval(setIntervalHighlight);
    const tag = randomTag();
    tag.classList.add("highlight");
  }, 2000);
};

const createTags = (input) => {
  const tagList = input.split(",");

  tagsEl.innerHTML = "";
  const tagListHtmls = tagList
    .map((text) => {
      return `<span class="tag">
        ${text}
    </span>`;
    })
    .join("");
  tagsEl.innerHTML = tagListHtmls;
};

const handleKeyup = (e) => {
  const input = e.target.value;
  console.log("input: ", input);
  if (input !== "") {
    createTags(input);
    if (e.key !== "Enter") return;
    e.target.value = "";
    randomSelect();
  }
};

textAreaEl.addEventListener("keyup", handleKeyup);
