// concatMap<T, R, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
//   resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R // DEPRECATED
// ): OperatorFunction<T, ObservedValueOf<O> | R>

import { of, Observable } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import { run } from './../03-utils';

// antipattern
export function concatMapDemo1() {
  const ids$ = of(1, 2, 3); // <-- ids of objects - Outer Observable

  ids$.subscribe(id => {
    const innerObservable$ = emulateHttpCall(id); // <-- Inner Observable

    // antipattern: subscribe inside subscribe
    // run(innerObservable$);
  });
}

// we take a value from the Outer Observable
// and for each value we create an Inner Observable
// then we want to concatanate all those dirived observables together
// in the right order
// Use Case: Nested streams in sequence
export function concatMapDemo2() {
  const ids$ = of(1, 2, 3); // <-- ids of objects

  const stream$ = ids$.pipe(concatMap(id => emulateHttpCall(id)));

  // run(stream$);
}

// helper function which emulates http call
function emulateHttpCall(id: number): Observable<any> {
  switch (id) {
    case 1:
      return of({ id: 1, name: 'Anna' }).pipe(delay(4000)); // <-- emulation of http call, which returns Observable after 4s
    case 2:
      return of({ id: 2, name: 'Boris' }).pipe(delay(3000)); // <-- pause 3s
    case 3:
      return of({ id: 3, name: 'Clara' }).pipe(delay(2000)); // <-- pause 2s
  }
}


