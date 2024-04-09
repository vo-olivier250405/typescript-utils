// const test = (i: number = 0): void => {
//   if (i > 10) return;
//   console.log(i);
//   return test(i + 1);
// };

// const arr = [1, 2, 3].reduce((acc, val) => acc + val, 0);

// const recursiveReduce = (
//   arr: number[],
//   acc: any,
//   func: (...arg: any) => void
// ): any => {
//   if (arr.length <= 0) return acc;
//   const [head, ...rest] = arr;
//   return recursiveReduce(rest, func(head, acc), func);
// };

// const chunkArray = (arr: number[], chunk: number): number[][] => {
//   if (arr.length === 0) return [];
//   if (arr.length === chunk) return [arr];
//   const head = arr.slice(0, chunk);
//   const rest = chunkArray(arr.slice(chunk), chunk);
//   return [head, ...rest];
// };

// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 7], 3));
