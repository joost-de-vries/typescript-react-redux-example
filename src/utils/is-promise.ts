/**
 * Returns whether the provided value is a promise
 *
 */
export default function isPromise(promise?: Promise<any> | any | null): boolean {
  if (promise !== null && typeof promise === 'object') {
    return promise.promise && typeof promise.promise.then === 'function';
  } else {
    return false;
  }
}
