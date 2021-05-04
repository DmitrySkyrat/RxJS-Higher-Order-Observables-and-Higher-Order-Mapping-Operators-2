// switchMapTo<T, I, R>(
//   innerObservable: any, 
//   resultSelector?: ( // DEPRECATED
//     outerValue: T, 
//     innerValue: I, 
//     outerIndex: number, 
//     innerIndex: number
//   ) => R
// ): OperatorFunction<T, I | R>

import { fromEvent, interval } from 'rxjs';
import { map, mergeMapTo, switchMapTo, take } from 'rxjs/operators';
import { run } from './../03-utils';


export function switchMapToDemo() {
    const outerObservable = fromEvent(document, 'click');
    const innerObservable = interval(1000).pipe(take(5));

    const stream$ = outerObservable.pipe(
        switchMapTo(innerObservable)
    );

    // run(stream$);
}