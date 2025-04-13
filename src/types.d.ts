declare interface Array<T> {
  myReduce<U>(
    callback: (
      accumulator: U,
      currentValue: any,
      currentIndex: number,
      array: any[]
    ) => U,
    initialValue?: U
  ): U;
}
declare interface Array<T> {
  myMap(callback: (element: T, index: number, array: T[]) => any): any[];
}
declare interface Array<T> {
  myFilter(callback: (element: T, index: number, array: T[]) => boolean): T[];
}
declare interface Array<T> {
  myMap(callback: (element: T, index: number, array: T[]) => any): T[];
}
declare interface Promise {
  myAll(promises: Promise<any>[]): Promise<any[]>;
}

interface Object {
  myGroupBy<T>(
    array: T[],
    callback: (element: T) => string
  ): Record<string, T[]>;
}

interface Array<T> {
  mySort(callback?: (a: T, b: T) => number): T[];
}

declare interface Array<T> {
  myFind(
    callback: (element: T, index: number, array: T[]) => any
  ): T | undefined;
}
