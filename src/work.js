import { interval, of, from, Observable, Subject, fromEvent } from "rxjs";
import { ajax } from 'rxjs/ajax';
import { filter, map, switchMap, take, tap } from "rxjs/operators";
import { fromFetch } from 'rxjs/fetch';
//import { IUsers, IAddress, ICompany, IGeo } from "./models";

const users = `https://jsonplaceholder.typicode.com/users`;
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#work .result');
const filterInput = document.getElementById('user-filter');
const stream$ = new Subject();
const input$ = fromEvent(filterInput, 'input');
const result = input$.pipe(switchMap( value => {
    fetch(value);
}));


const data$ = fromFetch(users).pipe(
    switchMap(response => {
        return response.json()
        .then(json => json.map((obj) => obj.name))
        
    })
        
)

data$.subscribe({
    next: result => console.log(result),
    complete: () => console.log('done')
   })


stream$.subscribe({
    next: (value => {
            fetch(value)
            .then(response => response.json())
            .then(json => json.map((obj) => obj.name))
            .then(userNames => display.innerHTML = userNames)
        }),

});


rxjsBtn.addEventListener('click', () => {
    stream$.next(users);
})
filterInput.addEventListener('input', () => {

})





