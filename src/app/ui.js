class UI{
    constructor(){
        this.profile = document.getElementById('profile');
    }

    showProfile(user){
        this.profile.innerHTML = `
        <div class="card mt-2 animated bounceInLeft">
        <img src="${user.avatar_url}" class="card-img-top"/>        
        <div class="card-body">
          <h3 class="card-title">${user.name} / ${user.login}</h3>
          <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">
            View Profile
          </a>
          <span class="badge badge-success">
            followers: ${user.followers}
          </span>
          <span class="badge badge-primary">
            following: ${user.following}
          </span>
          <span class="badge badge-warning">
            company: ${user.company}
          </span>
          <span class="badge badge-info d-block">
            blog: ${user.blog}
          </span>
        </div>
      </div>
        `;
        this.clearMessage();
    }

    showMessage(message, cssClass) {
        this.clearMessage();
        const div = document.createElement('div');//aquí creo con javascript un div
        div.className = cssClass;//le asigno el nombre al div que mandé de segundo parámetro 
        div.appendChild(document.createTextNode(message));//agrego un nuevo elemento html que dará el mensaje un nodo de texto
        const content = document.querySelector('.row');//obtengo la fila
        const profile = document.querySelector('#profile');//obtengo el id profile
        content.insertBefore(div, profile);//le digo que agregue el nuevo div antes del profile
        setTimeout(() => this.clearMessage(), 3000);
      }

      clearMessage() {
        const alertfound = document.querySelector('.alert');//busca un elemnto del html que tenga una clase alert
        if(alertfound) {//si existe
          alertfound.remove();//remuevalo
        }//de lo contrario no haga nada
      }
      showRepositories(repositories) {
        console.log(repositories)
        let template = '';
        repositories.forEach(repo => {//se coloca una fila y de a 6 y 6 porque es de a una tarjeta y la parte por la mitad
          template += `
            <div class="card card-body mt-2 animated bounceInUp">
              <div class="row">
                <div class="col-md-6">
                  <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge badge-primary">
                      Language: ${repo.language}
                    </span>
                    <span class="badge badge-success">
                      forks: ${repo.forks_count}
                    </span>
                </div>
              </div>
            </div>
          `;
        });
        document.getElementById('repositories').innerHTML = template;
      }

      reset() {
        this.profile.innerHTML = `
          <div class="container mt5">
            <h3 class="display-2 text-center">Learn Something New Everydary</h3>
          </div>
        `
      }
}

module.exports=UI;