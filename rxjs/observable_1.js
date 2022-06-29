const { Observable } = require('rxjs')

const promise = new Promise(resolve => {
    resolve('Promise é bem legal')
})


const obs = new Observable(subscriber => {
    subscriber.next('Observer')
    subscriber.next('é')
    setTimeout(() => {  subscriber.next('bem legal')}, 2000)
  
})

promise.then(console.log)
obs.subscribe(console.log)