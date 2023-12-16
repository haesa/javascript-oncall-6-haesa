import OutputView from '../View/OutputView.js';

export default async function repeatAsyncFunction(callback) {
  try {
    return await callback();
  } catch (error) {
    OutputView.printErrorMessage(error);
    return await repeatAsyncFunction(callback);
  }
}
