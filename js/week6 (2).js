const myPromise = new Promise((resolve, reject) => {
  document.getElementById("promise").textContent = "Waiting on Promise";
  setTimeout(() => {
    resolve();
  }, 2000);
});

myPromise.then(
  function (value) {
    document.getElementById("promise").textContent = "Promise completed";
  },
  function (error) {
    document.getElementById("promise").textContent = "Promise failed";
  }
);
