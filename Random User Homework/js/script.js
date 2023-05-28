
let content = document.querySelector('.content')
let btn = document.querySelector('.btn')

function getData() {
    let id = Math.floor(Math.random() * (10 - 1) + 1)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => {
            content.innerHTML = `
            <div class="img">
            <img src="./img/${id}.jpg" alt="">
        </div>
        <div class="userinfo">
            <p class="fulInfo">
                User name: ${data.name}
                <br>
                Email:  ${data.email}
                <br>
                Address:  ${data.address.city}
                <br>
                Phone: ${data.phone}
            </p>
        </div>
            `

        })



}
btn.addEventListener('click', getData)

