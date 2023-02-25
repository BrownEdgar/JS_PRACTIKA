// # api docs  https://randomuser.me/documentation#howto


const fetchBtn = document.querySelector(".fetch>button")
const userList = document.querySelectorAll("#userList>li")
const info = document.querySelector(".info>h2")
const msmrContent = document.querySelector("#title")
const avatar = document.querySelector("img")
const ageContainer = document.querySelector("#age")
const words = document.querySelector(".email")
const getJson = document.querySelector("#getJson")
const json = document.querySelector("#json>pre")



const options = ["gender", "country", "city", "postcode"]
let user = []


fetchBtn.addEventListener('click', () => {
  fetchBtn.disabled = true;
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(user => {
      updatedata(user.results[0]);
      getJson.classList.add("show")
      fetchBtn.disabled = false;
    })
})

function updatedata(userInfo) {
  user = userInfo

  console.log(user);
  const {
    name: { title, first, last },
    picture: { medium },
    dob: { age },
    registered: { date },
    login: { username },
    location,
    gender,
    email
  } = userInfo;

  avatar.src = medium;
  ageContainer.textContent = age;
  for (let i = 0; i < userList.length; i++) {
    const span = document.createElement("span")
    if (i == 0) {
      span.textContent = gender
      userList[i].lastElementChild.replaceWith(span)
    } else {
      span.textContent = location[options[i]];
      userList[i].lastElementChild.replaceWith(span)
    }
  }
  info.innerHTML = `<span id="title">${title}. &nbsp;</span>J${first} ${last}`
  words.innerHTML = `
        <p><span>email:</span>${email}</p>
        <p><span>username:</span>'${username}'</p>
        <p><span>registered:</span>${date}</p>
  `;
}

getJson.addEventListener('click', (e) => {
  json.classList.toggle("swing")
  json.textContent = JSON.stringify(user, null, 1)

})