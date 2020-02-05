import { interval, of, from, Observable, Subject, fromEvent } from "rxjs";
import { filter, map, switchMap, take, tap, debounceTime, distinctUntilChanged } from "rxjs/operators";
import { fromFetch } from 'rxjs/fetch';
import "./models";

const users = `https://jsonplaceholder.typicode.com/users`;
const rxjsBtn = document.getElementById('rxjs');
const display = document.querySelector('#work .result');
const filterInput = document.getElementById('user-filter');
const stream$ = new Subject();
const stream1$ = new Subject();


fromEvent(filterInput, 'keyup')
    .pipe(
        map((event) => (event.target).value),
        filter(res => res.length >= 2),
        debounceTime(1000),
        distinctUntilChanged()
    ).subscribe(res => stream1$.next(res));


stream$.subscribe({
    next: (value => {
        fetch(value)
        .then(response => response.json())
        .then(json => json.map((obj) => obj.name = new User))
        .then(userNames => display.innerHTML = userNames)
    })
});

stream1$.subscribe((value) => {
        fetch(users)
        .then(response => response.json())
        .then(json => json.map((obj) => obj.name).filter(name => name.indexOf(value) > -1))
        .then(userNames => display.innerHTML = userNames)
    });



rxjsBtn.addEventListener('click', () => {
    stream$.next(users);
})



