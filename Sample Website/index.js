function askForName() {
    let name = prompt("What is your name?");
    console.log(name);
    return name
}

function setName(userName) {
    console.log('test');
    let nameDisplay = document.getElementById("user-name");
    nameDisplay.innerHTML = "Your name is: " + userName;
}

let btn = document.getElementById("btn");

btn.addEventListener('click', event => {
    let userName = askForName();
    setName(userName);
})