import { interval, of, from, Observable } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { filter, map, switchMap } from "rxjs/operators";
import { fromFetch } from 'rxjs/fetch';

//import { IUsers, IAddress, ICompany, IGeo } from "./models";

const rxjsBtn = document.getElementById('rxjs');
const users = `https://jsonplaceholder.typicode.com/users`;
const display = document.querySelector('#work .result')


//const usersCounter = `${users}/${counter(1)}`;


// const showUsers$ = new Observable(observer => {
//     observer.next(users);
    
// })

// showUsers$.subscribe(value => {
//     fetch(value)
//     .then(response => response.json())
//     .then(json => console.log(json.map((obj) => obj.name)))
// })

ajax(users).pipe(
    map(res => res))
    .subscribe(res => {
        for (let a of res.response) {
            getUsers(a);
        }
    })

function getUsers(data) {
    console.log(data.name);
}

// function publishUsers(data){
//     data.
// }





rxjsBtn.addEventListener('click', () => {
    interval(1000)
    ajax(users).pipe(
        map(res => res))
        .subscribe(res => {
            for (let objects of res.response) {
                display.innerHTML = objects.name;
            }
        })
})
