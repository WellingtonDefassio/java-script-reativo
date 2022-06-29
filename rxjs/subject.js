const {Observable, Subject} = require('rxjs')


function getObservable() {
    return new Observable((subscriber) => {
        setTimeout(() => {
            console.log('#1 obs....')
            subscriber.next(Math.random() * 100)
            subscriber.complete()
        }, 1000)
    })
}


const obs = getObservable()

obs.subscribe(console.log)
obs.subscribe(console.log)
obs.subscribe(console.log)


function getSubject() {
   const subject = new Subject()
   setTimeout(() => {
    console.log('#2 subj.....')
    subject.next(Math.random()*100)
    subject.complete()
   }, 1000)
   return subject
}


const subject = getSubject()

subject.subscribe(console.log)
subject.subscribe(console.log)

