function indentify<T>(arg: T): T {
   return arg;
}

const username = indentify<string>("gautam");
const max = indentify<number>(4);

const arrayFunction = <T>(arr: T[]): T[] => {
   return arr;
};
