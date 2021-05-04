// mergeMapTo<T, R, O extends ObservableInput<any>>(
//   innerObservable: O, 
//   resultSelector?: // DEPRECATED
//       number | 
//      ((outerValue: T, innerValue: ObservedValueOf<O>, outerIndex: number, innerIndex: number) => R), 
//   concurrent: number = Number.POSITIVE_INFINITY
// ): OperatorFunction<T, ObservedValueOf<O> | R>

import { fromEvent, interval } from 'rxjs';
import { mergeMapTo, take } from 'rxjs/operators';
import { run } from './../03-utils';


export function mergeMapToDemo1() {
    const outerObservable = fromEvent(document, 'click');
    const innerObservable = interval(1000).pipe(take(5))

    const stream$ = outerObservable.pipe(
        mergeMapTo(innerObservable)
    );

    // run(stream$);
}

export function mergeMapToDemo2() {
    const outerObservable = fromEvent(document, 'click');
    const innerObservable = interval(1000).pipe(take(5));
    const concurrent = 2;

    const stream$ = outerObservable.pipe(
        mergeMapTo(innerObservable, concurrent)
    );

    // run(stream$);
}