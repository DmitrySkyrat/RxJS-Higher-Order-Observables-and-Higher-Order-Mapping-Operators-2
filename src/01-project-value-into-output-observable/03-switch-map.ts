// switchMap<T, R, O extends ObservableInput<any>>(
//   project: (value: T, index: number) => O, 
//   resultSelector?: (outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R // DEPRECATED
// ): OperatorFunction<T, ObservedValueOf<O> | R>
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { run } from './../03-utils';

export function switchMapDemo() {
  const clicks$ = fromEvent(document, 'click');
  const stream$ = clicks$.pipe(
    switchMap(event => interval(1000))
  );

  // run(stream$);
}
