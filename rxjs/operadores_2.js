const {interval, map, concatAll, catchError} = require('rxjs')
const { ajax } = require('rxjs/ajax')
const XMLHttpRequest = require('xhr2')


const xhr = new XMLHttpRequest()

ajax({
  
    createXHR: () => xhr,
    url: 'https://api.github.com/users/cod3rcursos/repos'
   
})
.pipe(
    map(resp => resp.response),
    concatAll(),
    map(repo => repo.full_name)
).subscribe(console.log)


console.log('FIM')