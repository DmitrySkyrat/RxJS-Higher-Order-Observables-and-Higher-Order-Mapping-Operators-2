// exhaustMap<T, R, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
//   resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R // DEPRECATED
// ): OperatorFunction<T, ObservedValueOf<O> | R>
import { fromEvent, interval } from 'rxjs';
import { exhaustMap, take } from 'rxjs/operators';
import { run } from './../03-utils';

// Use Case: Ignore source stream until nested stream emits
export function exhaustMapDemo() {
  const runBtn = document.getElementById('runBtn');

  const clicks$ = fromEvent(runBtn, 'click');
  const stream$ = clicks$.pipe(
      exhaustMap(event => interval(2000).pipe(take(5)))
  );

  // run(stream$);
}


