const UI = require('./ui');
const Github = require('./github');
const {client_id,client_secret} = require('./config.json');

const github = new Github(client_id,client_secret);
const ui = new UI();

const userForm = document.getElementById('userForm');

userForm.addEventListener('submit', (e) => {
    e.preventDefault();//cancela el comportamiento por defecto de refrescar la página
    const textSearch = document.getElementById('textSearch').value;
    if(textSearch !== ''){
        github.fetchUser(textSearch)
            .then(data => {//con esta promesa, creo una variable llamada data la cual recibe los datos y luego utilizo la variable
                if (data.userData.message === 'Not Found'){
                    ui.showMessage('User not exists', 'alert alert-danger mt-2 col-md-12');//primer parámetro el mensaje que ntendrá la alerta
                    //segundo mensaje la clase del div
                }else{
                    console.log(data.userData);
                    ui.showProfile(data.userData);
                    ui.showRepositories(data.repositories);
                }
                
            });    
        }else {
            ui.reset();
          }
   })