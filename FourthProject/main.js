const itemListEl = document.querySelector(".user-list");
const filterEl = document.querySelector("#filter");

const userList = [];

// Get Data
const renderItemList = (users) => {
  itemListEl.innerHTML = "";
  const htmls = users
    .map((user) => {
      userList.push(user);
      return `<li class="user-item">
          <img src="${user.picture.large}" alt="avatar"/>
          <div class="user-info">
              <h4>${user.name.title}. ${user.name.first} ${user.name.last}</h4>
              <p>${user.location.city}, ${user.location.country}</p>
          </div>
        </li>`;
    })
    .join("");
  itemListEl.innerHTML = htmls;
};

const getData = async () => {
  const address = `https://randomuser.me/api?results=20`;
  const res = await fetch(address);
  const data = await res.json();
  renderItemList(data.results);
};

getData();

// Filter Data

const filterData = (e) => {
  const searchTerm = e.target.value.toLowerCase();
  for (const childNode of itemListEl.children) {
    if (childNode.innerText.toLowerCase().includes(searchTerm)) {
      childNode.classList.remove("hide");
    } else {
      childNode.classList.add("hide");
    }
  }
  //
};

filterEl.addEventListener("input", filterData);
