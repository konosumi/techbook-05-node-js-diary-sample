function addPromise(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('Fail addPromise.')), 100);
  }); 
}
 
// catchによるエラーの捕捉
addPromise(0).catch((error) => {
  // Catch error! Error: Fail addPromise.
  console.error('Catch error!', error);
});