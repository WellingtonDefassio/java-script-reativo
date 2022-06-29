const { ajax } = require('rxjs/ajax')
const { XMLHttpRequest } =  require('xmlhttprequest')

function createXHR() {
    return new XMLHttpRequest();
  }

ajax({
    createXHR: () => new XMLHttpRequest(),
    method: 'GET',
    url: 'https://api.github.com/users/cod3rcursos/repos'
})
.pipe(
)
.subscribe(console.log)