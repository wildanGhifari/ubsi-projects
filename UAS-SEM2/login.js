const userName = document.getElementById('name');
const pass = document.getElementById('pass');
const loginForm = document.getElementById('form-login');

const dataUser = [
    {
        "name" : "Wildan",
        "pass" : "12341234"
    }
]

const login = (name, pass, dataUser) => {
    const user = dataUser.filter(data => data.name.toLowerCase() == name.toLowerCase() && data.pass == pass)
    if (user.length != 0){
        localStorage.setItem('user', user[0].name)
    } else {
        console.log('Tidak ada user')
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    login(userName.value, pass.value, dataUser)
})