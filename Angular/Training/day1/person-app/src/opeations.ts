export function add(a: number, b: number) {
  return a + b;
}
export function substract(a: number, b: number) {
  return a - b;
}

// rest paramater ES 2015
export function calculateAverage(name: string, ...marks: number[]): number {
  let sum = 0;
  // for of syntax.
  for (const mark of marks) {
    sum += mark;
  }
  return sum / marks.length;
}

export function divide(a: number, b: number): number {
  const res = a / b;
  if (res == Infinity) throw new Error("denominator cannot be zero");
  return res;
}

export function divideWithPromise(a: number, b: number): Promise<unknown> {
  let promise = new Promise((resolve, reject) => {
    const res = a / b;
    if (res == Infinity) {
      let err = new Error("denominator cannot be zero");
      reject(err);
    }
    resolve(res);
  });
  return promise;
}


export const divideWithAsync = async (a: number, b: number) => {
  const res = a / b;
  if (res == Infinity) {
    let err = new Error("denominator cannot be zero");
    return err;
  }
  return res;
};
