class Github{

    constructor(clientId,clientSecret) {
        if(!clientId || !clientSecret) {
            return console.warn('Please use a client_id and a client_secret');
          }
        this.client_id=clientId;
        this.client_secret=clientSecret;
        this.repos_count = 7;
        this.repos_sort = 'created: asc';
    }

    async fetchUser(user){//se le agrega las credenciales de client_id y client_secret para poder hacer
        //todas las peticiones que quiera, pues sin las credenciales se podrian hacer sólo unas cuantas
        //busquedas
      const userDataRequest = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);//estos links son consultas
      const repositoriesRequest = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
      const repositories = await repositoriesRequest.json();
      const userData = await userDataRequest.json();
      return {userData,repositories}
    }
}

module.exports=Github;