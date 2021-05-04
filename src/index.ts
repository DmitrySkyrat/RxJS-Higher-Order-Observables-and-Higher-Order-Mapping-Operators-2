import { runner } from './02-practice/tasks';
import { concatMapDemo1, concatMapDemo2, concatMapToDemo, exhaustMapDemo, mergeMapDemo, mergeMapToDemo1, mergeMapToDemo2, switchMapDemo, switchMapToDemo } from './01-project-value-into-output-observable';
console.log(`Hi, Rxjs`);


// ************************************************
// *                         Higher-Order Operators
// ************************************************
concatMapDemo1();
concatMapDemo2();
mergeMapDemo();
switchMapDemo()
exhaustMapDemo();

concatMapToDemo();
mergeMapToDemo1();
mergeMapToDemo2();
switchMapToDemo();

runner();